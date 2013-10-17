/*

--- META ---

Author:			Samuel Turner
Twitter:		@SamuelTurner_
Author URL:		samuel-turner.co.uk
Project URL:	samuel-turner.co.uk/clingy-footer/
Version:		1.2.0
Updated:		17/10/2013

--- LICENCE ---

Copyright 2011 Samuel Turner

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/

(function( $ ) {
	
	$.fn.clingyFooter = function( options ) {
		
		// Declare the variables
		
		var defaults = {
			pageSelector : '#page',
			pageContentSelector : '#page-body',
			footerSelector: "#page-footer"
		},
		
		settings = $.extend({}, defaults, options);
		
		var $page = $( settings.pageSelector ),
		$pageContent = $( settings.pageContentSelector ),
		$footer = $( settings.footerSelector ),
		$html = $("html"),
		$body = $("body"),
		$footerPadding = null;
		
		
		// Set some CSS attributes needed for this to work. Set them here so that if JS is disabled, the footer just sits at the bottom of the page.
		
		$html.css({
			'height' : '100%'
		});
		
		$body.css({
			'height' : '100%'
		});
		
		$page.css({
			'min-height' : '100%',
			'position' : 'relative'
		});
		
		$footer.css({
			'position' : 'absolute',
			'bottom' : '0',
			'max-height' : '100%',
			'overflow-y' : 'auto'
		});
		
		
		
		// The function to take the height of the #footer, and make it the padding on the bottom of the #page-body.
		function setPageContentPadding() {
			$footerPadding = $footer.outerHeight( true );
			$pageContent.css("padding-bottom", $footerPadding);
		}
		
		
		
		// Call when the page is ready...
		setPageContentPadding();
		
		// ...and whenever the browser is resized.
		$(window).resize(setPageContentPadding);
		
	}
	
})( jQuery );