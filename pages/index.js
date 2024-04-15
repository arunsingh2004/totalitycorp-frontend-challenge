import Image from "next/image";
import { Content, Inter } from "next/font/google";
import Contents from "../components/Contents";
import Homepage from "./homepage";
import Carousel from "./Crousel";
// import { Carousel } from "flowbite-react";
import Login from "./login";
import Feedback from "./feedback";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className=" aspect-auto  w-full">
        <div className=""></div>
        <div className="flex flex-row m-12">
          <div className="h-full  w-1/2 ">{/* <Carousel /> */}</div>
          <div className=" border-solid">
            <img
              className=""
              src="https://www.xenius.in/wp-content/uploads/2020/12/Xenius-A-one-stop-solution-for-every-manufacturing-unit.jpg"
            ></img>
          </div>
        </div>
        <Homepage />
        <Contents />
        <Feedback />
      </div>
    </>
  );
}
