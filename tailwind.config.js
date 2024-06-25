/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     './src/**/*.{js,jsx,ts,tsx}', // Include all JS and TS files in the src directory and its subdirectories
     './src/auth/**/*.{js,jsx,ts,tsx}', // Include all JS and TS files in the auth directory and its subdirectories
     './src/dashboard/**/*.{js,jsx,ts,tsx}', // Include all JS and TS files in the dashboard directory and its subdirectories
     './public/index.html', 
  ],
  theme: {
     extend: {
       colors: {
        
       },
     },
  },
  plugins: [],
 }
 