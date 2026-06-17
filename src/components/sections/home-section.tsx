export default function HomeSection(){
    return(
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
                    
                    <div className="skills">
                        <h4 className="fctc-secondary-text" >Some of my skills are: </h4>

                        <div className="skills-grid">
                            <img src="/skills/pngwing.com (1).png" alt="SolidWorks" />
                            <img src="/skills/logo-fusion.png" alt="Fusion 360" />
                            <img src="/skills/logo-excel.png" alt="Excel" />
                            <img src="/skills/logo-matlab.png" alt="MatLab" />
                            <img src="/skills/logo-py.png" alt="Python" />
                            <img src="/skills/logo-sql.png" alt="SQL" />
                        </div>
                    </div>

                </div>
                <div className="fctc-visual">
                    <h1 className="fctc-title-mobile">
                        <span>from </span>
                        <span className="highlight-text">CAD </span>
                        <span>to {`{code}`}</span>
                    </h1>
                    <img src="/assets/cad-code-image.png" className="fctc-image" />
                </div>
            </div>
    )
}