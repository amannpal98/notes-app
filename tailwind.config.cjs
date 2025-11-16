module.exports = {
content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
theme: {
extend: {
colors: {
primary: {
50: '#f5fbff',
100: '#eaf7ff',
500: '#3b82f6',
},
accent: '#7c3aed'
},
boxShadow: {
'card': '0 6px 18px rgba(22, 28, 45, 0.08)'
}
},
},
plugins: [],
}