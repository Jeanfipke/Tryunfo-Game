import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Card.css';
import trunfo from '../trunfo.png';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardTrunfo,
    } = this.props;
    return (
      <section className="card">
        <p className="card-name" data-testid="name-card">{cardName}</p>
        <img
          className="image"
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />
        {
          cardTrunfo
            ? (
              <img
                src={ trunfo }
                className="card-trunfo"
                data-testid="trunfo-card"
                alt="trunfo icon"
              />
            )
            : ''
        }
        <p
          className="description"
          data-testid="description-card"
        >
          {cardDescription}
        </p>
        <div className="info-div">
          <div className="card-info">
            <p data-testid="attr1-card">
              Attr1 ...................................
              {' '}
            </p>
            <span className="attr">{cardAttr1}</span>
          </div>
          <div className="card-info">
            <p data-testid="attr2-card">
              Attr2 ...................................
              {' '}
            </p>
            <span className="attr">{cardAttr2}</span>
          </div>
          <div className="card-info">
            <p data-testid="attr3-card">
              Attr3 ...................................
              {' '}
            </p>
            <span className="attr">{cardAttr3}</span>
          </div>
          {/* <p className="card-info" data-testid="rare-card">{cardRare}</p> */}
        </div>
      </section>
    );
  }
}

Card.propTypes = {
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool,
};

Card.defaultProps = {
  cardTrunfo: false,
};
export default Card;
