import React from 'react';
import Hero from 'components/hero/Hero';
import CardList from 'components/cards/CardList';
import data from './data.json';
import './home.less';

const { cards, hero } = data;

export default function Home() {
  return (
    <div id="home">
      <section className="home__hero">
        <Hero {...hero} />
      </section>
      <section className="home__cards container">
        <CardList cards={cards} />
      </section>
    </div>
  );
}
