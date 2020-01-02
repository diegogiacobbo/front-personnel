import React, { } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Post from '../posts/post';
import Posts from '../posts/posts';
import About from '../about/about';
import './navbar-toogle.scss'
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { createBrowserHistory } from "history";

class NavBarStrapNative extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.refNavBar = React.createRef();

    }

    componentDidMount() {
        const history = createBrowserHistory()

        if (history.location.pathname === "/")
            this.handleChangeClass(true);
        else
            this.handleChangeClass(false);
    }

    handleClickOpenToggle = () => {
        if (document.body.classList.contains("overflow")) {
            document.body.classList.remove("overflow");
        }else{
            document.body.classList.add("overflow");
        }
    }

    handleClickCloseToggle = () => {
        this.refNavBar.current.classList.remove("show");
        document.body.classList.remove("overflow");
    }

    handleChangeClass = (premiere) => {
        if (premiere) {
            this.setState(
                {
                    classNavBar: "navbar-premiere-en-tete",
                    classPremiereEnTeteLettre: "premiere-en-tete",
                    classPremiereEnTeteToggle: "navbar navbar-collapse collapse navbar-dark bg-dark d-md-none p-3 premiere-en-tete-nav-bar"
                });
        } else {
            this.setState(
                {
                    classNavBar: "navbar-premiere-en-tete-default",
                    classPremiereEnTeteLettre: "premiere-en-tete-default",
                    classPremiereEnTeteToggle: "navbar navbar-collapse collapse navbar-dark bg-dark d-md-none p-3"
                });
        }
    }

    render() {
        return (
            <Router>
                <header className="pos-f-t">
                    <nav className={this.state.classNavBar + " navbar navbar-expand-md navbar-dark bg-dark"}>
                        <button onClick={() => this.handleClickOpenToggle()} className="navbar-toggler" type="button"
                            data-toggle="collapse" data-target="#navbarToggleExternalContent"
                            aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="col-mb-2 navbar-collapse collapse navbar-toggler d-md-block" id="navbarCollapse">
                            <ul className="navbar-nav mr-auto" >
                                <li className="nav-item">
                                    <Link onClick={() => this.handleChangeClass(false)} className="nav-link" to="/posts">{process.env.REACT_APP_LES_NOUVELLES}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link onClick={() => this.handleChangeClass(false)} className="nav-link" to="/post/derniere">{process.env.REACT_APP_DERNIERE_NOUVELLE}</Link>
                                </li>
                            </ul>
                        </div>

                        <Link
                            onClick={() => this.handleChangeClass(true)}
                            className="logo-lettre-mot-header navbar-brand"
                            to="/">
                            <div className="logo-lettre-header"></div>

                            <div className="mot-header">
                                {process.env.REACT_APP_NOM}
                            </div>
                        </Link>
                    </nav>

                    <nav className={this.state.classNavBar + " " + this.state.classPremiereEnTeteToggle} id="navbarToggleExternalContent" onClick={() => this.handleClickCloseToggle()} ref={this.refNavBar} >
                        <ul className="navbar-nav mr-auto navbar-header-petit-ecran" >
                            <li className="nav-item">
                                <Link onClick={() => this.handleChangeClass(false)} className="nav-link" to="/posts">{process.env.REACT_APP_LES_NOUVELLES}</Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={() => this.handleChangeClass(false)} className="nav-link" to="/post/derniere">{process.env.REACT_APP_DERNIERE_NOUVELLE}</Link>
                            </li>
                        </ul>
                    </nav>

                </header>

                <Route path="/" exact component={About} />
                <Route path="/post/:id" component={Post} />
                <Route path="/posts" component={Posts} />

            </Router>
        );
    }

}

export default NavBarStrapNative