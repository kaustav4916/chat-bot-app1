'use strict';
const patterns=require('../pattern');
const XRegExp = require('xregexp');

// var remo1 = new RegExp("javascript","g");
// var remo2 = /javascript/g;

let createEntities = (str,pattern) =>{
	return XRegExp.exec(str,XRegExp(pattern,"g"));
}
let matchPattern=(str,cb) =>{
	let getResult =patterns.find(item =>{
		if(XRegExp.test(str,XRegExp(item.pattern,"g"))){
			return true;
		}
	});
	if(getResult){
		return cb({
			intent:getResult.intent,
			entities: createEntities(str,getResult.pattern)
		});
	}else{
		return cb({});
	}
}
module.exports = matchPattern;