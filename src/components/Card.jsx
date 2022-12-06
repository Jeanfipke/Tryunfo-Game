import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Card.css';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <section className="card">
        <p className="card-info" data-testid="name-card">{cardName}</p>
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />
        <p className="card-info" data-testid="description-card">{cardDescription}</p>
        <p className="card-info" data-testid="attr1-card">{cardAttr1}</p>
        <p className="card-info" data-testid="attr2-card">{cardAttr2}</p>
        <p className="card-info" data-testid="attr3-card">{cardAttr3}</p>
        <p className="card-info" data-testid="rare-card">{cardRare}</p>
        {cardTrunfo
          ? <p className="card-info" data-testid="trunfo-card">Super Trunfo</p>
          : ''}
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
