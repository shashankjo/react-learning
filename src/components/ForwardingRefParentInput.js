import React, { Component } from 'react'
import ForwardingRefInput from './ForwardingRefInput'

class ForwardingRefParentInput extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }

  clickHandler = () => {
    this.inputRef.current.focus()
  }

	render() {
		return (
			<div>
        <ForwardingRefInput ref={this.inputRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
			</div>
		)
	}
}

export default ForwardingRefParentInput