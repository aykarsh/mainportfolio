# Portfolio Website

A modern, animated portfolio website built with React, Tailwind CSS, and Framer Motion.

## Project Structure

```
mainportfolio/
├── frontend/          # React frontend application
│   ├── public/       # Public assets
│   ├── src/          # Source files
│   │   ├── components/  # React components
│   │   ├── App.js       # Main App component
│   │   ├── index.js     # Entry point
│   │   └── index.css    # Global styles
│   ├── package.json
│   └── tailwind.config.js
├── backend/          # Express backend API
│   ├── server.js     # Server entry point
│   ├── package.json
│   └── .env.example  # Environment variables template
└── images/           # Image assets folder
```

## Getting Started

### Frontend Setup

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The application will open at `http://localhost:3000`

### Backend Setup (Optional - for future use)

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example`

4. Start the server:
   ```bash
   npm start
   ```

The server will run on `http://localhost:5000`

## Features

- 🎨 Modern, clean design inspired by professional portfolios
- ✨ Smooth animations using Framer Motion
- 📱 Fully responsive layout
- 🎯 Sections: Hero, Biography, Education & Experience, Projects, Contact
- 💌 Contact form (backend integration pending)
- 🎭 Hover effects and transitions
- 📄 Word document-style resume layout

## Customization

Edit the following files to personalize your portfolio:

- `frontend/src/components/Hero.js` - Your name, title, and stats
- `frontend/src/components/Biography.js` - Your bio and contact info
- `frontend/src/components/Education.js` - Your education and experience
- `frontend/src/components/Projects.js` - Your portfolio projects
- `frontend/src/components/Contact.js` - Contact form settings

Add your images to the `images/` folder and update the image paths in the components.

## Technologies Used

- **Frontend:**
  - React.js
  - Tailwind CSS
  - Framer Motion
  
- **Backend (Ready for implementation):**
  - Node.js
  - Express.js
  - CORS

## License

MIT
