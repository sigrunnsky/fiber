import React, {Component, PropTypes} from 'react'

import _ from 'lodash'

// React component for visualizing fiber locations on a map
export default class FiberCostTable extends Component {

  render(){
    const { fibers } = this.props

    // TODO: implement the table header
    const rowHeaders = <div>
      <div className="grey row white-text">
        <div className="col s2"> id </div>
        <div className="col s5"> Fiber Cost ($) </div>
        <div className="col s5"> Fiber Distance (m) </div>
      </div>
    </div>

    const rowElements = _.map(fibers, (fiber, i) => {

      // TODO: add logic here to highlight the selected fibers (rows)
      // hint: check the flag: fiber.isSelected
      // hint: (1) add "backgroundColor" in style={}, or
      // (2) add a color word, like className="row yellow"

      var className;
      if (fiber.isSelected ==true){
        className = "row yellow"
      } else {
        className = "row"
      }


      // const className = 'row'//!fiber.isSelected ? 'row' : 'row yellow'

      return <div key={i} className={className} style={{marginBottom:0}}>
        <div className="col s2"> {i} </div>
        <div className="col s5"> {fiber.cost.toFixed(0)} </div>
        <div className="col s5"> {fiber.distance} </div>
      </div>

    })

    return <div>
      { rowHeaders }
      { rowElements }
    </div>

  }

}
