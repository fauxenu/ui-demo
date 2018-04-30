import React from 'react';
import CardList from 'components/cards/CardList';
import data from './data.json';
import './home.less';

const { cards } = data;

export default function Home() {
  return (
    <div id="home">
      <section className="hero">
        <div className="hero__content container">
          <div className="col-6">
            <h1 className="hero__heading">
              Lorem ipsum dolor site amotcon secteuer adipiscinm elsed daeom
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
              euismod tincidunt ut laoreet dolore magna.
            </p>
            <hr />
            <a href="/" className="hero__cta btn">
              <div className="input-group">
                <span>Call to Action</span>
                <div className="input-group__append">
                  <i className="icon icon__arrow" />
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="hero__overlay" />
      </section>
      <section className="home__cards container">
        <CardList cards={cards} />
      </section>
    </div>
  );
}
