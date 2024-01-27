"use client";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <nav className="sticky top-0 p-4 border-gray-200 mb-2 bg-gray-900 z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
          MediQuiz
        </span>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
            <li>
              <div
                onClick={() => handleNavigation("/home")}
                className="cursor-pointer block py-2 px-3  bg-blue-700 rounded md:bg-transparent  md:p-0 text-white md:text-blue-500"
                aria-current="page"
              >
                Home
              </div>
            </li>
            <li>
              <div
                onClick={() => handleNavigation("/quiz")}
                className="cursor-pointer block py-2 px-3 rounded md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
              >
                About
              </div>
            </li>
            <li>
              <div
                onClick={() => handleNavigation("/quiz")}
                className="cursor-pointer block py-2 px-3 rounded md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
              >
                New Quiz
              </div>
            </li>
            <li>
              <div
                onClick={() => handleNavigation("/contact")}
                className="cursor-pointer block py-2 px-3 rounded md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
              >
                Contact
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
