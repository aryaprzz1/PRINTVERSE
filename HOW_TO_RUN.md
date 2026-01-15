# 🚀 How to Run Next.js Projects - Complete Guide

## 📋 Prerequisites

Before running a Next.js project, make sure you have:

1. **Node.js** (version 18.17 or later recommended)
   - Download from: https://nodejs.org/
   - Check version: `node --version`

2. **Package Manager** (choose one):
   - **npm** (comes with Node.js): `npm --version`
   - **pnpm** (faster, recommended): Install with `npm install -g pnpm`
   - **yarn**: Install with `npm install -g yarn`

## 🔧 Installation Steps

### Step 1: Install Dependencies

If this is your first time running the project, install all dependencies:

```bash
# Using pnpm (recommended for this project)
pnpm install

# OR using npm
npm install

# OR using yarn
yarn install
```

**What this does:** Downloads all packages listed in `package.json` into `node_modules/` folder.

---

## 🏃 Running the Development Server

### Development Mode (Hot Reload)

This is what you use while developing - it auto-refreshes when you make changes:

```bash
# Using pnpm
pnpm dev

# OR using npm
npm run dev

# OR using yarn
yarn dev
```

**What happens:**
- Starts a local development server
- Usually runs on `http://localhost:3000`
- Automatically reloads when you save file changes
- Shows helpful error messages in the browser

**To stop:** Press `Ctrl + C` in the terminal

---

## 📦 Other Useful Commands

### Build for Production

Creates an optimized production build:

```bash
pnpm build
# OR
npm run build
```

**What this does:**
- Compiles and optimizes your code
- Creates a `.next` folder with production-ready files
- Checks for errors and warnings

### Start Production Server

Runs the production build locally (after running `build`):

```bash
pnpm start
# OR
npm start
```

**Note:** This is different from `dev` - it runs the optimized production version.

### Lint Your Code

Checks code for errors and style issues:

```bash
pnpm lint
# OR
npm run lint
```

---

## 🌐 Accessing Your Application

Once the dev server is running:

1. **Open your browser**
2. **Navigate to:** `http://localhost:3000`
3. **You should see your website!**

### Common Ports:
- **3000** - Default Next.js port
- If 3000 is busy, Next.js will try 3001, 3002, etc.
- Check the terminal output to see which port is being used

---

## 🛠️ Troubleshooting

### Port Already in Use

**Error:** `Port 3000 is already in use`

**Solutions:**
1. Stop the other process using port 3000
2. Use a different port: `pnpm dev -- -p 3001`
3. Kill the process:
   ```bash
   # Windows
   netstat -ano | findstr :3000
   taskkill /PID <PID> /F
   
   # Mac/Linux
   lsof -ti:3000 | xargs kill
   ```

### Dependencies Not Installed

**Error:** `Cannot find module...`

**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules
pnpm install
```

### Cache Issues

**Solution:**
```bash
# Clear Next.js cache
rm -rf .next
pnpm dev
```

---

## 📁 Project Structure Overview

```
printverse-website-design/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page (/)
│   ├── about/             # About page (/about)
│   ├── services/          # Services page (/services)
│   ├── contact/           # Contact page (/contact)
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable React components
├── public/                # Static files (images, etc.)
├── package.json           # Dependencies and scripts
└── next.config.mjs        # Next.js configuration
```

---

## 🎯 Quick Reference

| Command | What It Does |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Run production server |
| `pnpm lint` | Check code quality |
| `pnpm install` | Install dependencies |

---

## 💡 Pro Tips

1. **Keep the terminal open** - The dev server needs to keep running
2. **Watch the terminal** - Errors and warnings appear there
3. **Hot Reload** - Just save your files, browser auto-refreshes
4. **Fast Refresh** - React components update without losing state
5. **Check browser console** - For runtime errors (F12)

---

## 🔍 Understanding the Terminal Output

When you run `pnpm dev`, you'll see:

```
▲ Next.js 16.0.10
- Local:        http://localhost:3000
- Ready in 2.3s
```

- ✅ **Ready** = Server is running successfully
- ⚠️ **Warnings** = Non-critical issues (usually safe to ignore)
- ❌ **Errors** = Must fix before the app will work

---

## 🎓 Next Steps

1. **Make changes** - Edit files in `app/` or `components/`
2. **See changes** - Browser auto-refreshes
3. **Check errors** - Terminal shows compilation errors
4. **Build for production** - When ready, run `pnpm build`

---

## 📚 Additional Resources

- **Next.js Docs:** https://nextjs.org/docs
- **React Docs:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com/docs

---

**Happy Coding! 🎉**

