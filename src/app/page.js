import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { fetchArticles } from "@/utils/fetch-articles";

export default async function Home() {
  const [articlesRes, ftArticlesRes] = await Promise.all([
    await fetchArticles("filters[isFeatured][$eq]=false"),
    await fetchArticles("filters[isFeatured][$eq]=true"),
  ]);

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <Header />
      <main className="">
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Latest Articles
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              Headless blog created with Next.js, Tailwind.css, Strapi CMS
            </p>
          </div>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {articlesRes.data.map((article) => {
              return (
                <li key={article.id} className="py-12">
                  <BlogCard article={article} />
                </li>
              );
            })}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
