$(document).ready(function() {
	// initial input
	var input = ['A','B','C','C','D','Copy your list here','E','B','Test1','Test2','Test1'];
	var dupes = [];
	var output = [];
	$("#in").html(input.join("\n"));
	
	process = function(input) {
		input = input.sort()
		dupes = [];
		output = [];
		
		for (var i = 0; i < input.length; i++) {
			if(!input[i] || 0 === input[i].length || /^\s*$/.test(input[i])) continue; // ignore line breaks and blank lines 
			else if (i != input.length && input[i] == input[i+1]) {
				dupes.push(input[i]);
			}
			else {
				output.push(input[i]);
			}
		}
		
		$("#out").html(output.join("\n"));
		$("#dupes").html(dupes.join("\n"));

		//console.log('input:\t' + input);
		//console.log('output:\t' + output);
		//console.log('dupes:\t' + dupes);
	};
	
	process(input);
	
	// add input, or copy-paste
    $('#in').keyup(function(){
		input = getInputs();
		clearOutputs();
		process(input);
    });
	
	getInputs = function() {
		return $('#in').val().split('\n');
	};
	
	clearOutputs = function() {
		$("#out").html("");
		$("#dupes").html("");
	};
	
});