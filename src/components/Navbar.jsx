import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="h-22 bg-blue-50 shadow-lg shadow-sky-200/50 py-4">
      <div className="flex flex-row justify-between items-center max-w-[1200px] px-6 sm:mx-auto">
        {/* Logo */}
        <div >
          <a href="/" className="inline-flex space-x-2">
            <Image src={`/search_632815.png`} width="32" height="32" alt="Logo" />
            <span className="text-xl font-sans font-semibold">Crawder</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:flex-row md:space-x-6">
          <ul className="flex space-x-4 mt-2">
            <li><a href="/about" className="hover:text-blue-700">About</a></li>
            <li><a href="/pricing" className="hover:text-blue-700">Pricing</a></li>
          </ul>
          <a href="/login">
            <button type="button"  class="text-white bg-blue-700 hover:bg-blue-800  focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login</button>
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="my-4 md:hidden">
          <a href="#">
            <Image src={`/hamburger-svgrepo-com.svg`} width="24" height="24" alt="Menu" />
          </a>
        </div>
      </div>
    </nav>
  );
}
