# GitHub Pages Deployment Setup

## Konfigurasi yang Sudah Dilakukan

### 1. Vite Configuration
File `vite.config.ts` telah dikonfigurasi dengan:
- `base: '/'` - Aplikasi akan berjalan di root directory
- `host: "0.0.0.0"` - Mendukung Replit environment
- `port: 5000` - Port standard untuk Replit

### 2. GitHub Actions Workflow
File `.github/workflows/deploy.yml` telah dibuat untuk otomatis build dan deploy ke GitHub Pages saat push ke branch `main` atau `master`.

### 3. Package Scripts
Script `start` telah ditambahkan ke `package.json` untuk preview production build.

## Cara Mengaktifkan GitHub Pages

Untuk mengaktifkan GitHub Pages di repository Anda:

1. **Push Code ke GitHub**
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

2. **Aktifkan GitHub Pages**
   - Buka repository Anda di GitHub
   - Pergi ke **Settings** > **Pages**
   - Di bagian **Source**, pilih **GitHub Actions**
   - Workflow akan otomatis berjalan setiap kali ada push

3. **Akses Website Anda**
   - Setelah workflow selesai, website akan tersedia di:
   - `https://username.github.io/repository-name/` (untuk project pages)
   - `https://username.github.io/` (untuk user/organization pages)

## Catatan Penting

### Jika Menggunakan Custom Domain atau Subdirectory
Jika repository Anda bukan root pages (contoh: `username.github.io/my-project/`), ubah `base` di `vite.config.ts`:

```typescript
base: '/my-project/',  // ganti dengan nama repository Anda
```

### Local Testing
Untuk test build production secara lokal:
```bash
npm run build
npm run preview
```

### Environment Variables
Untuk environment variables di GitHub Pages, tambahkan di repository **Settings** > **Secrets and variables** > **Actions**.

## Troubleshooting

1. **Halaman 404**: Pastikan GitHub Pages sudah diaktifkan dan workflow berhasil
2. **Assets tidak load**: Check nilai `base` di `vite.config.ts`
3. **Workflow gagal**: Check logs di tab **Actions** di GitHub

## Scripts Available

- `npm run dev` - Development server (Replit)
- `npm run build` - Build untuk production
- `npm run preview` - Preview production build
- `npm run start` - Start production preview di port 5000
