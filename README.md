# Katalog Buku Adrian

## Gambaran umum

Aplikasi Node.js sederhana untuk mengelola katalog buku: menambah buku, menampilkan katalog, mengubah judul dan penulis, serta menghapus buku berdasarkan ID.

Input diberikan melalui argumen pemanggilan fungsi di `app.js`. Hasil setiap operasi ditampilkan di terminal. Program menjalankan contoh CRUD secara berurutan, tanpa menu interaktif.

## Cara menjalankan

Pasang Node.js, buka terminal di folder `adrian`, lalu jalankan:

```sh
node app.js
```

Alternatif: `npm start`. Tidak perlu memasang dependensi.

Untuk mengganti input, ubah judul, penulis, atau ID pada pemanggilan fungsi di `app.js`, lalu jalankan ulang program.

## Format data

Penyimpanan menggunakan array of objects:

```js
[
  { id: 1, title: 'Laskar Pelangi', author: 'Andrea Hirata' },
  { id: 2, title: 'Bumi', author: 'Tere Liye' }
]
```

- `id`: number berupa ID otomatis, bertambah setelah penambahan berhasil, tidak digunakan ulang dalam satu sesi.
- `title`: string judul buku yang tidak boleh kosong.
- `author`: string nama penulis yang tidak boleh kosong.

Spasi di awal dan akhir judul serta penulis dihapus. Data hanya tersimpan selama program berjalan; setiap eksekusi dimulai dengan array kosong.

## Function CRUD

| Fungsi | Proses |
| --- | --- |
| `createBook(title, author)` | Memvalidasi judul dan penulis, membuat object buku, lalu menambahkannya ke array menggunakan spread operator. |
| `readBooks()` | Menampilkan seluruh buku dengan perulangan dan mengembalikan salinan data menggunakan `.map()`. |
| `updateBook(id, title, author)` | Memeriksa ID menggunakan `.some()`, memvalidasi input, lalu memperbarui buku menggunakan `.map()` dan spread operator. |
| `deleteBook(id)` | Mengambil buku dengan `.filter()` dan array destructuring, lalu menghapusnya menggunakan `.filter()`. |

Create, update, dan delete mengembalikan salinan object buku yang diproses. Jika input salah, fungsi menampilkan pesan, mengembalikan `null`, dan tidak mengubah data. ID dibandingkan menggunakan `===`, sehingga angka `1` berbeda dari string `'1'`.

## Contoh alur program

1. Tambahkan Laskar Pelangi karya Andrea Hirata dan Bumi karya Tere Liye.
2. Tampilkan kedua buku.
3. Ubah buku kedua menjadi Negeri 5 Menara karya Ahmad Fuadi.
4. Hapus buku pertama; buku kedua tetap tersedia.
5. Coba menambah judul kosong, memperbarui dengan penulis kosong, dan menghapus ID 99. Semua ditolak tanpa mengubah katalog.

## Struktur file

```text
adrian/
  app.js        # Input contoh dan urutan pemanggilan CRUD
  books.js      # Array of objects, CRUD, validasi, dan output
  package.json  # Konfigurasi ES modules dan npm start
  README.md     # Dokumentasi
```

## Kesesuaian brief dan materi

- Pertemuan 1: Node.js, input berupa nilai dalam program, `console.log`, `const`/`let`, operator, dan template literals.
- Pertemuan 2: percabangan `if`, ternary operator, perulangan `for...of`, array, object, dan array of objects.
- Pertemuan 3: arrow function, `.map()`, `.filter()`, `.some()`, spread operator, serta destructuring array dan object.
- Pertemuan 4: CRUD dan modularisasi `import`/`export`, dengan `"type": "module"` di `package.json`.

Seluruh kriteria wajib dan bonus diterapkan. Validasi memakai perbandingan ketat serta operator logika. Penyimpanan berupa database sementara di memori.

## Pengumpulan

Unggah keempat file proyek ke repository GitHub berstatus Public, lalu kumpulkan tautannya ke Dignition sesuai brief. Upload dan pengumpulan belum dilakukan.
