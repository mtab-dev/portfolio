import "./home.scss"
import HeroFooter from "../components/hero-footer/hero-footer"
import { Github, Linkedin } from "lucide-react"
import HomeSection from "../components/sections/home-section"
import { useState } from "react"
import ContactSection from "../components/sections/contact/contact-section"


export default function Home() {

    const [selectedContent, setSelectedContent] = useState("Home")

    return (
        <div className="home-page">
            <div className="hero-section">
                <div className="hero-text">
                    <div className="hero-greeting  ">
                        <h4>HELLO THERE,</h4><h4 className="hero-secondary-text">I'M</h4>
                    </div>
                    <h1>Matheus Abrantes</h1>
                    <h4 className="hero-secondary-text">Who am i? Mechanical Engineering Undergraduate and Software Developer
                    </h4>
                    <h2>{`{Design. Develop. Deliver.}`}   </h2>
                    <div className="mobile-social">
                        <Github href="https://github.com/mtab-dev" target="_blank" style={{ cursor: "pointer" }} />
                        <Linkedin href="https://linkedin.com/in/mtab-dev" target="_blank" style={{ cursor: "pointer" }} />
                    </div>
                </div>
                <div className="hero-footer">
                    <HeroFooter selected={selectedContent} onSelect={setSelectedContent} />
                </div>
            </div>
            {selectedContent == "Home" && <HomeSection />}
            {selectedContent === "About" && <div> </div>}
            {selectedContent === "Resume" && <div/>}
            {selectedContent === "Projects" && <div/>}
            {selectedContent === "Contact" && <ContactSection />}
        </div>
    )
}