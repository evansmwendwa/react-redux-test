import React from 'react'
import Result from './result'

class Results extends React.Component {
  constructor(props) {
    super(props)
    this.store = props.store
  }

  render() {
    return (
      <div>
        <Result color="success" dataKey="angular" store={this.store} label="Angular"/>
        <Result color="primary" dataKey="react" store={this.store} label="React" />
        <Result color="danger" dataKey="vuejs" store={this.store} label="VueJs" />
      </div>
    )
  }
}

export default Results