/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontSize: {
        'course-details-heading-small': ['26px', '36px'],
        'course-details-heading-large': ['36px', '44px'],
        'home-heading-small': ['28px', '34px'],
        'home-heading-large': ['48px', '56px'],
        'default': ['15px', '21px'],
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))',
      },
      spacing: {
        'section-height': '500px',
      },
      maxWidth:{
        'course-card':'420px'
      },
      boxShadow:{
        'custom-card':'0px 4px 2px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
};
