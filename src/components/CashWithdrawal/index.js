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
    // console.log(denominationsList)

    return (
      <div className="container">
        <div className="contact-container">
          <div className="name-container">
            <h1 className="first-letter">S</h1>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="balance-label">Your Balance</p>

            <p className="count">{count}</p>
          </div>
          <p className="para">In Rupees</p>
          <p className="count">Withdraw</p>
          <p className="balance-label">CHOOSE SUM (IN RUPEES)</p>
          <un className="denominationList">
            {denominationsList.map(eachItem => (
              <DenominationItem
                key={eachItem.id}
                denominationItem={eachItem}
                onChangeCount={this.onChangeCount}
              />
            ))}
          </un>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal