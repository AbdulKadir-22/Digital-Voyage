# Faiz Ansari | Digital Portfolio

<div align="center">
  <img src="/public/favicon.png" width="80" height="80" alt="Logo" />
  <h3>The Digital Voyage</h3>
  <p>A high-performance, cinematic, and data-driven digital portfolio built for the modern web.</p>
</div>

---

## 🌌 Overview

This project is a premium digital portfolio designed with a "Space-Themed Cinematic" aesthetic. It combines high-end visual design (Glassmorphism, Parallax Ambience, Gold Accents) with a robust, feature-based software architecture. The portfolio serves as a central hub for showcasing professional projects, technical skills, and personal journey stories.

## 🚀 Key Features

- **Cinematic Hero Experience**: An immersive landing page featuring perspective-driven layouts, animated status indicators, and high-impact typography.
- **Mechanical Circular Navigation**: A custom-engineered circular menu with holographic scanner indicators and mechanical gear animations.
- **Data-Driven Stories (The Journey)**: A dedicated section for long-form storytelling with detailed ride stats, gear highlights, and cinematic photo galleries.
- **Modular Project Showcases**: Detailed project pages with tech-stack breakdowns, challenge/approach analysis, and interactive media galleries.
- **Glassmorphic UI System**: A consistent design language using translucent layers, blurred backdrops, and golden amber accents (`#dfb48e`).
- **Fully Responsive**: Optimized for every screen size, from high-resolution monitors to mobile devices, featuring a specialized mobile wheel navigation.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📂 Project Structure

The project follows a **Feature-First Architecture** for maximum scalability and maintainability:

```text
src/
├── components/          # Global UI & Layout components
│   ├── layout/          # Shared layout elements (Nav, Sidebar, Footer)
│   └── ui/              # Reusable atomic UI components
├── data/                # JSON Data Store (Source of Truth)
│   ├── projects.json    # Project metadata & content
│   ├── journey.json     # Travel stories & stats
│   └── skills.json      # Technical expertise data
├── features/            # Feature-based modules
│   ├── home/            # Hero & landing sections
│   ├── projects/        # Project gallery & detailed views
│   ├── journey/         # Story gallery & detailed views
│   └── skills/          # Interactive skill displays
└── router.jsx           # Centralized Route Configuration
```

## ⚙️ Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run in development mode**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 🚢 Deployment

The project is optimized for deployment on **Vercel**. A `vercel.json` file is included to handle client-side routing seamlessly.

To deploy:
1. Connect your repository to Vercel.
2. Vercel will automatically detect Vite and run the build command.
3. The `dist` folder will be served as the production output.

## 📄 License

This project is personal property. All rights reserved.

---

<div align="center">
  <p>Built with ❤️ and a lot of tea.</p>
</div>
