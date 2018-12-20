'use strict';
const patternDict = [{
	pattern:'\\b(?<greeting>Hi|Hello|Hey|hi|Hey there|howdy|Namaste| Hola|hii|hiii)\\b',
	intent:'Hello'
},{
	pattern:'\\b(?<greeting>good|fine|Good|Fine|well|well.+)',
	intent: 'greeting'

},{
	pattern:'\\b(?<greeting>movie?)',
	intent: 'asking'

},{
	pattern:'\\sin\\s\\b(?<city>.+)',
	intent: 'CurrentWeather'

},{
	pattern:'\\b(?<greeting>movie.+ticket?|price?)',
	intent: 'ticketprice'

},{
	pattern:'\\b(bye|exit)\\b',
	intent:'Exit'
}];
module.exports= patternDict;