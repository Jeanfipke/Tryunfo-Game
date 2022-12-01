import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form id="main-form">
        <label htmlFor="card-name">
          <input type="text" id="card-name" data-testid="name-input" />
        </label>
        <label htmlFor="card-description">
          <textarea
            name="textArea"
            id="card-description"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="first-atribute">
          <input type="number" id="first-atribute" data-testid="attr1-input" />
        </label>
        <label htmlFor="second-atribute">
          <input type="number" id="second-atribute" data-testid="attr2-input" />
        </label>
        <label htmlFor="third-attribute">
          <input type="number" id="third-attribute" data-testid="attr3-input" />
        </label>
        <label htmlFor="image-url">
          <input type="text" id="image-url" data-testid="image-input" />
        </label>
        <label htmlFor="rarity">
          <select name="rarity" id="rarity" data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="is-ST">
          <input
            type="checkbox"
            name="is-ST"
            id="is-ST"
            data-testid="trunfo-input"
          />
          Super Trybe Trunfo
        </label>
        <button
          name="salve-btn"
          id="save-btn"
          data-testid="save-button"
          type="button"
        >
          Salvar
        </button>
      </form>

    );
  }
}

export default Form;
