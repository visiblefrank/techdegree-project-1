/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


// create array of objects to be used for quotes, not all quotes will have all 4 properies
let quotes = [
  {
    quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    source: 'Helen Keller',
    citation: 'Hubspot',
    country: 'America'
  },
  {
    quote: "It is during our darkest moments that we must focus to see the light.",
    source: 'Aristotle',
    year: '112 BC',
    citation: 'Aristotle\'s Weally Wize Words',
    country: 'Greece'
  },
  {
    quote: "In the end, it's not the years in your life that count. It's the life in your years.",
    source: 'Abraham Lincoln',
    year: '1863',
    citation: 'Top Hat'
  },
  {
    quote: "Life is never fair, and perhaps it is a good thing for most of us that it is not.",
    source: 'Oscar Wilde',
    year: '1883',
  },
  {
    quote: "Only a life lived for others is a life worthwhile.",
    source: 'Albert Einstein',
    year: '1926',
    citation: 'Its All Relative'
  }
]
// console.log(quotes[0].quote);
// console.log(quotes[0].citation);
// console.log(quotes[0].year);

/***
 * `getRandomQuote` function - 
 * 
***/
function getRandomQuote() {

    //generates a random number between 1 and length of quotes array; 
    let randNum = Math.ceil(Math.random() * quotes.length - 1); 
    //console.log(randNum);

    //fill a variable with random number
    let quoteObj = quotes[randNum]; 
    //console.log(quoteObj);

    // return random number
    return quoteObj; 
}

/***
 * `printQuote` function 
***/
function printQuote(){
    //create variable with output from getRandomQuote function
    let randObj = getRandomQuote(); 
    console.log(randObj);
    console.log(randObj.source, randObj.citation);

    //retrieve id of html element and uses it to fill variable 'quoteBox'
    const quoteBox = document.querySelector('#quote-box'); 
    
    //create variable 'randQuote' and fills with string to be used to display quotes
    let randContent = "<p class=\"quote\">" + randObj.quote + "</p> <p class=\"source\">" + randObj.source; 
    
    //checks if extra properties exist in randObj, if so, they are added to a string & concatenated to main quote string
    if (randObj.citation){
      randContent += "<span class=\"citation\">" + randObj.citation + "</span>";
    }
    if (randObj.year){
      randContent += "<span class=\"year\"/>" + randObj.year + "</span>";
    }
    if (randObj.country){
      randContent += "<span class=\"country\"/> Country: " + randObj.country + "</span>";
    }
    //insert complete quote string into the quote HTML
    quoteBox.innerHTML = randContent + "</p>";
    console.log(randContent);
    changeColor();
}
//set printQuote & autoChange functions to run every 7 seconds
var autoRun;
var autoChange;
function autoPlay() {
    autoRun = setInterval(printQuote, 7000);
    autoChange = setInterval(changeColor, 7000);
}
//generate and return a random number between 1 & 255
function randColor() {
  return Math.floor(Math.random() * 256);
}
//assign random numbers to variables to be used for r, g, b values. Then change body background to concatenated RGB values
function changeColor(){
let r = randColor();
let g = randColor();
let b = randColor();
let bgColor = 'rgb(' + r + "," + g + "," + b + ')';
//console.log(bgColor);
document.body.style.backgroundColor = bgColor;
}

autoPlay();
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
// ***/
// console.log('test');
document.getElementById('load-quote').addEventListener("click", printQuote, false);