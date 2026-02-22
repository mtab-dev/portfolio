import { Moon, Home, User, FileText, Folder, Mail } from "lucide-react";
import "./menu-bar.scss";
import { useState } from "react";

export default function MenuBar() {
    const [selected, setSelected] = useState("Home");

    return (
        <div className="menu-bar">
            <a
                className={selected === "Home" ? "selected-option" : ""}
                onClick={() => setSelected("Home")}
            >
                <Home className="icon" />
                <span className="label">Home</span>
            </a>

            <a
                className={selected === "About" ? "selected-option" : ""}
                onClick={() => setSelected("About")}
            >
                <User className="icon" />
                <span className="label">About</span>
            </a>

            <a
                className={selected === "Resume" ? "selected-option" : ""}
                onClick={() => setSelected("Resume")}
            >
                <FileText className="icon" />
                <span className="label">Resume</span>
            </a>

            <a
                className={selected === "Projects" ? "selected-option" : ""}
                onClick={() => setSelected("Projects")}
            >
                <Folder className="icon" />
                <span className="label">Projects</span>
            </a>

            <a
                className={selected === "Contact" ? "selected-option" : ""}
                onClick={() => setSelected("Contact")}
            >
                <Mail className="icon" />
                <span className="label">Contact</span>
            </a>

            <Moon />
        </div>
    );
}