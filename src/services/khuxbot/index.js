exports.findMedals = (options) => {
  const proxyurl = "https://cors-anywhere.herokuapp.com/"
  const url = 'http://www.khuxbot.com/api/v1/medal?q=data&filter=' + JSON.stringify(options)
  return fetch(proxyurl + url)
    .then(response => response.json())

}
