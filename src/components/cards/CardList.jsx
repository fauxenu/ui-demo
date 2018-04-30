import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './card-list.less';

const CardList = ({ cards }) => (
  <div className="card-list">
    {cards.map(card => <Card key={card.id} {...card} />)}
  </div>
);

CardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape(Card.propTypes)).isRequired,
};

export default CardList;
