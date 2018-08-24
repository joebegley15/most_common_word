function mostCommonWord(str) {
	const wordsArr = str.match(/[a-z]+/gi), wordsObj = {};
	wordsArr.map(function(word){
		word = word.toLowerCase();
		wordsObj[word] = wordsObj[word] + 1 || 1;
	})
	return Object.keys(wordsObj).reduce((currentMaxVal,element) => wordsObj[element] > wordsObj[currentMaxVal] ? element : currentMaxVal);
}


console.log(mostCommonWord('I am a string. The most common string in this string is string. You can trust me on this one.'));