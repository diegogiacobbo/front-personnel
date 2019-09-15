import React from 'react';
import './App.scss';
import NavBarStrapNative from './components/testesreact/bootstrapnative/navbarToggle'

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
      <div className="container">
        <span className="text-muted">Coloque o conteúdo do rodapé.</span>
      </div>
    </footer>
  );
}