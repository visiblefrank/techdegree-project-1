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
    tag: 'wisdom'
  },
  {
    quote: "It is during our darkest moments that we must focus to see the light.",
    source: 'Aristotle',
    year: '112 BC',
    citation: 'Aristotle\'s Weally Wize Words'
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
    var randNum = Math.ceil(Math.random() * quotes.length - 1); 
    //console.log(randNum);

    //fill a variable with random number
    var quoteObj = quotes[randNum]; 
    //console.log(quoteObj);

    // return random number
    return quoteObj; 
}

/***
 * `printQuote` function 
***/
function printQuote(){
    //create variable with output from getRandomQuote function
    var randObj = getRandomQuote(); 
    console.log(randObj);
    console.log(randObj.source, randObj.citation);

    //retrieve id of html element and uses it to fill variable 'quoteBox'
    var quoteBox = document.querySelector('#quote-box'); 
    
    //create variable 'randQuote' and fills with string to be used to display quotes
    var randContent = "<p class=\"quote\">" + randObj.quote + "</p> <p class=\"source\">" + randObj.source; 
    
    //checks if extra properties exist in randObj, if so, they are added to a string & concatenated to main quote string
    if (randObj.citation){
      randContent += "<span class=\"citation\">" + randObj.citation + "</span>";
    }
    if (randObj.year){
      randContent += "<span class=\"year\"/>" + randObj.year + "</span>";
    }
    if (randObj.tag){
      randContent += "<span class=\"tag\"/> Tags: " + randObj.tag + "</span>";
    }
    //insert complete quote string into the quote HTML
    quoteBox.innerHTML = randContent + "</p>";
    console.log(randContent);
}
//set printQuote function to run every second
var autoRun
function autoFunc() {
    autoRun = setInterval(printQuote, 1000);
}
//stop printQuote function running automatically
function stopAuto() {
    clearInterval(autoRun);
}
//buttons to start/stop auto run function
document.getElementById('start').addEventListener("click", autoFunc, false);
document.getElementById('stop').addEventListener("click", stopAuto, false);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
// ***/
// console.log('test');
document.getElementById('load-quote').addEventListener("click", printQuote, false);