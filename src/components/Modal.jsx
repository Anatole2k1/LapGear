import { useEffect } from "react";

export default function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* overlay để click ra ngoài tắt */}
      <div
        className="absolute inset-0"
        onClick={onClose}
      ></div>

      <div className="relative z-10 w-[95%] max-w-md bg-white rounded-xl shadow-lg p-6">
        <button
          className="absolute top-3 right-4 text-gray-600 hover:text-black text-2xl"
          onClick={onClose}
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
