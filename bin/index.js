#! /usr/bin/env node

const inquirer = require('inquirer');
// const fetch = require('node-fetch');
const yargs = require('yargs');
const getJokes = require('../utils/getJokes');
const getQuotes = require('../utils/getQuotes');
const fetchNews = require('../utils/fetchNews');


// let default_news_url = "https://saurav.tech/NewsAPI/top-headlines/category/general/in.json"

function news(news, no){
 for(let i = 0; i<no; i++){
  console.log('\x1b[1mTitle : \x1b[0m' + news["articles"][i].title)
  console.log('\x1b[1mDescription : \x1b[0m' + news["articles"][i].description)
  console.log('\x1b[1mContent : \x1b[0m' + news["articles"][i].content)
  console.log('\x1b[1mRead More : \x1b[0m' + news["articles"][i].url)
  console.log('\x1b[1mPublished At : \x1b[0m' + news["articles"][i].publishedAt)
  console.log('\x1b[1mBy - \x1b[0m' + news["articles"][i].author)
  console.log()
  }
}

inquirer
.prompt([
{
  type : 'list',
  name : 'Choice1',
  message : 'Please select your choices :',
  choices : ['news','jokes','quotes']

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

    // Select your preference of news

    inquirer.prompt([
    {
      type : 'list',
      name : 'Choice2',
      message : 'Select your preferences :',
      choices : ['top-headlines','sources']
    }
    ])

    // After selecting your preferences 

    .then((answers2) => {
      let newsChoice = answers2.Choice2;
      if(newsChoice === 'top-headlines'){

        // If preference is top-headlines select the category

        inquirer.prompt([
        {
          type : 'list',
          name : 'Choice3',
          message : 'Select the category :',
          choices : [
          'business',
          'entertainment',
          'general',
          'health',
          'science',
          'sports',
          'technology'
          ]
        }   
        ])
        .then((categories) => {
          let cat = categories.Choice3;

          // After selecting the category select the country

          inquirer.prompt([
          { 
            type : 'list',
            name : 'Choice4',
            message : 'Select your country',
            choices : [
            'in',
            'au',
            'us',
            'ru',
            'fr',
            'gb',
            ] 
          }
          ])


          .then((output) => {
            let cou = output.Choice4;
            let url = `https://saurav.tech/NewsAPI/top-headlines/category/${cat}/${cou}.json`;

            inquirer.prompt([
              {
                type : 'list',
                name : 'numbers',
                message : 'Select the number of News you want :',
                choices : [1,5,10,20,30,50]
              }
            ])
            .then(output => {
              let no = output.numbers
              fetchNews.fetchNews(url).then(result => news(result,no));
            })
          })
        })
      }else{

        // Select the news source

        inquirer.prompt([
          {
            type : 'list',
            name : 'newsSource',
            message : 'Select the News Source :',
            choices : [
              'BBC-News',
              'CNN',
              'Fox-News',
              // 'Google-News'
            ]
          }
        ])
        .then((output) => {

          let source = output.newsSource.toLowerCase();
          let url = `https://saurav.tech/NewsAPI/everything/${source}.json`;

            inquirer.prompt([
              {
                type : 'list',
                name : 'numbers',
                message : 'Select the number of News you want :',
                choices : [1,5,10,20,30,50]
              }
            ])
            .then(output => {
              let no = output.numbers
              fetchNews.fetchNews(url).then(result => news(result,no));
            })

        })

      }
    })
  }

})
