import Image from "next/image";
import { Inter } from "next/font/google";
import { SearchIcon } from "@/components/searchIcon";
import { HeartIcon } from "@/components/heartIcon";

const inter = Inter({ subsets: ["latin"] });

const date = new Date();

export default function Home() {
  return (
    <div className="">
      <header className=" text-gray-800 bg-white px-[5%] py-6 text-5xl font-extrabold">
        Qanda
      </header>
      <main
        className={`flex h-[80vh] flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <form action="">
          <label
            htmlFor="search"
            className="flex items-center bg-white py-3 px-4 gap-2 rounded-md"
          >
            <input
              type="search"
              className="outline-none text-gray-800 w-[400px]"
              name="search"
              id="search"
              placeholder="Search data"
            />
            <span className="block w-6">
              {" "}
              <SearchIcon />{" "}
            </span>
          </label>
        </form>
      </main>
      <footer className=" text-center text-gray-800 flex justify-center">
        &copy; {date.getFullYear()}. Developed with&nbsp;
        <HeartIcon />
        &nbsp;by&nbsp;
        <b>Augustine &amp; Hillary.</b>
      </footer>
    </div>
  );
}
