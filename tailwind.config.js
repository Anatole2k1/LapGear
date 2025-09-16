/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",               // nếu dùng Vite
    "./src/**/*.{js,jsx,ts,tsx}", // hỗ trợ ReactJS & TypeScript
  ],
  theme: {
    extend: {
		boxShadow:{
			'glow-blue': '0 0 15px 4px rgba(0, 195, 255, 0.6)',
		},
        fontFamily: {
            poppins: ["Poppins", "sans-serif"],
        },
		keyframes:{
			float: {
				'0% ,100%':{transform: 'translateY(0)'},
				'50%': {transform: 'translateY(-10px)'}
			},
		},
		animation:{
			float: 'float 3s ease-in-out infinite',
		},
	},
  },
  plugins: [],
}

