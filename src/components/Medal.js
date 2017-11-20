import React from 'react' 
import { Component } from 'react'

class Medal extends Component {
  render() {
    return( 
      <div key={this.props.id}>
        <img alt={this.props.name} src={this.props.image_link}></img>
        <p>{this.props.name}</p>
      </div>
    )
  }
}

export default Medal
