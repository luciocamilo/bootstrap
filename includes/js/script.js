/*

My Custom JS
============

Author:  Brad Hussey
Updated: August 2013
Notes:	 Hand coded for Udemy.com

*/
$(function(){

	$('#niceButton').click(function(e){
		e.preventDefault();
		$('#success-alert').slideDown();
	});

	$('.pop').click(function(e){
		e.preventDefault();
		$('a.pop').popover();
	});

	$('[rel="tooltip"]').tooltip();
});