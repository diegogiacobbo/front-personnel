import React, { } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Post from '../posts/post';
import Posts from '../posts/posts';
import About from '../about/about';
import './navbarToogle.scss'
import 'bootstrap/dist/js/bootstrap.bundle.js';

/**
 * #TODO: Utiliser les components react pour le Bootstrap navbar
 */
class NavBarStrapNative extends React.Component {

    render() {
        return (
            <Router>
                <header className="pos-f-t">
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <Link className="navbar-brand sujet-blog" to="/">Diego Giacobo</Link>
                        <button className="navbar-toggler" type="button"
                            data-toggle="collapse" data-target="#navbarToggleExternalContent"
                            aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse collapse navbar-toggler d-md-block" id="navbarCollapse">
                            <ul className="navbar-nav mr-auto nav-item-site" >
                                <li className="nav-item">
                                    <Link className="nav-link" to="/posts">{process.env.REACT_APP_LES_NOUVELLES}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/post/derniere">{process.env.REACT_APP_DERNIERE_NOUVELLE}</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <nav className="navbar navbar-collapse collapse navbar-dark bg-dark d-md-none p-3" id="navbarToggleExternalContent">
                        <ul className="navbar-nav mr-auto" >
                            <li className="nav-item">
                                <Link className="nav-link" to="/posts">{process.env.REACT_APP_LES_NOUVELLES}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/post/derniere">{process.env.REACT_APP_DERNIERE_NOUVELLE}</Link>
                            </li>
                        </ul>
                    </nav>

                </header>

                <Route path="/" exact component={About} />
                <Route path="/post/:id" component={Post} />
                <Route path="/posts"  component={Posts} />

            </Router >
        );
    }

}

export default NavBarStrapNative