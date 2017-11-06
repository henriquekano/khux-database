import ReactDOM from 'react-dom';
import { findMedals } from './services/khuxbot/index.js'

findMedals({tier: 6})
  .then(result => {
    ReactDOM.render(
      JSON.stringify(result),
      document.getElementById('root')
    )
  })
 
