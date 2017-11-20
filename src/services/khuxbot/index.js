const R = require('ramda')


const format_medal_information = (api_medal_info) => {
  return {
    name: api_medal_info.name,
    image_link: "http://www.khuxbot.com" + api_medal_info.image_link,
    id: api_medal_info.id
  }
}
const format = R.pipe(
  R.prop('medal'), 
  R.values,
  R.map(format_medal_information, R.__)
)

exports.findMedals = (options) => {
  const proxyurl = "https://cors-anywhere.herokuapp.com/"
  const url = 'http://www.khuxbot.com/api/v1/medal?q=data&filter=' + JSON.stringify(options)
  return fetch(proxyurl + url)
    .then(response => response.json())
    .then(format)
}
