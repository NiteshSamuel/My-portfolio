import Image from "next/image";
import NavBar from "./component/NavigationBar/NavBar";
import profilePic from "../../public/pic.png"
import AboutMe from "./component/AboutMe/AboutMe";

export default function Home() {
  return (
    <div>
      <NavBar/>
      <div className="flex justify-center mt-10">
        <div className="max-w-xl text-center mr-40 ">

      <h1 className= "text-3xl font-bold p-4 text-right"> Hey, It's Nitesh</h1>
      <h2 className="text-3xl font-bold p-4 items-left"> Full stack developer</h2>
      <p className="text-1xl text-center">I am a full stack developer with a passion for creating dynamic and responsive web applications. With expertise in both 
        front-end and back-end technologies,
         I strive to deliver seamless user experiences and robust functionality. Let's build something amazing together!</p>
         </div>
        <div>

      <img src={profilePic.src} alt="Picture of the author" width={300} height={300} className="rounded-full mx-auto"/>
        </div>
      </div>
      <AboutMe/>
    </div>
  );
}
