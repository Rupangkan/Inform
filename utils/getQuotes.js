// get quotes

const fetch = require('node-fetch');

function getQuotes(){
  return fetch("https://zenquotes.io/api/random")
    .then(res => {
      return res.json()
    })
    .then(data => {
      return data[0]["q"] + " -" + data[0]["a"]
      // return data
    })
}

module.exports = { getQuotes : getQuotes };