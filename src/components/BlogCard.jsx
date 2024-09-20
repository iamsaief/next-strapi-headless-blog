import { formatTimestamp } from "@/utils/frormat-timestamp";
import Link from "next/link";

export default function BlogCard({ article }) {
  return (
    <article>
      <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
        <div className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
          <time dateTime="2023-08-05T00:00:00.000Z">{formatTimestamp(article.publishedAt)}</time>
        </div>
        <div className="space-y-5 xl:col-span-3">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold leading-8 tracking-tight ">
                <Link
                  className="text-gray-900 dark:text-gray-100 hover:text-primary-400 hover:underline"
                  href={article.slug}
                >
                  {article.title}
                </Link>
              </h2>
              <div className="flex flex-wrap">
                <span className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                  {article.category.name}
                </span>
              </div>
            </div>
            <div className="prose max-w-none text-gray-500 dark:text-gray-400">
              Release of Tailwind Nextjs Starter Blog template v2.0, refactored with Nextjs App directory and React
              Server Components setup.Discover the new features and how to migrate from V1.
            </div>
          </div>
          <div className="text-base font-medium leading-6">
            <Link
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label='Read more: "Release of Tailwind Nextjs Starter Blog v2.0"'
              href={article.slug}
            >
              Read more →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
