import React from 'react';
import Form from './components/Form';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: false,
      onInputChange: '',
      onSaveButtonClick: '',
    };
  }

  handleChange = ({ target: { name, value, checked, type } }) => {
    const value2 = type === 'checkbox' ? value : checked;
    this.setState({
      [name]: value2,
    });
  };

  render() {
    return (
      <div id="main">
        <h1>Tryunfo</h1>
        <Form
          cardName={ this.handleChange }
          cardDescription={ this.handleChange }
          cardAttr1={ this.handleChange }
          cardAttr2={ this.handleChange }
          cardAttr3={ this.handleChange }
          cardImage={ this.handleChange }
          cardRare={ this.handleChange }
          cardTrunfo={ this.handleChange }
          isSaveButtonDisabled={ this.handleChange }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.handleChange }
        />
      </div>
    );
  }
}

export default App;
// initial commit
