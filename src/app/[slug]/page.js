import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { config } from "@/config";
import { fetchArticles } from "@/utils/fetch-articles";
import { formatTimestamp } from "@/utils/frormat-timestamp";
import Image from "next/image";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";

export default async function BlogDetails(props) {
  const articleRes = await fetchArticles(`filters[slug][$eq]=${props.params.slug}`);
  const article = articleRes.data[0];

  if (!articleRes.data[0]) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <Header />
      {articleRes.data[0] && (
        <article className="blog-details pt-6 xl:pb-6 ">
          <div className="text-center">
            <div className="mb-2">
              <time dateTime="2023-08-05T00:00:00.000Z">{formatTimestamp(article?.publishedAt, true)}</time>
            </div>
            <h1 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              {article.title}
            </h1>
          </div>
          <Image
            width={article.cover.width}
            height={article.cover.height}
            src={`${config.API_BASE}${article.cover.url}`}
            className="my-8"
            alt={article.cover.alternativeText}
          />
          {article.blocks.map((block) => {
            return <Markdown key={block.id}>{block.body}</Markdown>;
          })}
        </article>
      )}
      <Footer />
    </div>
  );
}
