import { Github, Linkedin, SquareArrowOutUpRight } from "lucide-react";
import MenuBar from "../menu-bar/menu-bar";
import "./hero-footer.scss"

export default function HeroFooter() {
    return (
        <div className="hero-footer">
            <div className="social">
                <Github href="https://github.com/mtab-dev" target="_blank" style={{cursor: "pointer"}}/>
                <Linkedin href="https://linkedin.com/in/mtab-dev" target="_blank" style={{cursor: "pointer"}}/>
            </div>
            <div className="menu-bar" style={{marginLeft: "8rem"}}>
                <MenuBar />
            </div>
            <div className="in-a-hurry">
                <h4 className="hero-secondary-text">In a hurry? Download my resume!</h4>
                <button className="resume-button">Resume <SquareArrowOutUpRight width={16} /></button>
            </div>
        </div>
    )
}