import { Inter } from "next/font/google";
import Signup from "./signup";
import Login from "./login";
import Homepg from "./homepg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="bg-orange-300 w-full h-full flex flex-row justify-center items-center">
        <Login />
      </div>
    </>
  );
}
