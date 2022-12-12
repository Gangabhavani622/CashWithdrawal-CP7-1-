// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {count: 2000}

  onChangeCount = value => {

    this.setState(prevState => ({count: prevState.count - value}))
 
  }

  render() {
    const {count} = this.state
    const {denominationsList} = this.props
    const name="Sarah Williams"
    const initialLetter=name.slice(0,1)
    // console.log(denominationsList)

    return (
      <div className="container">
        <div className="contact-container">
          <div className="name-container">
            <p className="first-letter">{initialLetter}</p>
            <h1 className="name">{name}</h1>
          </div>
          <div className="balance-container">
            <p className="balance-label">Your Balance</p>

            <p className="count">{count} <br/> 
              <span className="para">In Rupees</span>
          </p>
          </div>
          <p className="count">Withdraw</p>
          <p className="balance-label">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominationList">
            {denominationsList.map(eachItem => (
              <DenominationItem
                key={eachItem.id}
                denominationItem={eachItem}
                onChangeCount={this.onChangeCount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
