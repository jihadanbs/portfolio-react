import React from 'react';

const Modal = ({ onClose, children }) => {
    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={onClose}
        >

            
                {/* Tombol Close di Tengah Atas */}
              
                    <button
                    onClick={onClose}
                    className="absolute top-0 mt-20 left-1/2 transform -translate-x-1/2 text-red-600 font-bold z-60 bg-transparent border-none mb-10"
                >
                    
                </button>
             
            <div
                className="bg-opacity-50 p-4 rounded-lg shadow-lg flex items-center justify-center relative"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Konten Modal */}
                <div className="flex justify-center items-center">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
