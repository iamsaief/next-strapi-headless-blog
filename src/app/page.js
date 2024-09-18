import Image from "next/image";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-sora)]">
      <main className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Latest
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              A blog created with Next.js and Tailwind.css
            </p>
          </div>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-12">
              <article>
                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time datetime="2023-08-05T00:00:00.000Z">August 5, 2023</time>
                    </dd>
                  </dl>
                  <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold leading-8 tracking-tight">
                          <a
                            className="text-gray-900 dark:text-gray-100"
                            href="/blog/release-of-tailwind-nextjs-starter-blog-v2.0"
                          >
                            Release of Tailwind Nextjs Starter Blog v2.0
                          </a>
                        </h2>
                        <div className="flex flex-wrap">
                          <a
                            className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            href="/tags/next-js"
                          >
                            next-js
                          </a>
                          <a
                            className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            href="/tags/tailwind"
                          >
                            tailwind
                          </a>
                          <a
                            className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            href="/tags/guide"
                          >
                            guide
                          </a>
                          <a
                            className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            href="/tags/feature"
                          >
                            feature
                          </a>
                        </div>
                      </div>
                      <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                        Release of Tailwind Nextjs Starter Blog template v2.0, refactored with Nextjs App directory and
                        React Server Components setup.Discover the new features and how to migrate from V1.
                      </div>
                    </div>
                    <div className="text-base font-medium leading-6">
                      <a
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label='Read more: "Release of Tailwind Nextjs Starter Blog v2.0"'
                        href="/blog/release-of-tailwind-nextjs-starter-blog-v2.0"
                      >
                        Read more →
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </li>
            <li className="py-12">
              <article>
                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time datetime="2021-08-07T15:32:14.000Z">August 7, 2021</time>
                    </dd>
                  </dl>
                  <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold leading-8 tracking-tight">
                          <a className="text-gray-900 dark:text-gray-100" href="/blog/new-features-in-v1">
                            New features in v1
                          </a>
                        </h2>
                        <div className="flex flex-wrap">
                          <a
                            className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            href="/tags/next-js"
                          >
                            next-js
                          </a>
                          <a
                            className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            href="/tags/tailwind"
                          >
                            tailwind
                          </a>
                          <a
                            className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            href="/tags/guide"
                          >
                            guide
                          </a>
                        </div>
                      </div>
                      <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                        An overview of the new features released in v1 - code block copy, multiple authors, frontmatter
                        layout and more
                      </div>
                    </div>
                    <div className="text-base font-medium leading-6">
                      <a
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label='Read more: "New features in v1"'
                        href="/blog/new-features-in-v1"
                      >
                        Read more →
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </li>
            <li className="py-12">
              <article>
                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time datetime="2021-05-02T00:00:00.000Z">May 2, 2021</time>
                    </dd>
                  </dl>
                  <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold leading-8 tracking-tight">
                          <a
                            className="text-gray-900 dark:text-gray-100"
                            href="/blog/nested-route/introducing-multi-part-posts-with-nested-routing"
                          >
                            Introducing Multi-part Posts with Nested Routing
                          </a>
                        </h2>
                        <div className="flex flex-wrap">
                          <a
                            className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            href="/tags/multi-author"
                          >
                            multi-author
                          </a>
                          <a
                            className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            href="/tags/next-js"
                          >
                            next-js
                          </a>
                          <a
                            className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            href="/tags/feature"
                          >
                            feature
                          </a>
                        </div>
                      </div>
                      <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                        The blog template supports posts in nested sub-folders. This can be used to group posts of
                        similar content e.g. a multi-part course. This post is itself an example of a nested route!
                      </div>
                    </div>
                    <div className="text-base font-medium leading-6">
                      <a
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label='Read more: "Introducing Multi-part Posts with Nested Routing"'
                        href="/blog/nested-route/introducing-multi-part-posts-with-nested-routing"
                      >
                        Read more →
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          </ul>
        </div>
      </main>
      <footer className=""></footer>
    </div>
  );
}
