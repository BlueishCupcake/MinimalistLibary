import { useParams } from "react-router-dom";

export const GetPage = () => {
  let { page } = useParams<{ page: any }>();

  if (!page) {
    page = "1";
  }

  return parseInt(page);
};
