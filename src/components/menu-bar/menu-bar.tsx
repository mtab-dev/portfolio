import { Moon } from "lucide-react";
import "./menu-bar.scss"
import { useState } from "react";

export default function MenuBar() {
    const [selected, setSelected] = useState("Home");

    return (
        <div className="menu-bar">
            <a
                className={selected === "Home" ? "selected-option" : ""}
                onClick={() => setSelected("Home")}
            >Home</a>
            <a
                className={selected === "About" ? "selected-option" : ""}
                onClick={() => setSelected("About")}
            >About</a>
            <a
                className={selected === "Resume" ? "selected-option" : ""}
                onClick={() => setSelected("Resume")}
            >Resume</a>
            <a
                className={selected === "Projects" ? "selected-option" : ""}
                onClick={() => setSelected("Projects")}
            >Projects</a>
            <a
                className={selected === "Contact" ? "selected-option" : ""}
                onClick={() => setSelected("Contact")}
            >Contact</a>
            <Moon />
        </div>
    )
}