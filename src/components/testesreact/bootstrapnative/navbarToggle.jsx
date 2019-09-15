import React, { } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Post from '../../posts/post';
import Posts from '../../posts/posts';
import logo from './../../../logo.svg';
import './navbarToogle.scss'
import 'bootstrap/dist/js/bootstrap.bundle.js';

class NavBarStrapNative extends React.Component {

    render() {

        return (
            <Router>
                <header className="pos-f-t">
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <Link className="navbar-brand" to="/">D. Giacobbo</Link>
                        <button className="navbar-toggler" type="button"
                            data-toggle="collapse" data-target="#navbarToggleExternalContent"
                            aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse collapse navbar-toggler d-md-block" id="navbarCollapse">
                            <ul className="navbar-nav mr-auto" >
                                <li className="nav-item">
                                    <Link className="nav-link" to="/posts">Posts</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/post">First Post</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <nav className="navbar navbar-collapse collapse navbar-dark bg-dark d-md-none p-3" id="navbarToggleExternalContent">
                        <ul className="navbar-nav mr-auto" >
                            <li className="nav-item">
                                <Link className="nav-link" to="/posts">Posts</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/post">First Post</Link>
                            </li>
                        </ul>
                    </nav>

                </header>

                <Route exact path="/" component={Home} />
                <Route path="/post" component={Post} />
                <Route path="/posts" component={Posts} />

            </Router >
        );
    }

}

export default NavBarStrapNative

function Home() {
    return <div className="App">
        <div className="App">
        </div>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </header>
    </div>
}