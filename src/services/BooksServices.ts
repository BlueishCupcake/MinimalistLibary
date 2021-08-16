import axios from "axios";

const BooksServices = {
  async getBooks(term: string) {
    const resp = await axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=search+${term}`)
      .catch((err) => console.log(err));

    return resp;
  },
};

export default BooksServices;
