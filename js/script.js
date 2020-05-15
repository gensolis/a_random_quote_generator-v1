/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

let quotes = [
  {quote: "Be yourself; everyone else is already taken.", source: "Oscar Wilde", year: 1859, tags: "Humor"  },
  {quote: "Be the change that you wish to see in the world.", source: "Mahatma Gandhi", citation: "The Love Project", year: 1975 },
  {quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.", source: "Martin Luther King Jr", citation: "'Loving Your Enemies' Sermon, Christmas Day", year: 1957 },
  {quote: "I have not failed. I've just found 10,000 ways that won't work.", source: "Thomas A. Edison", year: 1901, tags: "Inspirational" },
  {quote: "If you get tired, learn to rest, not to quit.", source: "Banksy"},
];


/*** 
 * `colors` array 
***/

let colors = [
  '#FF5733',
  '#4E33FF',
  '#33FFBD',
  '#F233FF',
  '#008080',
  '#FF33AD',
  '#217F27',
  '#21227F',
];




/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  //Find Random Number
  let randomIndex = Math.floor((Math.random() * quotes.length));
  //console.log(quotes[randomIndex]);
  return quotes[randomIndex];
  }
  

/***
 * `getRandomColor` function
***/

function getRandomColor() {
  //Find Random Color
  let randomIndex = Math.floor((Math.random() * colors.length));
  //console.log(colors[randomIndex]);
  return colors[randomIndex];
  }


/***
 * `printQuote` function
***/

function printQuote() {
  let randomQuote = getRandomQuote()
  let randomColor = getRandomColor()
  //console.log(randomQuote);
  //console.log(randomColor);

  let html = '';

  //displays the quote from index.html
  html += '<p class="quote">' + randomQuote.quote + '</p>'; 
  //displays all object properties if every object is filled in.
  html += '<p class="source">' + randomQuote.source;
  if ("citation" in randomQuote) {
    html += '<span class="citation">' + randomQuote.citation + '</span>';
  }
  if ("year" in randomQuote) {
    html += '<span class="year">' + randomQuote.year + '</span>'; 
  }
  if ("tags" in randomQuote) {
    html += '<span class="tags">' + randomQuote.tags + '</span>' + '</p>'; 
  }

  //selects the body from the css file to be able to add random colors.
  let colorBody = document.querySelector("body")
  colorBody.style.backgroundColor = randomColor
  ;

  //displays html content
  document.getElementById("quote-box").innerHTML = html;

  // clears the previous timer and starts a new one
  clearInterval(timer);
  timer = setInterval(printQuote, 10000);
}


//refreshes the page every 10 seconds.
let timer = setInterval(printQuote, 10000);




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);