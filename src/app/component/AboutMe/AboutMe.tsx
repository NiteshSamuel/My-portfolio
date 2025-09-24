import React from 'react'
import { FaReact, FaNodeJs, FaDatabase, FaGithub } from 'react-icons/fa'

function AboutMe() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full transition-transform hover:scale-105 duration-300">
        <h1 className="text-3xl font-bold text-purple-700 mb-4 text-center">About Me!</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          I am a full stack developer with 3+ years of experience and a passion for creating dynamic and responsive web applications. With expertise in both front-end and back-end technologies, I strive to deliver seamless user experiences and robust functionality. Let's build something amazing together!
        </p>
        <h2 className="text-xl font-semibold text-blue-600 mb-2 text-center">Skills</h2>
        <div className="flex justify-center gap-6 mb-4">
          <div className="flex flex-col items-center group">
            <FaReact className="text-4xl text-blue-400 group-hover:animate-bounce" />
            <span className="text-sm mt-2">React.js</span>
          </div>
          <div className="flex flex-col items-center group">
            <FaNodeJs className="text-4xl text-green-500 group-hover:animate-bounce" />
            <span className="text-sm mt-2">Node.js</span>
          </div>
          <div className="flex flex-col items-center group">
            <FaDatabase className="text-4xl text-yellow-600 group-hover:animate-bounce" />
            <span className="text-sm mt-2">MongoDB/SQL</span>
          </div>
          <div className="flex flex-col items-center group">
            <FaGithub className="text-4xl text-gray-800 group-hover:animate-bounce" />
            <span className="text-sm mt-2">GitHub</span>
          </div>
        </div>
        <button className="w-full py-2 mt-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200">
          Contact Me
        </button>
      </div>
    </div>
  )
}

export default AboutMe