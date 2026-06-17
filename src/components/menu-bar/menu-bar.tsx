import { Moon, Home, User, FileText, Folder, Mail } from "lucide-react";
import "./menu-bar.scss";
interface MenuBarProps {
    selected: string;
    onSelect: (page: string) => void;
}

export default function MenuBar({
    selected,
    onSelect,
}: MenuBarProps) {
    return (
        <div className="menu-bar">
            <a
                className={selected === "Home" ? "selected-option" : ""}
                onClick={() => onSelect("Home")}
            >
                <Home className="icon" />
                <span className="label">Home</span>
            </a>

            <a
                className={selected === "About" ? "selected-option" : ""}
                onClick={() => onSelect("About")}
            >
                <User className="icon" />
                <span className="label">About</span>
            </a>

            <a
                className={selected === "Resume" ? "selected-option" : ""}
                onClick={() => onSelect("Resume")}
            >
                <FileText className="icon" />
                <span className="label">Resume</span>
            </a>

            <a
                className={selected === "Projects" ? "selected-option" : ""}
                onClick={() => onSelect("Projects")}
            >
                <Folder className="icon" />
                <span className="label">Projects</span>
            </a>

            <a
                className={selected === "Contact" ? "selected-option" : ""}
                onClick={() => onSelect("Contact")}
            >
                <Mail className="icon" />
                <span className="label">Contact</span>
            </a>
        </div>
    );
}