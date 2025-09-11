import React from "react"
import About from "./Components/About/About.jsx"
import Contact from "./Components/Contact/Contact.jsx"
import Education from "./Components/Education/Education.jsx"
import Experience from "./Components/Experience/Experience.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import Navbar from "./Components/Navbar/Navbar.jsx"
import Skills from "./Components/Skills/Skills.jsx"
import Work from "./Components/Work/Work.jsx"
import BlurBlob from "./BlurBlob.jsx"


function App() {
  return (

    
    <div className="bg-[#050414]">

      <BlurBlob position={{top:'37%', right:'20%'}} size={{width:'30%',height:'40%'}}></BlurBlob>

       {/* <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} /> */}

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>

    </div>

  );

}

export default App
