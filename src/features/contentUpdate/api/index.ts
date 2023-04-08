import axios from "axios";
export const scrapeMangaDetails = async (url_to_scrape: string) => {
  try {
    const response = await axios.post(
      `https://manhwa-webtoon-tracker-backend.onrender.com/scrape`,
      {
        url_to_scrape: "https://mangatx.com/manga/mercenary-enrollment/",
      }
    );
    return response?.data;
  } catch (error) {
    console.error("Common Questions Api error", error);
  }
};
