(function(){
	$('.FlowupLabels').FlowupLabels({
		/*
		 * These are all the default values
		 * You may exclude any/all of these options
		 * if you won't be changing them
		 */
		
		// Handles the possibility of having input boxes prefilled on page load
		feature_onInitLoad: true, 
		
		// Class when focusing an input
		class_focused: 		'focused',
		// Class when an input has text entered
		class_populated: 	'populated'	
	});
})();