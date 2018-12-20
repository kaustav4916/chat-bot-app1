'use strict';
const Readline =require('readline');
const rl =Readline.createInterface({
	input:process.stdin,
	output:process.stdout,
	terminal:false
});
const matcher =require('./matcher');
const weather=require('./wheather');
const movies=require('./movies');
rl.setPrompt('>');
rl.prompt();
rl.on('line', reply => {
	matcher(reply,data =>{
		switch(data.intent){
			case 'Hello':
			   console.log(`${data.entities.greeting} to you too!How are You doing today`);
			   rl.prompt();
			   break;
			case 'greeting':
			   console.log("Great To Know that!What type of movies");
			   rl.prompt();
			   break;			
			case 'CurrentWeather':
			   console.log(`Checking wheather for ${data.entities.city}...`);
			    //get wheather data API
			    weather(data.entities.city,'current')
				    .then(response => {
				   	 console.log(response);
				   	 rl.prompt();
				    })
				   .catch( error=> {
				   	console.log("There seems to be connection problem");
				   	rl.prompt();
				   });			    
			    break;
			case 'asking':
			    console.log(`Checking for movies.....`);
			    console.log(movies.userId='Inception');
			    rl.prompt();
			    break;
			case 'ticketprice':
			    console.log(`Checking for ticket price.....`);
			    console.log('$10');
			    rl.prompt();
			    break;
			case 'Exit':
			    console.log("Have a nice Day");
			    process.exit(0);
			    break;
			default:{
			   	console.log("I don't know what you mean :( ");
			   	rl.prompt();
			}
		}
	});
});