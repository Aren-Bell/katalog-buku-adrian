import readline from 'node:readline';
import { createBook, readBooks, updateBook, deleteBook } from './books.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Async iterator juga menangani EOF tanpa menggantung saat menunggu input.
const lines = rl[Symbol.asyncIterator]();
const ask = async (prompt) => {
  process.stdout.write(prompt);
  const { value, done } = await lines.next();
  if (done) return null;
  return value.trim();
};

const askText = async (prompt) => {
  while (true) {
    const value = await ask(prompt);
    if (value === null || value !== '') return value;
    console.log('Input tidak boleh kosong atau hanya berisi spasi.');
  }
};

const askId = async () => {
  while (true) {
    const value = await ask('ID buku: ');
    if (value === null) return null;
    const id = Number(value);
    if (/^[0-9]+$/.test(value) && Number.isSafeInteger(id) && id > 0) {
      return id;
    }
    console.log('ID harus berupa bilangan bulat positif yang valid.');
  }
};

const main = async () => {
  console.log('Katalog Buku Interaktif');
  console.log('Data hanya tersimpan selama program berjalan. Ctrl+C untuk keluar.');
  try {
    while (true) {
      console.log('\n1. Tambah buku\n2. Lihat katalog\n3. Ubah buku\n4. Hapus buku\n0. Keluar');
      const choice = await ask('Pilih menu: ');
      if (choice === null || choice === '0') break;

      switch (choice) {
        case '1': {
          const title = await askText('Judul: ');
          if (title === null) return;
          const author = await askText('Penulis: ');
          if (author === null) return;
          createBook(title, author);
          break;
        }
        case '2':
          readBooks();
          break;
        case '3':
        case '4': {
          const books = readBooks();
          if (books.length === 0) break;
          const id = await askId();
          if (id === null) return;
          if (!books.some((book) => book.id === id)) {
            console.log(`Gagal: buku dengan ID ${id} tidak ditemukan.`);
            break;
          }
          if (choice === '4') {
            deleteBook(id);
            break;
          }
          const title = await askText('Judul baru: ');
          if (title === null) return;
          const author = await askText('Penulis baru: ');
          if (author === null) return;
          updateBook(id, title, author);
          break;
        }
        default:
          console.log('Pilihan tidak valid. Masukkan 0, 1, 2, 3, atau 4.');
      }
    }
  } finally {
    rl.close();
    console.log('\nProgram selesai.');
  }
};

main().catch((error) => {
  console.error('Terjadi kesalahan:', error.message);
  process.exitCode = 1;
});
