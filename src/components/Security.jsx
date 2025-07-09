import { useEffect, useState } from "react";

const SecurityLayer = () => {
  // State untuk mengontrol visibilitas peringatan screenshot
  const [isWarningVisible, setWarningVisible] = useState(false);

  useEffect(() => {
    // --- Logika untuk event listener ---

    // 1. Blok klik kanan
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);

    // 2. Blok tombol shortcut keyboard
    const handleKeyDown = (e) => {
      if (
        e.keyCode === 123 || // F12
        (e.ctrlKey && e.shiftKey && e.code === "KeyI") || // Ctrl+Shift+I
        (e.ctrlKey && e.code === "KeyU") || // Ctrl+U
        (e.ctrlKey && e.code === "KeyS") // Ctrl+S
      ) {
        e.preventDefault();
        return false;
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    // 3. Deteksi tombol Print Screen
    const handleKeyUp = (e) => {
      if (e.key === "PrintScreen") {
        // Tampilkan peringatan
        setWarningVisible(true);
        // Sembunyikan setelah 3 detik
        setTimeout(() => {
          setWarningVisible(false);
        }, 3000);
      }
    };
    document.addEventListener("keyup", handleKeyUp);

    // --- Cleanup Function ---
    // Fungsi ini akan berjalan saat komponen dilepas (unmount)
    // untuk mencegah memory leak.
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []); // Array dependensi kosong agar useEffect hanya berjalan sekali saat mount

  return (
    <>
      {/* Semua styling dijadikan satu di sini */}
      <style jsx global>{`
        body {
          -webkit-user-select: none; /* Safari */
          -moz-user-select: none; /* Firefox */
          -ms-user-select: none; /* IE10+/Edge */
          user-select: none; /* Standard */
        }

        #screenshot-warning {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
          color: white;
          font-size: 24px;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999999;
        }
      `}</style>

      {/* Peringatan screenshot yang tampilannya dikontrol oleh state */}
      {isWarningVisible && (
        <div id="screenshot-warning">🚫 Screenshot tidak diperbolehkan!</div>
      )}
    </>
  );
};

export default SecurityLayer;
