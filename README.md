# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

##  Issues & Resolutions

### 1. Backend not running
**Error:** `ERR_CONNECTION_REFUSED` on `http://localhost:8000/jobs`  
**Cause:** json-server wasn't running when React app loaded  
**Fix:** Run both servers simultaneously in two terminals  
```bash
# Terminal 1 - Backend
npx json-server --watch src/jobs.json --port 8000

# Terminal 2 - Frontend
npm run dev
```

---

### 2. Typo in JobListing.jsx
**Error:** `Cannot read properties of undefined (reading 'substring')`  
**Cause:** `job.description8` instead of `job.description`  
**Fix:**
```js
let description = job.description  // ✅ fixed typo
```

---

### 3. json-server v1 pagination syntax changed
**Error:** `?_limit=3` and `?_start=0&_end=3` returning `[]`  
**Cause:** json-server v1.0.0-beta.15 removed old pagination params  
**Fix:**
---

### 4. Paginated response wrapped in `data` key
**Error:** `jobs.map is not a function`  
**Cause:** json-server v1 wraps paginated responses in a `data` object  
**Fix:**
```js
setJobs(isHome ? data.data : data);  // ✅
```
