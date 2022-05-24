import './index.css'

const SuggestionItem = props => {
  const {suggestion} = props

  return (
    <li className="suggestion-item-container">
      <p className="suggestion-item-description">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-icon"
      />
    </li>
  )
}

export default SuggestionItem
