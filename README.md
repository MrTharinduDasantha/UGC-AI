# UGC-AI: AI-Powered Video Ad Generator

[![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Framework-Express.js-black?logo=express)](https://expressjs.com/)
[![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-336791?logo=postgresql)](https://www.postgresql.org/)
[![Prisma](https://img.shields.io/badge/ORM-Prisma-2D3748?logo=prisma)](https://www.prisma.io/)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind_CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Clerk](https://img.shields.io/badge/Auth-Clerk-6C47FF)](https://clerk.com/)
[![Gemini](https://img.shields.io/badge/AI-Google_Gemini-4285F4?logo=google)](https://ai.google.dev/)
[![Sentry](https://img.shields.io/badge/Monitoring-Sentry-362D59?logo=sentry)](https://sentry.io/)

UGC-AI is an advanced, full-stack application that leverages artificial intelligence to generate professional User-Generated Content (UGC) video advertisements. By seamlessly combining product images with model presenters, users can generate high-quality images and video ads based on custom prompts. The platform features a robust credit system, subscription tiers, and a community showcase for generated content.

---

## 🚀 Demo

Click the link below to see the demonstration of the UGC-AI platform.

Link 👉 https://drive.google.com/file/d/1ZJylngeitNsp_80WxukVMh5zt2aC2CA1/view?usp=sharing 👈

---

## ✨ Features

| Category | Features |
|---|---|
| Authentication | Sign up / sign in with Clerk |
| Free Tier | 20 free credits for every new user |
| Image Generation | Generate ad images using product image, model image, project name, product name, product description, aspect ratio, and prompt |
| Video Generation | Convert generated images into AI ad videos |
| Credit System | 5 credits for image generation, 10 credits for video generation |
| Billing | Upgrade to Pro or Ultra plans through Clerk Billing |
| My Generations | View, download, share, delete, publish, and unpublish generated ads |
| Ad Details | Play videos and download image/video files from the details page |
| Community Page | View all published ads with full details |
| Notifications | Success and error toasts with React Hot Toast |
| Monitoring | Performance and error tracking with Sentry |

---

## 🛠️ Technologies Used

### Frontend (Client)
* **TypeScript:** For static typing and robust code.
* **React.js (Vite):** Frontend library for building the user interface.
* **Tailwind CSS:** Utility-first CSS framework for rapid styling.
* **React Router DOM:** For seamless page navigation.
* **Axios:** For handling API requests to the backend.
* **React Hot Toast:** For elegant success and error notifications.

### Backend (Server) & Database
* **Node.js & Express.js:** Scalable backend runtime and framework.
* **PostgreSQL (Neon):** Serverless, highly scalable relational database.
* **Prisma ORM:** Modern database toolkit to query, migrate, and model data.
* **Cloudinary:** Cloud storage for fast and secure image/media hosting.
* **Sentry:** For advanced performance monitoring and error tracking.

### AI & Third-Party Services
* **Google Gemini API:** Powering the AI generation features.
    * *Image Model:* `gemini-3-pro-image-preview`
    * *Video Model:* `veo-3.1-generate-preview`
* **Clerk:** For seamless user authentication and authorization.
* **Clerk Billing:** For managing subscription plans (Pro/Ultra) and credit purcha

---

## ⚙️ Installation & Setup

Clone the repository and navigate to project folder to install dependencies.
```bash
  git clone https://github.com/MrTharinduDasantha/UGC-AI.git
  cd UGC-AI
```

**1. Server Setup (Backend)**
Navigate to the server directory and install dependencies:
```bash
cd server
npm install
```
**Database Setup (Neon & Prisma):**
Sync your Prisma schema with your Neon PostgreSQL database:
```bash
npx prisma migrate dev --name init
npx prisma generate
```
**Environment Variables**
Before running the app, configure the .env files in the server folder with the necessary environment variables.
- Create a .env file in the server folder. You will need to obtain API keys from Neon, Clerk, Cloudinary, and Google Cloud (which offers $300 free credits for 3 months).
- **Note:** For the Clerk webhook to function properly in a live environment, you will need to deploy this server (e.g., to Vercel) and add your live domain endpoint to the Clerk dashboard.
```bash
PORT=5000

# PostgreSQL Database URL (from Neon)
DATABASE_URL="Enter your PostgreSQL database url"

# Clerk setup
CLERK_PUBLISHABLE_KEY="Enter your clerk publishable key"
CLERK_SECRET_KEY="Enter your clerk secret key"
CLERK_WEBHOOK_SIGNING_SECRET="Enter your clerk webhook signing secret key"

# Cloudinary setup
CLOUDINARY_URL="Enter your cloudinary url"

# Google Cloud setup
GOOGLE_CLOUD_API_KEY="Enter your google cloud api key"
```

**2. Client Setup (Frontend)**
Open a new terminal window, navigate to the client directory, and install dependencies:
```bash
cd client
npm install
```
**Environment Variables**
Create a .env file in the client folder:
```bash
# Backend url
VITE_BASEURL=http://localhost:5000

# Clerk Api Key
VITE_CLERK_PUBLISHABLE_KEY="Enter your clerk publishable key"
```

**3. Run the Application**
Start the backend server:
```bash
cd server
npm run server
```
Start the frontend development server:
```bash
cd client
npm run dev
```

---

## 💻 Usage
**1.Authentication:** Create an account to receive your 20 free credits.
**2.Generate:** Navigate to the create page. Upload a product image, a model image, fill in the text fields (Project Name, Product Name, Product Description (optional), Aspect Ratio and User Prompt (optional)), and generate your custom AI image and subsequent video ad.
**3.Manage:** Go to "My Generations" to review, download, or delete your assets. Toggle "Publish" to share your ad with the world.
**4.Explore:** Visit the "Community Page" to see ads generated by other users.

---

## 📸 Screenshots

![image alt](https://github.com/MrTharinduDasantha/UGC-AI/blob/7cb7053d78c9597bfd3e74e6e355acd1525d1e06/client/src/assets/website-images/Img%20-%201.png)
![image alt](https://github.com/MrTharinduDasantha/UGC-AI/blob/7cb7053d78c9597bfd3e74e6e355acd1525d1e06/client/src/assets/website-images/Img%20-%202.png)
![image alt](https://github.com/MrTharinduDasantha/UGC-AI/blob/7cb7053d78c9597bfd3e74e6e355acd1525d1e06/client/src/assets/website-images/Img%20-%203.png)
![image alt](https://github.com/MrTharinduDasantha/UGC-AI/blob/7cb7053d78c9597bfd3e74e6e355acd1525d1e06/client/src/assets/website-images/Img%20-%204.png)
![image alt](https://github.com/MrTharinduDasantha/UGC-AI/blob/7cb7053d78c9597bfd3e74e6e355acd1525d1e06/client/src/assets/website-images/Img%20-%205.png)
![image alt](https://github.com/MrTharinduDasantha/UGC-AI/blob/7cb7053d78c9597bfd3e74e6e355acd1525d1e06/client/src/assets/website-images/Img%20-%206.png)
![image alt](https://github.com/MrTharinduDasantha/UGC-AI/blob/7cb7053d78c9597bfd3e74e6e355acd1525d1e06/client/src/assets/website-images/Img%20-%207.png)
![image alt](https://github.com/MrTharinduDasantha/UGC-AI/blob/7cb7053d78c9597bfd3e74e6e355acd1525d1e06/client/src/assets/website-images/Img%20-%208.png)
![image alt](https://github.com/MrTharinduDasantha/UGC-AI/blob/7cb7053d78c9597bfd3e74e6e355acd1525d1e06/client/src/assets/website-images/Img%20-%209.png)
![image alt](https://github.com/MrTharinduDasantha/UGC-AI/blob/7cb7053d78c9597bfd3e74e6e355acd1525d1e06/client/src/assets/website-images/Img%20-%2010.png)
![image alt](https://github.com/MrTharinduDasantha/UGC-AI/blob/7cb7053d78c9597bfd3e74e6e355acd1525d1e06/client/src/assets/website-images/Img%20-%2010.png)
![image alt](https://github.com/MrTharinduDasantha/UGC-AI/blob/7cb7053d78c9597bfd3e74e6e355acd1525d1e06/client/src/assets/website-images/Img%20-%2011.png)
![image alt](https://github.com/MrTharinduDasantha/UGC-AI/blob/7cb7053d78c9597bfd3e74e6e355acd1525d1e06/client/src/assets/website-images/Img%20-%2012.png)
![image alt](https://github.com/MrTharinduDasantha/UGC-AI/blob/7cb7053d78c9597bfd3e74e6e355acd1525d1e06/client/src/assets/website-images/Img%20-%2013.png)
![image alt](https://github.com/MrTharinduDasantha/UGC-AI/blob/7cb7053d78c9597bfd3e74e6e355acd1525d1e06/client/src/assets/website-images/Img%20-%2014.png)
![image alt](https://github.com/MrTharinduDasantha/UGC-AI/blob/7cb7053d78c9597bfd3e74e6e355acd1525d1e06/client/src/assets/website-images/Img%20-%2015.png)
![image alt](https://github.com/MrTharinduDasantha/UGC-AI/blob/7cb7053d78c9597bfd3e74e6e355acd1525d1e06/client/src/assets/website-images/Img%20-%2016.png)
![image alt](https://github.com/MrTharinduDasantha/UGC-AI/blob/7cb7053d78c9597bfd3e74e6e355acd1525d1e06/client/src/assets/website-images/Img%20-%2017.png)
![image alt](https://github.com/MrTharinduDasantha/UGC-AI/blob/7cb7053d78c9597bfd3e74e6e355acd1525d1e06/client/src/assets/website-images/Img%20-%2018.png)
![image alt](https://github.com/MrTharinduDasantha/UGC-AI/blob/7cb7053d78c9597bfd3e74e6e355acd1525d1e06/client/src/assets/website-images/Img%20-%2019.png)
![image alt](https://github.com/MrTharinduDasantha/UGC-AI/blob/7cb7053d78c9597bfd3e74e6e355acd1525d1e06/client/src/assets/website-images/Img%20-%2020.png)
![image alt](https://github.com/MrTharinduDasantha/UGC-AI/blob/7cb7053d78c9597bfd3e74e6e355acd1525d1e06/client/src/assets/website-images/Img%20-%2021.png)

<h4 align="center"> Don't forget to leave a star ⭐️ </h4>
