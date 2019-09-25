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
            { type: "HTML", level: 99 },
            { type: "CSS", level: 98 },
            { type: "JavaScript", level: 87 },
            { type: "jQuery", level: 92 },
            { type: "BootStrap", level: 90 },
            { type: "Photoshop", level: 100 },
            { type: "Angular.js", level: 16 },
            { type: "React.js", level: 25 },
            { type: "PHP", level: 36 },
            { type: "Ruby", level: 11 }
        ];

        const hue = "300";
        const saturation = "40";

        return (
            <div className="skillbar">
                <div id="app" className={`skillbar ${collapsed ? 'collapsed' : ''}`}>
                    <h1>Skill Bars - React Component</h1>
                    <p>Set the Hue and Saturation on the <code>&lt;About /&gt;</code> instance and let the component deal with the shades</p>
                    <hr />
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
        )
    }

}

export default About

