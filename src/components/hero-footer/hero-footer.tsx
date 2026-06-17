import { Github, Linkedin, SquareArrowOutUpRight } from "lucide-react";
import MenuBar from "../menu-bar/menu-bar";
import "./hero-footer.scss"
interface HeroFooterProps {
    selected: string;
    onSelect: (page: string) => void;
}

export default function HeroFooter({
    selected,
    onSelect,
}: HeroFooterProps) {
    return (
        <div className="hero-footer-section">
            <div className="social">
                <a href="https://github.com/mtab-dev" target="_blank" style={{color: "white"}} >
                    <Github style={{ cursor: "pointer" }} />
                </a>
                <a href="https://linkedin.com/in/mtabrantes" target="_blank" style={{color: "white"}}>
                    <Linkedin style={{ cursor: "pointer" }} />
                </a>
            </div>
            <div className="menu-bar-section">
                <MenuBar selected={selected} onSelect={onSelect}  />
            </div>
            <div className="in-a-hurry">
                <h4 className="in-a-hurry-text">In a hurry? Download my resume!</h4>
                <a href="/assets/Matheus_Abrantes_Resume.pdf" download className="resume-button">Resume <SquareArrowOutUpRight width={16} /></a>
            </div>
        </div>
    )
}