function mostCommonWord(str) {
	var words = [], wordCount = {};
	words = str.match(/[a-z]+/gi);
	console.log(words);
	words.map(function(word){
		word = word.toLowerCase();
		wordCount[word] = wordCount[word] + 1 || 1;
	})
	return Object.keys(wordCount).reduce((currentMax,element) => wordCount[element] > wordCount[currentMax] ? element : currentMax);
}

console.log(mostCommonWord('I am a string, my most mostCommonWord is string. Trust me.'));