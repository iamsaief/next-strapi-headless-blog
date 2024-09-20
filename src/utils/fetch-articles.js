import { config } from "@/config";

export const fetchArticles = async (params) => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  };

  const request = await fetch(`${config.API_BASE}/api/articles?populate=*&${params}`, reqOptions);
  const response = await request.json();

  return response;
};
