'use strict';
const patternDict = [{

	pattern:'\\b(?<greeting>Hi|Hello|Hey|hi|Hey there|howdy|Namaste| Hola|hii|hiii)\\b',
	intent:'Hello'
},{
	pattern:'\\b(?<greeting>good|fine|Good|Fine|well|well.+)',
	intent: 'greeting'

},{
	pattern:'\\b(?!m|<greeting>movie.+)\\b',
	intent: 'asking'

},{
	pattern:'\\sin\\s\\b(?<city>.+)',
	intent: 'CurrentWeather'

},{
	pattern:'\\b(?!m|.<greeting>price?)',
	intent: 'ticketprice'

},{
	pattern:'\\b(bye|exit)\\b',
	intent:'Exit'
}];
module.exports= patternDict;