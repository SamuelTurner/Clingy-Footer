/*!
 * SamuelTurnerUI
 * http://samuel-turner.co.uk/
 *
 * Copyright 2013 Samuel Turner
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License. *
 * 
 */

//	Get scrollbar width as per: http://chris-spittles.co.uk/jquery-calculate-scrollbar-width/
function scrollbarWidth() {
	var $inner = jQuery('<div style="width: 100%; height:200px;">test</div>'),
		$outer = jQuery('<div style="width:200px;height:150px; position: absolute; top: 0; left: 0; visibility: hidden; overflow:hidden;"></div>').append($inner),
		inner = $inner[0],
		outer = $outer[0];
	 
	jQuery('body').append(outer);
	var width1 = inner.offsetWidth;
	$outer.css('overflow', 'scroll');
	var width2 = outer.clientWidth;
	$outer.remove();
 
	return (width1 - width2);
}

// Declare a navOpened variable to be set to true if the nav ever gets opened
var navOpened = false;

// Show/hide the nav as required
function navShowHide() {
	
	// WHEN THE BROWSER IS RESIZED:
	// Show the nav for mobiles when navOpened is true 
	// Hide the nav for mobiles when navOpened is false
	// Show the nav for everything else
	var fullWidth = $(window).width() + scrollbarWidth();
	if (fullWidth < 641) {
		if (navOpened == true) {
			$('.page-header__nav').show();
		}
		else {
			$('.page-header__nav').hide();
		}
	}
	else {
		$('.page-header__nav').show();
	}
}

$(document).ready(function(){
	
	// Run Clingy-Footer
	$(document).clingyFooter({
		pageSelector : '#page',
		pageContentSelector : '#page-body',
		footerSelector: "#page-footer-wrapper"
	});
	
	// Run on page load
	navShowHide();
	$(window).resize(function() {
		// Also run on resize
		navShowHide();
	});
	
	
	// Swap JD hide/show classes
	$('.no-js-hide').addClass('js-show').removeClass('no-js-hide');
	$('.no-js-show').addClass('js-hide').removeClass('no-js-show');
	$('.no-js-palm-show').addClass('js-palm-hide').removeClass('no-js-palm-show');
	
	// Show/hide the nav for mobile when menu icon is clicked
	$('.page-header__menu-icon').on('click', function(e) {
		if (navOpened == false) {
			navOpened = true;
			$('.page-header__nav').show();
		}
		else {
			navOpened = false;
			$('.page-header__nav').hide();
		}
	});
	
});