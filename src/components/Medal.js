import React from 'react' 
import { Component } from 'react'
import { Flex } from 'reflexbox'
import './Medal.css'

class Medal extends Component {
  
  render() {
    return( 
      <Flex align='center' class='medal' key={this.props.id}>
        <h1>{this.props.name}</h1>
        <img className='medal-img' alt={this.props.name} src={this.props.image_link}></img>
        <ul>
          <li class='strength'>{this.props.strength}</li>
          <li class='defense'>{this.props.defense}</li>
          <li class='description'>{this.props.description}</li>
        </ul>
      </Flex>
    )
  }
}

export default Medal
