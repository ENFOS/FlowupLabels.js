FlowupLabels.js
===============

A jQuery plugin for floating form labels.  

[DEMO](http://enfos.com/FlowupLabels.js/demo/)

Original concept by [Matt D. Smith](http://dribbble.com/shots/1254439--GIF-Mobile-Form-Interaction). Inspired by Mike Mitchell's [FloatLabel.js](https://github.com/m10l/FloatLabel.js).


Difference in this version: 
----

* The label gets out of the user's way immediately on focus
* Labels should be proceeded by a colon ":", to indicate that the user still has something to fill. Users commonly mistake placeholder labels as prefilled inputs, an example being the common "Search..."
* This implementation accounts for pre-filled elements on page load (toggleable)
* Uses semantic labels, not placeholders


Usage instructions
-----

* Add jquery.FlowupLabels.css to your stylesheets:

```
<link rel="stylesheet" href="css/jquery.FlowupLabels.css">
<link rel="stylesheet" href="css/main.css">
```


* Add jquery.FlowupLabels.js to your scripts.

```
<script src="js/jquery.min.js"></script>
<script src="js/jquery.FlowupLabels.js"></script>
<script src="js/main.js"></script>
```



* Wrap your form in the '.FlowupLabels' class
* Wrap your labels and inputs with the '.fl_wrap' class
* Give labels the '.fl_label' class
* Give inputs the '.fl_input' class
* Load the plugin
```
$('.FlowupLabels').FlowupLabels({
	/*
	 These are all the default values
	 You may exclude any/all of these options
	 if you won't be changing them
	 */
	// Handles the possibility of having input boxes prefilled on page load
	feature_onInitLoad: false, 
	
	// Class when focusing an input
	class_focused: 		'focused',
	// Class when an input has text entered
	class_populated: 	'populated'	
});
```

Compatibility
-----
Tested in IE8, IE9, IE10, Chrome, Firefox


Size
-----
JS:  1kb regular, ~600 bytes minified, 284 bytes gzipped+minified [(Closure Compiler)](http://closure-compiler.appspot.com/home).

CSS: 1.6kb regular, 786 bytes minified.

Total: <2kb minified, <1kb gzipped+minified.



---

© 2013 [ENFOS, Inc.](http://enfos.com)

Licensed under [MIT](https://github.com/ENFOS/FlowupLabels.js/blob/master/LICENSE)