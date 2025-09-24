import React from 'react'

const NavBar = () => {
  return (
   <nav className="sticky top-0 bg-white shadow-md opacity-85 z-50">
<ul className= "flex justify-center gap-8 p-4 text-lg font-semibold text-purple-700">
  <li>  
    <a href='#home' className = "hover:text-purple-900 transition-colors duration-200">HOME</a>
    </li>
     <li>  
    <a href='#About' className = "hover:text-purple-900 transition-colors duration-200">ABOUT</a>
    </li>
     <li>  
    <a href='#Work' className = "hover:text-purple-900 transition-colors duration-200">WORK</a>
    </li>
     <li>  
    <a href='#Skills' className = "hover:text-purple-900 transition-colors duration-200">SKILLS</a>
    </li>
     <li>  
    <a href='#Contact' className = "hover:text-purple-900 transition-colors duration-200">CONTACT</a>
    </li>

</ul>

   </nav>
  );
  
}

export default NavBar;
