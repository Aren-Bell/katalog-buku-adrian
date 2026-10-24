// shortcut: data hanya tersimpan selama program berjalan, gunakan penyimpanan permanen jika dibutuhkan lintas sesi.
let books = [];
let nextId = 1;

const isValidBook = (title, author) =>
  typeof title === 'string' && title.trim() !== '' &&
  typeof author === 'string' && author.trim() !== '';

export const createBook = (title, author) => {
  if (!isValidBook(title, author)) {
    console.log('Gagal: judul dan penulis harus berupa teks yang tidak kosong.');
    return null;
  }
  const book = { id: nextId, title: title.trim(), author: author.trim() };
  books = [...books, book];
  nextId++;
  console.log(`Buku #${book.id} berhasil ditambahkan.`);
  return { ...book };
};

export const readBooks = () => {
  if (books.length === 0) {
    console.log('Katalog buku masih kosong.');
  }
  for (const { id, title, author } of books) {
    console.log(`#${id} | ${title} | Penulis: ${author}`);
  }
  return books.map((book) => ({ ...book }));
};

export const updateBook = (id, title, author) => {
  if (!books.some((book) => book.id === id)) {
    console.log(`Gagal: buku dengan ID ${id} tidak ditemukan.`);
    return null;
  }
  if (!isValidBook(title, author)) {
    console.log('Gagal: judul dan penulis harus berupa teks yang tidak kosong.');
    return null;
  }
  books = books.map((book) => book.id === id
    ? { ...book, title: title.trim(), author: author.trim() }
    : book);
  console.log(`Buku #${id} berhasil diubah.`);
  return { ...books.filter((book) => book.id === id)[0] };
};

export const deleteBook = (id) => {
  const [book] = books.filter((item) => item.id === id);
  if (!book) {
    console.log(`Gagal: buku dengan ID ${id} tidak ditemukan.`);
    return null;
  }
  books = books.filter((item) => item.id !== id);
  console.log(`Buku #${id} berhasil dihapus.`);
  return { ...book };
};
