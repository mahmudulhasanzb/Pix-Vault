# 📸 Pix-Vault

**Pix-Vault** is a premium **AI Prompt Hub** designed for creators and AI enthusiasts. Built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**, it serves as a high-performance library where users can discover stunning AI-generated imagery and the exact prompts used to create them.

![Pix-Vault Hero](https://i.ibb.co.com/XZR3p95t/screencapture-pix-vault-ai-vercel-app-2026-05-07-17-23-29.png)

---

## ✨ Features

- **💡 Prompt Inspiration**: Browse a curated collection of AI-generated images to find ideas for your next creation.
- **📋 Copy & Paste Ready**: Easily view and copy high-performing prompts to use in your favorite AI generators like Midjourney, DALL-E, or Stable Diffusion.
- **🚀 Next-Gen Performance**: Leveraging React 19 and Next.js 16 for an ultra-smooth browsing experience.
- **🔐 User Vaults**: Secure authentication via **Better-Auth** allowing users to save and manage their favorite prompts.
- **🎨 Modern UI/UX**: A premium interface built with **HeroUI** and **Tailwind CSS 4** for maximum aesthetic appeal.
- **🔍 Deep Insights**: Explore the details behind each generation, including the creative prompts that powered the magic.

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/), [HeroUI](https://heroui.com/) |
| **Auth** | [Better-Auth](https://better-auth.com/) |
| **Database** | [MongoDB](https://www.mongodb.com/) |
| **Icons** | React Icons, Gravity UI Icons |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- MongoDB instance (local or Atlas)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mahmudulhasanzb/Pix-Vault.git
   cd Pix-Vault
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following:
   ```env
   MONGODB_URI=your_mongodb_uri
   BETTER_AUTH_SECRET=your_auth_secret
   BETTER_AUTH_URL=http://localhost:3000
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open the application:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📂 Project Structure

```text
pix-vault/
├── src/
│   ├── app/            # Next.js App Router (Routes & Layouts)
│   ├── components/     # Reusable UI Components
│   ├── lib/            # Shared utilities (Auth, DB Config)
│   └── proxy.js        # Server proxy configurations
├── public/             # Static assets
└── ...configs          # Tailwind, ESLint, Next.js configs
```

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git checkout origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/mahmudulhasanzb">mahmudulhasanzb</a>
</p>
