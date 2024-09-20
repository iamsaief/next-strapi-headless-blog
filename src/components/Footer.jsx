export default function Footer() {
  return (
    <>
      <footer className="text-sm text-gray-500 dark:text-gray-400">
        <div className="my-10 flex justify-center space-x-1">
          <span>&copy; {new Date().getFullYear()}</span>
          <a href="/contact">Saief</a>
          <span>· build with</span>
          <span
            className="text-transparent text-xs self-center"
            style={{ textShadow: "0 0 0 rgb(6 182 212 / var(--tw-text-opacity))" }}
          >
            ❤️
          </span>
          <span>
            · inspired from <a href="https://github.com/timlrx/tailwind-nextjs-starter-blog">timlrx</a>
          </span>
        </div>
      </footer>
    </>
  );
}
