import React from 'react';
import PropTypes from 'prop-types';
import './card.less';

const getModifier = (value, base = 'card') => (value ? `${base}--${value}` : '');

const Card = (props) => {
  const classNames = ['card', getModifier(props.size), getModifier(props.background)];
  if (props.background) {
    classNames.push('pattern');
  }

  return (
    <div className={classNames.join(' ').trim()}>
      <div className="card__content">
        <i className={`icon icon__${props.icon}`} />
        <h2 className="card__title">{props.title}</h2>
        {props.summary && <p className="card__summary">{props.summary}</p>}
      </div>
      {props.footer && <footer className="card__footer mono">{props.footer}</footer>}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  footer: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.string,
  background: PropTypes.string,
};

Card.defaultProps = {
  summary: '',
  footer: '',
  size: '',
  icon: 'help',
  background: '',
};

export default Card;
