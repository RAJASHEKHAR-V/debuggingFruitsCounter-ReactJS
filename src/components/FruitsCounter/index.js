import {Component} from 'react'

import './index.css'

// Bugs identified are as follows

// 1. state need assign initial values bananasCount and mangoesCount line-15
// 2. normal functions are used instead of arrow function for events line-17,21 two bugs
// 3. class context is not referred instead used just state need to use "this" line-27
// 4. className is used instead of classNameName line-29 to 62
// 5. banana is used instead of mango as alt for mango image line-40
// 6.functions are invoked to the button elements  line-43 & 60
// 7. onclick is used instead of onClick to the button elements line-43 & 60

class FruitsCounter extends Component {
  state = {mangoesCount: 4, bananasCount: 5}

  onClickEatBanana = () => {
    this.setState(prevState => ({bananasCount: prevState.bananasCount + 1}))
  }

  onClickEatMango = () => {
    this.setState(prevState => ({mangoesCount: prevState.mangoesCount + 1}))
  }

  render() {
    const {mangoesCount, bananasCount} = this.state

    return (
      <div className="app-container">
        <div className="fruits-counter">
          <h1 className="count-text">
            Bob ate <span className="count">{mangoesCount}</span> mangoes
            <span className="count"> {bananasCount}</span> bananas
          </h1>
          <div className="counters-control-container">
            <div className="counter-control">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="fruit-image"
              />
              <div className="button-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.onClickEatMango}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="counter-control">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="fruit-image"
              />
              <div className="button-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.onClickEatBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
