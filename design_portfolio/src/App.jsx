import React from "react";
import {BrowserRouter} from "react-router-dom"
import {About, Contact, Experience, Feedbacks, Hero, Loader, Navbar, Tech, Works, StarsCanvas} from "./components"

function App() {
     return (
          <BrowserRouter>
               <div className="bg-primary" style={{position:"relative", zIndex:"0", background:"black"}}>
                    <div className="bg-hero-pattern"  style={{backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPosition:"center"}}>
                         <Navbar />
                         <Hero />
                    </div>
                    <About />
                    <Experience />
                    <Tech />
                    <Works />
                    <Feedbacks />
                    <div className="footer" style={{position:"relative", zIndex:"0"}}>
                         <Contact />
                         <StarsCanvas />
                    </div>
               </div>
          </BrowserRouter>
     )
}

export default App;