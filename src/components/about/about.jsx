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
            { type: "SCSS", level: 98 },
            { type: "JavaScript", level: 90 },
            { type: "jQuery", level: 83 },
            { type: "BootStrap", level: 81 },
            { type: "Angular.js", level: 80 },
            { type: "Java", level: 75 },
            { type: "PHP", level: 70 },
            { type: "React.js", level: 50 }
        ];

        const hue = "300";
        const saturation = "40";

        return (
            <div className="skillbar">
                <div id="app" className={`skillbar ${collapsed ? 'collapsed' : ''}`}>
                    <h4>About Us</h4>
                    <p>
                        Etiam porta sem maleuada magna mollis euismod . Cras mattis consectetur purus senta-se no amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                    </p>
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

