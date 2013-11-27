flowupLabels.js
===============

FlowupLabels.js is a jQuery plugin that enhances form labels to be positioned like placeholders, however remain visible when the user focuses and types into the input boxes.

Original concept (visual): [http://dribbble.com/shots/1254439--GIF-Mobile-Form-Interaction](http://dribbble.com/shots/1254439--GIF-Mobile-Form-Interaction)
Some discussion around this UI pattern: [http://bradfrostweb.com/blog/post/float-label-pattern/](http://bradfrostweb.com/blog/post/float-label-pattern/)

Check out the [Demo](http://enfos.com/demos/FlowupLabels.js/)


Difference in this version: 
- The placeholder label gets out of the way immediately on focus
- Labels should be proceeded by a colon ( : ), to indicate that the user still has something to fill. Users commonly mistake placeholder labels as prefilled inputs, an example being the common "Search..."
- The implementation accounts for pre-filled elements on page load
- Uses semantic labels, not placeholders


Usage instructions



&copy; 2013 ENFOS, Inc.
Licensed under MIT