import axios from "axios";

const BooksServices = {
  async getBooks(term: string, page: number) {
    page = 10 * (page - 1);

    const resp: any = await axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${term}&startIndex=${page}`
      )
      .catch((err) => console.log(err));

    return resp;
  },

  async getBookDetails(id: string) {
    const resp: any = await axios
      .get(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .catch((err) => console.log(err));

    return resp.data;
  },
};

export default BooksServices;
