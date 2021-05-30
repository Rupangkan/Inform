// get Jokes

const fetch = require('node-fetch');

function getJokes() {
  return fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => {
      return res.json()
    })
    .then(data => {
      // return data
      return data.setup + "\n" + data.punchline
    })
}

module.exports = { getJokes : getJokes };