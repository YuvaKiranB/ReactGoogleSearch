// Write your code here
import {Component} from 'react'

import GetContent from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {input: ''}

  updateState = event => {
    const typedText = event.target.value
    this.setState({input: typedText})
    console.log(typedText)
  }

  clickedArrow = suggestion => {
    this.setState({input: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {input} = this.state
    const filteredList = suggestionsList.filter(eachItem => {
      const stateLower = input.toLowerCase()
      const listLower = eachItem.suggestion.toLowerCase()
      return listLower.includes(stateLower)
    })
    return (
      <div className="main">
        <img
          className="image1"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <div className="card">
          <div className="searchElement">
            <img
              alt="search icon"
              className="image2"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            />
            <input
              placeholder="Search Google"
              className="input"
              value={input}
              type="search"
              onChange={this.updateState}
            />
          </div>
          <ul className="ul">
            {filteredList.map(eachItem => (
              <GetContent
                listItems={eachItem}
                key={eachItem.id}
                clickedArrow={this.clickedArrow}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
