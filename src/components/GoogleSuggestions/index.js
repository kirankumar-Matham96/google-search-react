import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  //   state = {suggestionList: ''}

  render() {
    // const {suggestionList} = this.state
    const {suggestionsList} = this.props

    // this.setState({suggestionList: suggestionsList})

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-image"
        />
        <div className="card-container">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              value=""
              className="search-input"
              placeholder="Search Google"
            />
          </div>
          <ul className="search-suggestion-list-container">
            {suggestionsList.map(eachSuggestion => (
              <SuggestionItem
                suggestion={eachSuggestion.suggestion}
                key={eachSuggestion.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
