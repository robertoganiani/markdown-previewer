import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked'
import './index.css';
import registerServiceWorker from './registerServiceWorker';


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      inputValue: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Robert Oganiani](https://freecodecamp.com/robertoganiani)*'
    }

    this.handleInput = this.handleInput.bind(this)
    this.renderOutput = this.renderOutput.bind(this)
  }

  handleInput(e) {
    this.setState({ inputValue: e.target.value })
  }

  renderOutput() {
    return {__html: marked(this.state.inputValue)}
  }

  render() {
    return (
      <div className='wrapper'>
        <div className='wrapper__left'>
          <p>
            <textarea value={this.state.inputValue} onChange={this.handleInput} rows="45" cols="55" name="text"></textarea>
          </p>
        </div>
        <div className='wrapper__right'>
          <div dangerouslySetInnerHTML={this.renderOutput()}></div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
