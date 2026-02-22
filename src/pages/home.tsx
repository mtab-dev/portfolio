import "./home.scss"
import HeroFooter from "../components/hero-footer/hero-footer"


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
                </div>
                <div className="hero-footer">
                   <HeroFooter />
                </div>
            </div>
        </div>
    )
}