// Write your code here.
import {Component} from 'react'
import './index.css'

const plusUrl =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusUrl =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
//  alt should be      plus
//  alt should be      minus

class FaqItem extends Component {
  state = {isShowing: false}

  onToggleAnswer = () => {
    this.setState(preState => ({isShowing: !preState.isShowing}))
  }

  render() {
    const {isShowing} = this.state
    const {details} = this.props
    const {questionText, answerText} = details
    return (
      <li className="item_container">
        <div className="qAndButton_container">
          <h1 className="question">{questionText}</h1>
          <button
            onClick={this.onToggleAnswer}
            type="button"
            className="button"
          >
            <img
              className="icon_plusAndMinus"
              src={isShowing ? minusUrl : plusUrl}
              alt={isShowing ? 'minus' : 'plus'}
            />
          </button>
        </div>
        {isShowing && <hr className="hrTag" />}
        {isShowing && <p className="answer">{answerText}</p>}
      </li>
    )
  }
}

export default FaqItem
