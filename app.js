import { createBook, readBooks, updateBook, deleteBook } from './books.js';

console.log('=== ADRIAN | KATALOG BUKU ===');
console.log('Input berasal dari data di app.js. Data hanya tersimpan selama program berjalan.');

console.log('\n1. CREATE: menambah buku');
const firstBook = createBook('Laskar Pelangi', 'Andrea Hirata');
const secondBook = createBook('Bumi', 'Tere Liye');

console.log('\n2. READ: menampilkan katalog buku');
readBooks();

console.log('\n3. UPDATE: mengubah judul dan penulis buku kedua');
updateBook(secondBook.id, 'Negeri 5 Menara', 'Ahmad Fuadi');
readBooks();

console.log('\n4. DELETE: menghapus buku pertama');
deleteBook(firstBook.id);
readBooks();

console.log('\n5. VALIDASI: mencoba input yang salah');
createBook('', 'Penulis Contoh');
updateBook(secondBook.id, 'Judul Contoh', '');
deleteBook(99);

console.log('\nKatalog akhir setelah validasi:');
readBooks();
