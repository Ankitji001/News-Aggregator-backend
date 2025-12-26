import { fetchNews } from "../services/newsService.js";

export const getNews = async (req, res) => {
  try {
    const { category, q, page } = req.query;
    const data = await fetchNews(category, q, page);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch news" });
  }
};
