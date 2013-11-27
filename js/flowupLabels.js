(function($) {
	$.fn.flowupLabels = function( options ){
	
		var defaults = {
        		// Useful if you pre-fill input fields or if localstorage/sessionstorage is used. 
				feature_onLoadInit: false,
				class_activated: 'activated'
			},
			settings = $.extend({}, defaults, options);
  
  
		return this.each(function(){
			var $scope  = $(this);
    
			$scope.on('focus.flowupLabelsEvt', '.fl_input', function() {
				$(this).parent().addClass(settings.class_activated);
			})
			.on('blur.flowupLabelsEvt', '.fl_input', function() {
				var $this = $(this);
				$this.val().length ? '' : $this.parent().removeClass(settings.class_activated);
			});
        
    
			// On page load, make sure it looks good
			if (settings.feature_onLoadInit) {
				$scope.find('.fl_input').trigger('blur.flowupLabelsEvt');
			}
		});
	};
})( jQuery );