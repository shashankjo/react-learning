import React, { Component } from 'react'
import LifecycleUpdateChild from './LifecycleUpdateChild'

class LifecycleUpdate extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: 'Vishwas'
		}
		console.log('LifecycleUpdate constructor')
	}

	static getDerivedStateFromProps(props, state) {
		console.log('LifecycleUpdate getDerivedStateFromProps')
		return null
	}

	componentDidMount() {
		console.log('LifecycleUpdate componentDidMount')
	}

	shouldComponentUpdate() {
		console.log('LifecycleUpdate shouldComponentUpdate')
		return true
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('LifecycleUpdate getSnapshotBeforeUpdate')
    return null
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('LifecycleUpdate componentDidUpdate')
	}

	changeState = () => {
		this.setState({
			name: 'Codevolution'
		})
	}

	render() {
		console.log('LifecycleUpdate render')
		return (
			<div>
				<button onClick={this.changeState}>Change state</button>
				LifecycleUpdate <LifecycleUpdateChild />
			</div>
		)
	}
}

export default LifecycleUpdate