# 🌟 News Deck

**News Deck** adalah platform agregator berita yang dirancang untuk mempermudah Anda mengakses berita dari berbagai media dalam satu tempat. Dengan tampilan yang ramah pengguna, Anda dapat menikmati pengalaman membaca berita tanpa perlu berpindah-pindah portal.

---

## 🎯 Fitur Utama

1. **📰 Kumpulan Media Berita**  
   Menyajikan berbagai sumber berita dari media terpercaya.
2. **📂 Kategori Berita**  
   Menampilkan berita berdasarkan kategori untuk memudahkan pencarian.
3. **🔖 Bookmark Berita**  
   Simpan berita favorit Anda untuk dibaca nanti.

---

## 🚀 Langkah Instalasi

Ikuti langkah-langkah di bawah ini untuk menginstal dan menjalankan News Deck di komputer Anda.

### 1️⃣ Clone Repository
Pertama, kloning repository dari GitHub ke komputer lokal Anda:

```bash
git clone <repository-url>
cd <repository-folder>
```

### 2️⃣ Atur Database
Buat database baru di alat manajemen database pilihan Anda (misalnya MySQL, PostgreSQL).
Buka file .env di root proyek dan perbarui baris berikut dengan detail database Anda:

```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nama_database_anda
DB_USERNAME=username_database_anda
DB_PASSWORD=password_database_anda
```
### 3️⃣ Jalankan Migrasi

Untuk membuat tabel yang diperlukan, jalankan perintah berikut:

```bash
php artisan migrate:fresh
```
### 4️⃣ Jalankan Aplikasi

Backend (Laravel):

Jalankan server pengembangan Laravel:
```bash
php artisan serve
```
Frontend:
Jalankan server pengembangan frontend:
```bash
npm run dev
```
### 5️⃣ Akses Aplikasi
Buka browser Anda dan akses:

http://localhost:8000

### 📢 Catatan Penting
Pastikan PHP, Composer, Node.js, dan npm telah terinstal di sistem Anda.
Jika Anda mengalami masalah, periksa log error atau hubungi pengelola proyek.

### 🌐 Demo Proyek
Coba News Deck secara langsung di sini:
🔗 https://news-deck.wuaze.com/

