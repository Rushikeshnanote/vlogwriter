# VlogWriter (InkSpace) ✦

A modern, responsive mini blog and vlog writing web application built with Node.js and Express.

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/Rushikeshnanote/vlogwriter)

---

## 🚀 Features

- **Read Stories & Blogs**: View posts shared by the community in real time.
- **Publish Stories**: Clean interface to publish your stories, thoughts, and vlog posts.
- **Delete Stories**: Manage your published content directly.
- **Modern Responsive UI**: Styled with clean aesthetics, glassmorphism, and responsive layout.
- **Ready for Cloud Deployment**: Pre-configured with `render.yaml` for instant Render hosting.

---

## 🛠️ Tech Stack

- **Backend**: Node.js & Express.js
- **Frontend**: HTML5, Vanilla JavaScript, CSS3, Bootstrap 5
- **Storage**: JSON file-based store (`posts.json`)
- **Hosting**: Render (Web Service)

---

## 📦 Local Setup & Running

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Rushikeshnanote/vlogwriter.git
   cd vlogwriter
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the application:**
   ```bash
   npm start
   ```

4. **Open in browser:**
   ```
   http://localhost:3000
   ```

---

## 🌐 Deploy to Render

### Option 1: 1-Click Deploy (Blueprint)
Click the button below to automatically create and deploy this app on Render:

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/Rushikeshnanote/vlogwriter)

### Option 2: Manual Web Service Setup
1. Sign in to [Render](https://dashboard.render.com/).
2. Click **New +** and select **Web Service**.
3. Connect your GitHub repository: `Rushikeshnanote/vlogwriter`.
4. Fill in the deployment details:
   - **Name**: `vlogwriter`
   - **Environment**: `Node`
   - **Region**: Choose the closest region (e.g., Singapore, Frankfurt, Oregon)
   - **Branch**: `main`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: `Free`
5. Click **Create Web Service**.
6. Render will automatically build and deploy your application. You will get a live URL like `https://vlogwriter.onrender.com`.
