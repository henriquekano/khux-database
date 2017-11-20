import React, { Component } from 'react'
import Medal from './Medal.js'
const R = require('ramda')

class MedalList extends Component {
  render() {
    const buildMedal = (value, key) => {
      return <Medal name={value.name} image_link={value.image_link}/> 
    }
    return R.map(buildMedal, this.props.medals)
  }
}

export default MedalList
