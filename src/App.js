import React from 'react';
import './App.scss';
import NavBarStrapNative from './components/navbar-bootstrap-native/navbarToggle'

function App() {

  return (
    <div>
      <Header />
      <br />
      <Footer />
    </div>
  );
}

export default App;

function Header() {
  return (
    <NavBarStrapNative></NavBarStrapNative>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="blog-footer">
        <p>Modelo de blog criado para o <a href="https://getbootstrap.com/">Bootstrap</a> por <a href="https://www.instagram.com/giacobbod"> @giacobbod</a> .</p>
        <a target="_blank" href="https://linkedin.com/in/diego-giacobo-b2692a19/">
          <div className="linkedin"></div>
        </a>
        <p><a href="#">De volta ao topo</a></p>
      </div>
    </footer>
  );
}