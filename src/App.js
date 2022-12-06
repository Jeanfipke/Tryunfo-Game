import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      deck: [],
    };
  }

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      deck,
    } = this.state;
    const card = { cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo };
    deck.push(card);
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    });
    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }
  };

  checkValues = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const minNum = 0;
    const maxNum = 90;
    const maxSum = 210;

    if (
      cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0
      && Number(cardAttr1) >= minNum
      && Number(cardAttr1) <= maxNum
      && Number(cardAttr2) >= minNum
      && Number(cardAttr2) <= maxNum
      && Number(cardAttr3) >= minNum
      && Number(cardAttr3) <= maxNum
      && (Number(cardAttr1)
      + Number(cardAttr2)
      + Number(cardAttr3))
      <= maxSum
    ) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  onInputChange = ({ target: { name, value, checked, type } }) => {
    const value2 = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: value2,
    }, () => this.checkValues());
  };

  render() {
    const {
      cardName,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardDescription,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    return (
      <div className="main">
        <h1>Tryunfo</h1>
        <section className="wrap">
          <Form
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
            checkValues={ this.checkValues }
            { ... this.state }
          />
          { console.log() }
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </section>
      </div>
    );
  }
}

export default App;
