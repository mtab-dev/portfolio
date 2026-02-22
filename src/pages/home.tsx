import "./home.scss"
import HeroFooter from "../components/hero-footer/hero-footer"
import { Github, Linkedin } from "lucide-react"


export default function Home() {

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
                    <HeroFooter />
                </div>
            </div>
            <div className="from-cad-to-code">
                <div className="fctc-text-section">
                    <h1 className="fctc-title">
                        <span>from </span>
                        <span className="highlight-text">CAD </span>
                        <span>to {`{code}`}</span>
                    </h1>
                    <h4 className="fctc-secondary-text">
                        <span>The  </span>
                        <span className="highlight-text">intersection  </span>
                        <span>between physical and digital  </span>
                        <span className="highlight-text">solutions</span>
                    </h4>
                    <h4 className="fctc-description">
                        Being a Mechanical{" "}
                        <span className="highlight-text">Engineering</span>{" "}
                        student with a background in web development allows me to design{" "}
                        <span className="highlight-text">projects</span>{" "}
                        in many fields.
                    </h4>
                </div>
                <div className="fctc-visual">
                    <h1 className="fctc-title-mobile">
                        <span>from </span>
                        <span className="highlight-text">CAD </span>
                        <span>to {`{code}`}</span>
                    </h1>
                    <img src="./public/assets/cad-code-image.png" className="fctc-image" />
                </div>
            </div>
        </div>
    )
}