// get news

const fetch = require('node-fetch');

let default_news_url = "https://saurav.tech/NewsAPI/top-headlines/category/general/in.json"


function fetchNews(){
  return fetch(default_news_url)
    .then(res => {
      return res.json()
    })
    .then(data => {
      return data
    })
}

module.exports = { fetchNews : fetchNews };