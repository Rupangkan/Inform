[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- ABOUT THE PROJECT -->
## About The Project

Inform is a command line interface npm package which gets you the latest news from different sources and categories. I added a small touch where you can also get random quotes and jokes. 

### Built With

Inform is built with NodeJs with the help of 3 different free APIs and npm packages listed below : 
* [Inquirer.Js](https://github.com/SBoudrias/Inquirer.js/)
* [NewsAPI](https://github.com/SauravKanchan/NewsAPI)
* [JokesAPI](https://github.com/15Dkatz/official_joke_api)
* [QuotesAPI](https://zenquotes.io/)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/rupangkan/inform.git
   ```
2. cd into the repo

3. Install the NPM package globally
   ```sh
   npm install -g
   ```
   For Linux :
   ```sh
   sudo npm install -g
   ```


<!-- USAGE EXAMPLES -->
## Usage

Inform is only an interactive command line inteface (for now). It will react to users choices. To run it type : 
  ```sh
   inform
   ```
Select your choices.

1. The news section (which is the main part) offers news for different categories, countries and sources :
## Available sources
| Source  | id |
| ------------- | ------------- |
| BBC News  | bbc-news  |
| CNN | cnn  |
| Fox News | fox-news  |
## Available Countries
| Country  | 2-letter ISO 3166-1 code |
| ------------- | ------------- |
| :india:	India  | in  |
|  :us:	USA | us  |
|  :australia:	Australia | au  |
|  :ru:	Russia | ru  |
|  :fr:	France | fr  |
|  :gb:	United Kingdom | gb  |
## Available categories
- business
- entertainment
- general
- health
- science
- sports
- technology

2. The Joke and the Quote section provides a random Joke and Quote (for now).
<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

[Rupangkan](linkedin.com/in/rupangkan-kalita-a256261a3) - every1isnotrupangkan@gmail.com




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/rupangkan/inform.svg?style=for-the-badge
[contributors-url]: https://github.com/Rupangkan/Inform/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/rupangkan/inform.svg?style=for-the-badge
[forks-url]: https://github.com/rupangkan/inform/network/members
[stars-shield]: https://img.shields.io/github/stars/rupangkan/inform.svg?style=for-the-badge
[stars-url]: https://github.com/rupangkan/inform/stargazers
[issues-shield]: https://img.shields.io/github/issues/rupangkan/inform.svg?style=for-the-badge
[issues-url]: https://github.com/rupangkan/inform/issues
[license-shield]: https://img.shields.io/github/license/rupangkan/inform.svg?style=for-the-badge
[license-url]: https://github.com/rupangkan/inform/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/rupangkan-kalita-a256261a3
