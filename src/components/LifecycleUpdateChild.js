import React, { Component } from 'react'

class LifecycleUpdateChild extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: 'Vishwas'
    }
    console.log('LifecycleUpdateChild constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleUpdateChild getDerivedStateFromProps')
    return null
  }

  componentDidMount() {
    console.log('LifecycleUpdateChild componentDidMount')
  }

  shouldComponentUpdate() {
    console.log('LifecycleUpdateChild shouldComponentUpdate')
		return true
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifecycleUpdateChild getSnapshotBeforeUpdate')
    return null
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('LifecycleUpdateChild componentDidUpdate')
	}

  render() {
    console.log('LifecycleUpdateChild render')
    return (
      <div>
        LifecycleUpdateChild
      </div>
    )
  }
}

export default LifecycleUpdateChild