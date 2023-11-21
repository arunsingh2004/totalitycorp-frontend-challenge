import Image from "next/image";
import { Content, Inter } from "next/font/google";
import Contents from "../components/Contents";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className=" aspect-auto  w-full">
        <img
          className="w-full"
          src="https://www.xenius.in/wp-content/uploads/2020/12/Xenius-A-one-stop-solution-for-every-manufacturing-unit.jpg"
        ></img>
        <Contents />
      </div>
    </>
  );
}
