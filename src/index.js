import React from 'react'
import ReactDOM from 'react-dom';
import { findMedals } from './services/khuxbot/index.js'
import MedalList from './components/MedalList.js'

findMedals({tier: 6})
  .then(result => {
    console.log(result)
    ReactDOM.render(
      <MedalList medals={result}/>,
      document.getElementById('root')
    )
  })
 
