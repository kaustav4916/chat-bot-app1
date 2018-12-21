'use strict';
const Readline =require('readline');
const rl =Readline.createInterface({
	input:process.stdin,
	output:process.stdout,
	terminal:false
});
var regex1=new RegExp('foo','g');
var asking=new RegExp('foo','g');
var ticket=new RegExp('foo','g');
var moviesname=new RegExp('foo','g');
const matcher =require('./matcher');
const weather=require('./wheather');
const movies=require('./movies');
rl.setPrompt('>');
rl.prompt();
rl.on('line', reply => {
	matcher(reply,data =>{
		switch(data.intent){
			case 'Hello':
			   var hello=`${data.entities.greeting} to you too!How are You doing today`;
			   console.log(hello);
			   rl.prompt();
			   break;
			case 'greeting':
			   var regex1="Great To Know that!What type of movies";
			   console.log(regex1);
			   rl.prompt();
			   break;			
			case 'CurrentWeather':
			var apicheck=`Checking wheather for ${data.entities.city}...`;
			   console.log(apicheck);
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
			    var asking="Checking for movies.....";
			    console.log(asking);
			    var moviesname="Inception";
			    console.log(moviesname);
			    rl.prompt();
			    break;
			case 'ticketprice':
			    var ticket="Checking for ticket price.....";
			    console.log(ticket);
			    var ticketprice="$10";
			    console.log(ticketprice);
			    rl.prompt();
			    break;
			case 'Exit':
			    var exit="Have a nice Day";
			    console.log(exit);
			    process.exit(0);
			    break;
			default:{
				var defaultcase=`I don't know what you mean :( `;
			   	console.log(defaultcase);
			   	rl.prompt();
			}
		}
	});
});