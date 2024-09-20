export default function Header() {
  return (
    <>
      <header className="flex items-center w-full justify-between py-10">
        <a className="break-words" aria-label="TailwindBlog" href="/">
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <code className="text-[2rem] text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                &lt;Saief /&gt;
              </code>
            </div>
          </div>
        </a>
        <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
          <div className="no-scrollbar hidden max-w-40 items-center space-x-4 overflow-x-auto sm:flex sm:space-x-6 md:max-w-72 lg:max-w-96">
            <a
              className="block font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
              href="/tags"
            >
              Tags
            </a>
            <a
              className="block font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
              href="/projects"
            >
              Projects
            </a>
            <a
              className="block font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
              href="/about"
            >
              About
            </a>
          </div>
          <button aria-label="Search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6 text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}
