import Image from "next/image";
import NavBar from "./component/NavigationBar/NavBar";
import profilePic from "../../public/pic.png"
import AboutMe from "./component/AboutMe/AboutMe";

import nodelogo from "../../public/nodelogo.png";
import javalogo from "../../public/javalogo.jpg";
import reactlogo from "../../public/React-icon.png";

export default function Home() {
  return (
    <div>
      <NavBar/>
      <div className="flex justify-between mt-10 h-dvh relative">
        <div className="max-w-xl text-center mt-30 ">

      <h1 className= "text-7xl font-bold p-4 text-right"> Hey, It's Nitesh</h1>
      <h2 className="text-3xl font-bold p-4 items-left"> Full stack developer</h2>
      <p className="text-1xl text-center p-4">I am a full stack developer with a passion for creating dynamic and responsive web applications. With expertise in both 
        front-end and back-end technologies</p>
        <p className="text-1xl text-center p-4">
         I strive to deliver seamless user experiences and robust functionality. Let's build something amazing together!</p>
         </div>

        <div className="flex justify-center items-center">
      <img src={profilePic.src} alt="Picture of the author" width={300} height={300} className="rounded-full mx-auto"/>
        </div>
        <div className="header-cercle-cmp ">
          <div className="itemcirecle flex flex-col gap-4 mx-10"> 
            <img src={nodelogo.src} width={100} height={100} className="flex rounded-full mx-auto "/>
            <img src={javalogo.src} width={100} height={100} className="flex rounded-full mx-auto "/>
            <img src={reactlogo.src} width={100} height={100} className="flex rounded-full mx-auto "/>

            </div>
        </div>
      </div>
      <AboutMe/>
    </div>
  );
}
