# Fitur Keranjang Belanja - Dokumentasi

## ✅ Fitur yang Sudah Diimplementasikan

### 1. **Sistem Keranjang Belanja (Shopping Cart)**
- Context API untuk manajemen state keranjang global
- Keranjang dapat menyimpan produk dengan size dan color yang berbeda
- Setiap kombinasi produk + size + color dihitung sebagai item terpisah

### 2. **Fungsi Add to Cart**
- Tombol "Add to Cart" di halaman detail produk
- Validasi pemilihan size dan color sebelum menambahkan ke keranjang
- Notifikasi toast ketika produk berhasil ditambahkan
- Notifikasi error jika size atau color belum dipilih

### 3. **Cart Drawer (Sidebar Keranjang)**
- Icon keranjang di navbar dengan badge counter
- Sidebar slide-in untuk melihat isi keranjang
- Tampilan lengkap setiap item:
  - Foto produk
  - Nama produk
  - Size dan color yang dipilih
  - Harga per item
  - Quantity dengan tombol +/-
  - Tombol hapus item

### 4. **Manajemen Keranjang**
- **Tambah quantity**: Tombol + untuk menambah jumlah
- **Kurangi quantity**: Tombol - untuk mengurangi jumlah
- **Hapus item**: Tombol hapus untuk menghapus item dari keranjang
- **Total harga**: Menampilkan total harga semua item
- **Counter badge**: Menampilkan jumlah total item di navbar

### 5. **Detail Produk Lengkap**
Setiap produk memiliki:
- Foto produk berkualitas tinggi (stock images)
- Nama produk
- Harga
- Kategori (badge)
- **Deskripsi lengkap** - Informasi detail tentang produk
- Pilihan size (6-12 untuk dewasa, 10-4 untuk anak-anak)
- Pilihan warna (2-3 pilihan warna per produk)

### 6. **Foto Produk**
Semua produk menggunakan foto stock profesional:
- Women's Athletic Running Shoes - Pink running shoes
- Women's Classic Heels - Elegant high heels
- Kids Colorful Sneakers - Colorful children's sneakers
- Men's Leather Boots - Brown leather boots
- Women's Canvas Sneakers - White canvas sneakers

## Cara Menggunakan Fitur Keranjang

### Menambahkan Produk ke Keranjang
1. Klik produk di halaman utama atau kategori
2. Pilih **size** yang diinginkan
3. Pilih **color** yang diinginkan
4. Klik tombol **"Add to Cart"**
5. Notifikasi akan muncul konfirmasi produk ditambahkan

### Melihat Keranjang
1. Klik icon **shopping cart** di navbar (pojok kanan atas)
2. Sidebar akan slide dari kanan menampilkan isi keranjang
3. Lihat semua produk yang sudah ditambahkan

### Mengelola Item di Keranjang
- **Tambah jumlah**: Klik tombol **+**
- **Kurangi jumlah**: Klik tombol **-**
- **Hapus item**: Klik icon **tempat sampah (trash)**
- **Checkout**: Klik tombol **"Proceed to Checkout"**

## File yang Diubah/Ditambahkan

### File Baru
1. `src/contexts/CartContext.tsx` - Context untuk state management keranjang
2. `src/components/CartDrawer.tsx` - Komponen sidebar keranjang
3. `CART_FEATURES.md` - Dokumentasi ini

### File yang Dimodifikasi
1. `src/App.tsx` - Tambahkan CartProvider wrapper
2. `src/components/layout/Navbar.tsx` - Tambahkan CartDrawer component
3. `src/pages/ProductDetail.tsx` - Implementasi add to cart functionality
4. `src/data/products.ts` - Update dengan foto dan deskripsi lengkap
5. `vite.config.ts` - Tambahkan alias @assets untuk import images

### Foto Produk
- `attached_assets/stock_images/women's_athletic_run_c8c8624c.jpg`
- `attached_assets/stock_images/women's_elegant_high_a5e3fb31.jpg`
- `attached_assets/stock_images/kids_colorful_sneake_9d2962b4.jpg`
- `attached_assets/stock_images/men's_leather_boots_5e633b73.jpg`
- `attached_assets/stock_images/women's_canvas_sneak_9042922f.jpg`

## Teknologi yang Digunakan

- **React Context API** - State management untuk keranjang
- **React Hooks** - useState, useContext untuk functional components
- **Shadcn UI Components**:
  - Sheet - Untuk drawer/sidebar
  - Button - Tombol interaktif
  - Badge - Counter badge di cart icon
  - Toast - Notifikasi
  - Separator - Pemisah visual
- **Lucide React Icons** - Icons untuk UI
- **TypeScript** - Type safety
- **TailwindCSS** - Styling

## Testing IDs (untuk Automated Testing)

Semua komponen memiliki `data-testid` untuk memudahkan testing:
- `button-cart` - Tombol cart di navbar
- `badge-cart-count` - Badge counter
- `button-add-to-cart` - Tombol add to cart
- `cart-item-{id}` - Item dalam keranjang
- `button-increase-{id}` - Tombol tambah quantity
- `button-decrease-{id}` - Tombol kurangi quantity
- `button-remove-{id}` - Tombol hapus item
- `text-cart-total` - Total harga
- `button-checkout` - Tombol checkout

## Next Steps / Pengembangan Selanjutnya

Fitur yang bisa ditambahkan:
1. ✅ Cart persistence (localStorage) - Simpan keranjang saat reload
2. ✅ Checkout page - Halaman checkout lengkap
3. ✅ Order history - Riwayat pesanan
4. ✅ User authentication - Login/register
5. ✅ Payment integration - Integrasi pembayaran
6. ✅ Shipping calculator - Kalkulasi ongkir
7. ✅ Wishlist - Daftar favorit

## Catatan Penting

- Keranjang menggunakan **in-memory storage**, jadi akan hilang saat page reload
- Untuk production, sebaiknya simpan ke localStorage atau database
- Semua foto produk menggunakan stock images berkualitas tinggi
- Deskripsi produk sudah lengkap dan informatif
