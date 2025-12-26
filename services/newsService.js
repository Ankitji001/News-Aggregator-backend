import axios from "axios";

export const fetchNews = async (category, q, page = 1) => {
  const url = "https://newsapi.org/v2/top-headlines";

  const response = await axios.get(url, {
    params: {
      apiKey: process.env.NEWS_API_KEY,
      country: "us",
      category,
      q,
      page,
      pageSize: 6,
    },
  });

  return response.data;
};
