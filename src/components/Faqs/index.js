// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="page_container">
        <div className="content_container">
          <h1 className="heading">FAQs</h1>
          <ul className="ul_container">
            {faqsList.map(eachFaq => (
              <FaqItem key={eachFaq.id} details={eachFaq} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
