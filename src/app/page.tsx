import Image from "next/image";
import NavBar from "./component/navigation/NavBar";
import profilePic from "../../public/pic.png"
import AboutMe from "./component/AboutMe/AboutMe";

export default function Home() {
  return (
    <div>
      <NavBar/>
      <img src={profilePic.src} alt="Picture of the author" width={200} height={200} className="rounded-full mx-auto"/>
      <h1 className= "text-3xl font-bold p-4"> Hey, It's Nitesh Samuel </h1>
      <h2 className="text-3xl font-bold p-4"> Full stack developer</h2>
      <p className="text-lg p-4">I am a full stack developer with a passion for creating dynamic and responsive web applications. With expertise in both 
        front-end and back-end technologies,
         I strive to deliver seamless user experiences and robust functionality. Let's build something amazing together!</p>
      <AboutMe/>
    </div>
  );
}
