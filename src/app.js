var UI = require('ui');
var ajax = require('ajax');

// Create a Card with title and subtitle
var card = new UI.Card({
  title: 'Today\'s Gospel',
  subtitle: 'Not working',
  body: 'Failed to parse reading.',
  scrollable: true
});

// Display the Card
card.show();

// Get the date and format it or use the date components
var todaysDate = new Date();
var month = todaysDate.getMonth() + 1;
var day = todaysDate.getDate();
var year = todaysDate.getFullYear();

//Construct URL
var URL = 'http://oremus.candidly.us/test2.js';

//Make the request
ajax(
  { 
    url: URL,
    type: 'json'
  },
  function(data) {
    console.log('Success');
    
    var verse = data.number;
    var text = data.number;
    
    //Show to user
    card.title(verse);
    card.subtitle(month+'/'+day+'/'+year);
    card.body(text);  
  },
  
  //Failure!
  function(error) {
    console.log('Error' + error);
   
    card.title('Failed.');
    card.subtitle('error:');
    card.body(error);
  }
);