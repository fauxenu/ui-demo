import React from 'react';
import PropTypes from 'prop-types';
import './hero.less';

const Hero = props => (
  <div className="hero">
    <div className="hero__content container">
      <div className="col-6">
        <h1 className="hero__heading">{props.title}</h1>
        <p>{props.summary}</p>
        <hr />
        <a href={props.ctaLink} className="hero__cta btn">
          <div className="input-group">
            <span>{props.cta}</span>
            <div className="input-group__append">
              <i className={`icon icon__${props.ctaIcon}`} />
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  cta: PropTypes.string.isRequired,
  ctaLink: PropTypes.string.isRequired,
  ctaIcon: PropTypes.string,
};

Hero.defaultProps = {
  ctaIcon: 'arrow',
};

export default Hero;
