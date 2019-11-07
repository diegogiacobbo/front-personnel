import React, { } from 'react'
import './about.scss'

class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = { collapsed: true };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ collapsed: false })
        }, 1000);

        window.scrollTo(0, 0)
    }

    render() {

        const { collapsed } = this.state;
        /** TODO: commencer a faire dinamiquement les skills,
         *  avec les nouvelles versions du back.
         * 
            ReactDOM.render(
                <About hue="300" saturation="40" skills={SKILLS} />,
                document.getElementById('root')
            );
         *
         */
        //const { hue, saturation, skills } = this.props;

        const skills = [
            { type: "Java", level: 75 },
            { type: "PHP", level: 70 },
            { type: "HTML", level: 99 },
            { type: "CSS", level: 90 },
            { type: "JavaScript", level: 84 },
            { type: "TypeScript", level: 60 },
            { type: "React.js", level: 60 },
            { type: "Angular.js", level: 80 },
            { type: "BootStrap", level: 81 },
            { type: "jQuery", level: 73 }
        ];

        const hue = "264.34";
        const saturation = "36";

        return (

            <div>
                <div className="bg-image">
                    <div className="row a-propos-content-image">
                        <div className="col-md-4 col-auto d-none d-lg-block">
                        </div>
                        <div className="col-md-2 ">
                        </div>
                        <div className="a-propos-content col-md-6">
                            <p>{process.env.REACT_APP_A_PROPOS_CONTENU}</p>
                        </div>
                    </div>
                </div>
                <div className="cards">
                    <div className="row mb-2 procergs-dbserver">
                        <div className="col-md-6 card-1">
                            <div className="row no-gutters rounded overflow-hidden flex-md-row mb-6 h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">
                                    <a rel="noopener noreferrer" target="_blank" href="https://www.dbserver.com.br">
                                        <strong className="d-inline-block mb-2">{process.env.REACT_APP_CARTE_TITLE_1}</strong>
                                    </a>
                                    <h3 className="mb-0">{process.env.REACT_APP_CARTE_TITLE_1b}</h3>
                                    <br />
                                    <div className="mb-1 text-muted">{process.env.REACT_APP_CARTE_SUB_TITLE_1}</div>
                                    <br />
                                    <p className="card-text mb-auto">{process.env.REACT_APP_CARTE_1}</p>
                                    <br />
                                    <a rel="noopener noreferrer" target="_blank" href="https://servicos.corsan.com.br">
                                        <div className="image-2" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 card-2">
                            <div className="row no-gutters rounded overflow-hidden flex-md-row mb-6 h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">
                                    <a rel="noopener noreferrer" target="_blank" href="https://www.procergs.rs.gov.br">
                                        <strong className="d-inline-block mb-2">{process.env.REACT_APP_CARTE_TITLE_2}</strong>
                                    </a>
                                    <h3 className="mb-0">{process.env.REACT_APP_CARTE_TITLE_2b}</h3>
                                    <br />
                                    <div className="mb-1 text-muted">{process.env.REACT_APP_CARTE_SUB_TITLE_2}</div>
                                    <br />
                                    <p className="mb-auto">{process.env.REACT_APP_CARTE_2}</p>
                                    <br />
                                    <a rel="noopener noreferrer" target="_blank" href="https://agenda.rs.gov.br/">
                                        <div className="image-1" />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="p-4">
                                <h3>Dernières découvertes</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row marques">

                        <div className="col-md-4 col-sm-6 right-border">
                            <div alt="Marque Node.js" className="node logos"></div>
                        </div>

                        <div className="col-md-4 col-sm-6 right-border">
                            <div alt="Marque Npm" className="npm logos"></div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div alt="Marque Docker" className="docker logos"></div>
                        </div>

                        <div className="col-md-4 col-sm-6 right-border">
                            <div alt="Marque Github" className="github logos"></div>
                        </div>

                        <div className="col-md-4 col-sm-6 right-border">
                            <div alt="Marque AWS" className="aws logos"></div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div alt="Image Console" className="console logos"></div>
                        </div>

                        <div className="col-md-4 col-sm-6 right-border">
                            <div alt="Marque Mongodb" className="mongodb logos"></div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div alt="Marque Gulp" className="gulp logos"></div>
                        </div>
                    </div>


                    <div id="app" className={`skill-bar ${collapsed ? 'collapsed' : ''}`}>
                        <div className="row mb-2">
                            <div className="col-md-6">
                                <div className="col-auto d-none d-lg-block">
                                    <div className="head-skills refletir link-profile"></div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <ul className="skills">
                                    {skills.map((skill, index) =>
                                        <li
                                            key={skill.type}
                                            style={{ width: `${skill.level}%`, backgroundColor: `hsl(${hue}, ${saturation}%, ${100 / (index + 3.5)}%)` }}
                                        >
                                            <p>{skill.type}<span>{skill.level}</span></p>
                                        </li>
                                    )}
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        )
    }
}


export default About

