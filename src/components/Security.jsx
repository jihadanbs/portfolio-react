import { useEffect, useState } from "react";

const SecurityLayer = () => {
  const [isWarningVisible, setWarningVisible] = useState(false);

  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);

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

    const handleKeyUp = (e) => {
      if (e.key === "PrintScreen") {
        setWarningVisible(true);
        setTimeout(() => {
          setWarningVisible(false);
        }, 3000);
      }
    };
    document.addEventListener("keyup", handleKeyUp);

    // Menambahkan style untuk mematikan seleksi teks
    document.body.style.webkitUserSelect = "none";
    document.body.style.mozUserSelect = "none";
    document.body.style.msUserSelect = "none";
    document.body.style.userSelect = "none";

    // --- Cleanup Function ---
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);

      // Menghapus style dari <body> saat komponen dilepas
      document.body.style.webkitUserSelect = "";
      document.body.style.mozUserSelect = "";
      document.body.style.msUserSelect = "";
      document.body.style.userSelect = "";
    };
  }, []); // Dependensi kosong agar useEffect hanya berjalan sekali

  // Style untuk warning diubah menjadi objek JavaScript
  const warningStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.9)",
    color: "white",
    fontSize: "24px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999999,
  };

  return (
    <>
      {/* Peringatan screenshot menggunakan style dari object */}
      {isWarningVisible && (
        <div id="screenshot-warning" style={warningStyle}>
          🚫 Screenshot tidak diperbolehkan!
        </div>
      )}
    </>
  );
};

export default SecurityLayer;
