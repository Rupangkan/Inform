#! /usr/bin/env node

const inquirer = require('inquirer');
// const fetch = require('node-fetch');
const yargs = require('yargs');
const getJokes = require('../utils/getJokes');
const getQuotes = require('../utils/getQuotes');
const fetchNews = require('../utils/fetchNews');


let default_news_url = "https://saurav.tech/NewsAPI/top-headlines/category/general/in.json"


inquirer
  .prompt([
    {
      type : 'list',
      name : 'Choice1',
      message : 'Please select your choices :',
      choices : ['quotes','jokes','news']
      // if user selects news, there should be another prompt to select the categories, country and no. of news

    }
  ])
  .then((answers) => {
    let result = answers.Choice1;
    if(result === 'quotes'){
      getQuotes.getQuotes().then(quote => console.log(quote));
    }else if(result === 'jokes'){
      getJokes.getJokes().then(jokes => console.log(jokes));
    }else{
      fetchNews.fetchNews().then(news => {
        // make the no. of news dynamic from the args
        // make the headings bold and catchy
        for(let i = 0; i<5; i++){
          console.log('\x1b[1mTitle : \x1b[0m' + news["articles"][i].title)
          console.log('\x1b[1mDescription : \x1b[0m' + news["articles"][i].description)
          console.log('\x1b[1mContent : \x1b[0m' + news["articles"][i].content)
          console.log('\x1b[1mRead More : \x1b[0m' + news["articles"][i].url)
          console.log('\x1b[1mPublished At : \x1b[0m' + news["articles"][i].publishedAt)
          console.log('\x1b[1mBy - \x1b[0m' + news["articles"][i].author)
          console.log()
        }
      })

    }
    
  })
