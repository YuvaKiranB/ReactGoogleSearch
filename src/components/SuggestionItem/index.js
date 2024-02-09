// Write your code here
import './index.css'

const GetContent = props => {
  const {listItems, clickedArrow} = props
  const {suggestion} = listItems
  const arrowClicked = () => {
    clickedArrow(suggestion)
  }

  return (
    <li className="li">
      <div className="content">
        <p className="p1">{suggestion}</p>
        <img
          className="image3"
          onClick={arrowClicked}
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </div>
    </li>
  )
}

export default GetContent
