module.exports = {
    darkMode: "class",
    content: [
        "./*.html",
        "./src/**/*.{html,js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
        colors: {
            primary: "#4f46e5",
            "background-light": "#f8fafc",
            "background-dark": "#0f172a",
            "card-dark": "#1e293b",
        },
        fontFamily: {
            display: ["Inter", "sans-serif"],
        },
        },
    },
    plugins: [],
}
