import React from 'react';
import PropTypes from 'prop-types';
import * as style from './card.scss';


const propTypes = {
  imgSrc: PropTypes.string,
  heading: PropTypes.string,
  dataObj: PropTypes.object
};

const defaultProps = {
  imgSrc: '',
  heading: '',
  dataObj: {}
};

const Card = ({ imgSrc, heading, dataObj }) => {
  return (
    <article className={`${style.card} flex column`}>
      <div className={style.cardHeader}>
        {imgSrc && (<img src={imgSrc} alt={heading} />)}
        <div className={`${style.cardTitle} ${!imgSrc ? style.cardBlankTitle : ''}`}>
          <h2>{heading}</h2>
        </div>
      </div>
      <div className={style.cardInfo}>
        {Object.entries(dataObj).map(([key, value]) => (
          <div
            className={`${style.characterText} flex center`}
            key={key}
          >
            <span>{key}</span>
            <span>{value}</span>
          </div>
        ))}
      </div>
    </article>
  );
};


Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
export default Card;
