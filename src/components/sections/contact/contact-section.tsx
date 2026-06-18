import './contact-section.scss'
import type { SVGProps } from "react"
import { Mail, ArrowUpRight } from "lucide-react"

export default function ContactSection() {


    function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
        return (
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
            </svg>
        )
    }

    const links = [
        {
            id: "email",
            label: "Email",
            value: "contato@matheusabrantes.com",
            href: "mailto:contato@matheusabrantes.com",
            icon: Mail,
        },
        {
            id: "linkedin",
            label: "LinkedIn",
            value: "in/mtabrantes",
            href: "https://www.linkedin.com/in/mtabrantes",
            icon: LinkedinIcon,
        },
    ]

    return (
        <div className="from-cad-to-code">
            <div className="fctc-text-section">
                <h1 className="contact-title">
                    <span>Let's build something </span>
                    <span className="highlight-text">{`{together}`} </span>
                </h1>
                <h4 className="fctc-secondary-text">
                    <span>Open to opportunities, collaborations, and conversations about projects that bridge the physical and digital worlds. Choose whichever channel works best for you.</span>
                </h4>
                <h4 className="fctc-secondary-text">
                    <span>Currently seeking opportunities in Mechanical Engineering, Product Development, R&D, Industrial Engineer.</span>
                </h4>
                <h4 className="fctc-secondary-text">
                    <div className="location">
                        📍 São Carlos, SP, Brazil
                    </div>
                </h4>
                <ul className="contact-list">
                    {links.map((link) => (
                        <li key={link.id}>
                            <a href={link.href} className="contact-link">
                                <span className="contact-content">
                                    <link.icon className="contact-icon" />

                                    <span>
                                        <span className="contact-label">
                                            {link.label}
                                        </span>

                                        <span className="contact-value">
                                            {link.value}
                                        </span>
                                    </span>
                                </span>

                                <ArrowUpRight className="contact-arrow" />
                            </a>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    )
}