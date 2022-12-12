// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationItem, onChangeCount} = props
  const {value} = denominationItem
  const onSubtractCount = () => {
    onChangeCount(value)
  }
  return (
    <li className="list-styling">
      <button className="button" type="button" onClick={onSubtractCount}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
