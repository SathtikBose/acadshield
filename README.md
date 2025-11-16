# AcadShield

AcadShield is a modern web application for document verification and authentication. It provides an intuitive interface for uploading, verifying, and managing academic and professional documents using AI-powered verification technology.

## 🚀 Features

- **Document Upload**: Drag-and-drop or click to upload documents (PDF, DOC, DOCX, JPG, PNG)
- **AI-Powered Verification**: Instant document verification against known markers and databases
- **Document Management**: Search and manage your uploaded documents
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI**: Built with Tailwind CSS for a clean and professional interface

## 🛠️ Technologies Used

- **React** 19.1.1 - UI library
- **Vite** 7.1.7 - Build tool and dev server
- **React Router DOM** 7.9.5 - Client-side routing
- **Tailwind CSS** 4.1.16 - Utility-first CSS framework
- **Lucide React** 0.552.0 - Icon library
- **React Hot Toast** 2.6.0 - Toast notifications

## 📦 Dependencies

### Production Dependencies

```json
{
  "@tailwindcss/vite": "^4.1.16",
  "lucide-react": "^0.552.0",
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-hot-toast": "^2.6.0",
  "react-router-dom": "^7.9.5",
  "tailwindcss": "^4.1.16"
}
```

### Development Dependencies

```json
{
  "@eslint/js": "^9.36.0",
  "@types/react": "^19.1.16",
  "@types/react-dom": "^19.1.9",
  "@vitejs/plugin-react": "^5.0.4",
  "eslint": "^9.36.0",
  "eslint-plugin-react-hooks": "^5.2.0",
  "eslint-plugin-react-refresh": "^0.4.22",
  "globals": "^16.4.0",
  "vite": "^7.1.7"
}
```

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18.0 or higher recommended)
- **npm** (comes with Node.js) or **yarn** or **pnpm**

You can check if you have Node.js installed by running:
```bash
node --version
npm --version
```

## 🔧 Installation & Setup

Follow these steps to set up and run the project on your local machine:

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd acadshield
```

### 2. Install Dependencies

Install all required packages using npm:

```bash
npm install
```

Or if you prefer using yarn:

```bash
yarn install
```

Or with pnpm:

```bash
pnpm install
```

### 3. Start the Development Server

Run the development server:

```bash
npm run dev
```

Or with yarn:

```bash
yarn dev
```

Or with pnpm:

```bash
pnpm dev
```

The application will start and you should see output similar to:

```
  VITE v7.1.7  ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://0.0.0.0:5173/
```

### 4. Open in Browser

Open your web browser and navigate to:

```
http://localhost:5173
```

The app should now be running on your localhost!

## 📜 Available Scripts

- `npm run dev` - Start the development server with hot module replacement (HMR)
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code quality issues

## 📁 Project Structure

```
acadshield/
├── public/
│   └── icon.png          # Application favicon
├── src/
│   ├── assets/           # Images and static assets
│   ├── components/       # React components
│   │   ├── DocumentsSection.jsx
│   │   ├── DocumentUpload.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Navbar.jsx
│   │   └── VideoDemo.jsx
│   ├── context/          # React Context API
│   │   └── AppContext.jsx
│   ├── layout/           # Layout components
│   │   └── AppLayout.jsx
│   ├── pages/            # Page components
│   │   └── Home.jsx
│   ├── utils/            # Utility functions
│   ├── App.jsx           # Main App component
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Project dependencies and scripts
├── vite.config.js        # Vite configuration
├── vercel.json           # Vercel deployment configuration
└── README.md             # Project documentation
```

## 🌐 Deployment

The project includes a `vercel.json` configuration file, making it ready for deployment on Vercel.

To deploy:

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect the Vite configuration and deploy

Alternatively, build for production:

```bash
npm run build
```

The production build will be in the `dist` directory.

## 🔍 Browser Support

The application supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Notes

- The development server is configured to listen on `0.0.0.0`, making it accessible from other devices on your local network
- The application uses React 19 and requires a compatible Node.js version
- Tailwind CSS v4 is used with the Vite plugin for optimal performance

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and proprietary.

---

**Happy Coding! 🎉**
