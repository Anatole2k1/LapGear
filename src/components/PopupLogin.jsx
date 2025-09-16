export default function Popuplogin({ onClose }) {
	const handleBackdropClick = (e) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	}
  return (
    <div onClick={handleBackdropClick} className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-xl font-semibold mb-4">Đăng nhập</h2>
        <form>
          <input
            type="text"
            placeholder="Email"
            className="w-full px-4 py-2 mb-3 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded"
          />
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
}
