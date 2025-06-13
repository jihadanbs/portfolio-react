import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Modal from "./Modal";

gsap.registerPlugin(ScrollTrigger);

const certificates = [
    {
        title: "Internship as Full Stack Developer",
        description: "Achieved for completing Internship as Full Stack Developer in Diskominfo Pesawaran.",
        imgSrc: "/images/sertifikat/sertifikat-magang-diskominfo.pdf",
        type: "pdf"
    },
    {
        title: "MSIB Batch 6",
        description: "Completed the MSIB Batch 6 program",
        imgSrc: "/images/sertifikat/mbkm.jpg",
        type: "image"
    },
    {
        title: "Express Js Fundamental",
        description: "Finished the Express.js course",
        imgSrc: "/images/sertifikat/codepolitan-express.pdf",
        type: "pdf"
    },
    {
        title: "Payment Gateway Laravel",
        description: "Completed the Laravel Payment Gateway course",
        imgSrc: "/images/sertifikat/codepolitan-laravel.pdf",
        type: "pdf"
    },
    {
        title: "Mongo DB Fundamental",
        description: "Completed the MongoDB Fundamental course",
        imgSrc: "/images/sertifikat/codepolitan-mongodb.pdf",
        type: "pdf"
    },
    {
        title: "Node Js Fundamental",
        description: "Completed the Node.js Fundamental course",
        imgSrc: "/images/sertifikat/codepolitan-nodejs.pdf",
        type: "pdf"
    },
    {
        title: "Git Fundamental",
        description: "Completed the Git Fundamental course",
        imgSrc: "/images/sertifikat/codepolitan-dasar-git.pdf",
        type: "pdf"
    },
    {
        title: "Dasar-dasar Pemrograman",
        description: "Finished the Basic Programming course",
        imgSrc: "/images/sertifikat/codepolitan-dasar-pemrograman.pdf",
        type: "pdf"
    },
    {
        title: "Logika Dasar Pemrograman",
        description: "Completed the Programming Logic course",
        imgSrc: "/images/sertifikat/codepolitan-logika-dasar.pdf",
        type: "pdf"
    },
    {
        title: "Mini Project Calculator",
        description: "Built a mini project calculator app",
        imgSrc: "/images/sertifikat/mini-project-calculator.pdf",
        type: "pdf"
    }
];

const Sertifikat = () => {
    const scrollRef = useRef(null);
    const cardRefs = useRef([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);
    const autoScrollIntervalRef = useRef(null);
    const [scrollDirection, setScrollDirection] = useState('right');

    useEffect(() => {
        if (cardRefs.current) {
            gsap.fromTo(
                cardRefs.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: scrollRef.current,
                        start: "top 90%",
                        end: "bottom 60%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }
    }, []);

    // Effect untuk auto scroll
    useEffect(() => {
        // Fungsi untuk menghitung posisi scroll maksimum
        const getMaxScrollLeft = () => {
            if (scrollRef.current) {
                return scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
            }
            return 0;
        };

        // Fungsi untuk scroll otomatis
        const autoScroll = () => {
            if (scrollRef.current && autoScrollEnabled) {
                const maxScrollLeft = getMaxScrollLeft();
                const currentScrollLeft = scrollRef.current.scrollLeft;
                
                // Ubah arah scroll jika mencapai batas
                if (currentScrollLeft >= maxScrollLeft - 5) {
                    setScrollDirection('left');
                } else if (currentScrollLeft <= 5) {
                    setScrollDirection('right');
                }
                
                // Scroll berdasarkan arah
                if (scrollDirection === 'right') {
                    scrollRef.current.scrollBy({
                        left: 2,
                        behavior: 'auto'
                    });
                } else {
                    scrollRef.current.scrollBy({
                        left: -2,
                        behavior: 'auto'
                    });
                }
            }
        };

        // Jalankan autoScroll dengan interval 30ms (sekitar 33 FPS)
        autoScrollIntervalRef.current = setInterval(autoScroll, 30);

        // Cleanup interval saat komponen unmount
        return () => {
            if (autoScrollIntervalRef.current) {
                clearInterval(autoScrollIntervalRef.current);
            }
        };
    }, [autoScrollEnabled, scrollDirection]);

    // Pause auto scroll saat hover
    const handleMouseEnter = () => {
        setAutoScrollEnabled(false);
    };

    // Resume auto scroll saat mouse leave
    const handleMouseLeave = () => {
        setAutoScrollEnabled(true);
    };

    const handleClick = (certificate) => {
        setSelectedCertificate(certificate);
        
        // Jika tipe file adalah PDF, buka di tab baru
        if (certificate.type === "pdf") {
            window.open(certificate.imgSrc, "_blank");
        } else {
            // Jika bukan PDF, tampilkan di modal
            setIsModalOpen(true);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedCertificate(null);
    };

    // Fungsi untuk scroll ke kiri manual
    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: -410,
                behavior: "smooth",
            });
            // Set arah scroll otomatis ke kiri setelah klik tombol kiri
            setScrollDirection('left');
        }
    };

    // Fungsi untuk scroll ke kanan manual
    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: 410,
                behavior: "smooth",
            });
            // Set arah scroll otomatis ke kanan setelah klik tombol kanan
            setScrollDirection('right');
        }
    };

    // Fungsi untuk render preview sertifikat
    const renderCertificatePreview = (certificate, index) => {
        // Untuk file PDF, tampilkan thumbnail PDF
        if (certificate.type === "pdf") {
            return (
                <div className="flex justify-center items-center w-[400px] h-[200px] bg-gray-100 rounded-lg">
                    <div className="text-center">
                        <div className="flex justify-center">
                            <svg 
                                className="w-16 h-16 text-red-500" 
                                fill="currentColor" 
                                viewBox="0 0 20 20" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path 
                                    fillRule="evenodd" 
                                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" 
                                    clipRule="evenodd" 
                                />
                            </svg>
                        </div>
                        <p className="mt-2 font-medium text-gray-800">PDF Dokumen</p>
                        <p className="text-sm text-gray-600 mt-1">Klik untuk membuka</p>
                    </div>
                </div>
            );
        }
        
        // Untuk file gambar, tampilkan gambar
        return (
            <img
                src={certificate.imgSrc}
                alt={certificate.title}
                className="w-[400px] h-[200px] rounded-lg object-cover shadow-lg"
            />
        );
    };

    return (
        <section id="sertifikat" className="section1 pt-32 overflow-hidden relative">
            <div className="container max-w-[1450px] mx-auto px-4">
                <h2 className="headline-2 mb-8 reveal-up">Achievement</h2>

                {/* Container Kartu dengan Tombol Scroll */}
                <div className="relative">
                    {/* Tombol Scroll Kiri */}
                    <button
                        onClick={scrollLeft}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-10 hover:bg-opacity-70 transition-all"
                        aria-label="Scroll left"
                    >
                        &#10094; {/* Ikon panah kiri */}
                    </button>

                    {/* Container Kartu */}
                    <div
                        ref={scrollRef}
                        className="flex items-stretch gap-3 w-full overflow-x-auto scrollbar-hidden cursor-grab active:cursor-grabbing"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {certificates.map((certificate, index) => (
                            <div
                                key={`${certificate.title}-${index}`}
                                ref={(el) => (cardRefs.current[index] = el)}
                                className="sm:min-w-[300px] flex-shrink-0 snap-center relative cursor-pointer group transform transition-all duration-500 hover:scale-105"
                                onClick={() => handleClick(certificate)}
                            >
                                {renderCertificatePreview(certificate, index)}
                                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-100 group-hover:opacity-0 flex justify-center items-center text-black p-4 transition-opacity duration-700">
                                    <div className="text-center">
                                        <h3 className="text-xl font-bold text-white">{certificate.title}</h3>
                                        <p className="mt-2 text-[17px] text-white">{certificate.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Tombol Scroll Kanan */}
                    <button
                        onClick={scrollRight}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-10 hover:bg-opacity-70 transition-all"
                        aria-label="Scroll right"
                    >
                        &#10095; {/* Ikon panah kanan */}
                    </button>
                </div>
            </div>

            {/* Modal hanya untuk gambar, bukan PDF */}
            {isModalOpen && selectedCertificate && selectedCertificate.type !== "pdf" && (
                <Modal onClose={handleCloseModal}>
                    <div className="flex justify-center items-center">
                        <img
                            src={selectedCertificate.imgSrc}
                            alt={selectedCertificate.title}
                            className="w-full md:h-[550px] rounded-lg object-cover"
                        />
                    </div>
                </Modal>
            )}
        </section>
    );
};

export default Sertifikat;