import React, { Component } from 'react'
import Medal from './Medal.js'
import { Flex, Box } from 'reflexbox'
const R = require('ramda')

class MedalList extends Component {
  
  buildMedal(value, key) {
    return (
      <Box w={1/3}>
        <Medal {...value}/>
      </Box>
    )
  }

  buildMedalRow(medalGroup) {
    return (
      <Flex align='center'>
        {medalGroup}
      </Flex>
    )
  }

  groupByThree = R.pipe(
    R.splitEvery(3, R.__),
    R.map(this.buildMedalRow, R.__)
  )

  buildMedalList = R.pipe(
    R.map(this.buildMedal, R.__),
    this.groupByThree
  )

  render() {
    return this.buildMedalList(this.props.medals)
  }
}

export default MedalList
