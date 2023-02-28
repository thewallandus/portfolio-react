import Navbar from "./scenes/Navbar";
import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import LineGradient from "./components/LineGradient";
import Projects from "./scenes/Projects";
import Testimonials from "./scenes/Testimonials";
import DotGroup from "./scenes/DotGroup";
import Footer from "./scenes/Footer";
import Landing from "./scenes/Landing";
import MySkills from "./scenes/MySkills";
import Contact from "./scenes/Contact";
import AnimationRevealPage from "./helpers/AnimationRevealPage";
import "tailwindcss/lib/css/preflight.css"
import Pricing from "./scenes/Pricing";

function App() {
  
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true) 
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");  
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);

      window.addEventListener("scroll", handleScroll)

      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, []);


  return (
    <AnimationRevealPage>
        <Navbar 
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}   
          isTopOfPage={isTopOfPage}     
        />
        <div className="w-5/6 mx-auto md:h-full">
            {isAboveMediumScreens && (
                <DotGroup 
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
            )}
            <Landing setSelectedPage={setSelectedPage} />
        </div>
        <LineGradient />
        <div className="w-5/6 mx-auto md:h-full">
              <MySkills />
        </div>
        <LineGradient />
        <div className="w-5/6 mx-auto">
              <Projects />
        </div>
        <LineGradient />
        <div className="w-5/6 mx-auto md:h-full">
              <Testimonials />
        </div>
        <LineGradient />
        <div className="w-5/6 mx-auto md:h-full">
              <Contact />
        </div>
        <LineGradient />
        <div className="w-5/6 mx-auto md:h-full">
              <Pricing />
        </div>
        <Footer />
    </AnimationRevealPage>
  );
}

export default App;
