import React from 'react';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import Home from 'pages/home/Home';

export default function App() {
  return (
    <div className="app">
      <Header />
      <main id="content">
        <Home />
      </main>
      <Footer />
    </div>
  );
}
