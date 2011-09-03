
// ==UserScript==
// @name           SE-Versification
// @namespace      Tools to insert verses and create links on Christianity.SE posts
// @description    Verse insert and link tools
// @include        http://christianity.stackexchange.com/*
// @exclude        http://christianity.stackexchange.com/reputation
// @author         Caleb Maclennan
// ==/UserScript==

// Realsed under GPL 3.0
// http://www.gnu.org/licenses/gpl.txt

function init_versification() {
	for (var i = 0; i < arguments.length; ++i) {
		if (typeof(arguments[i]) == 'function') {
			var script = document.createElement('script');

			script.type = 'text/javascript';
			script.textContent = '(' + arguments[i].toString() + ')(jQuery)';

			document.body.appendChild(script);
		}
	}
}

init_versification(function($) {
	// find input boxes
	// add callback for when submitted
    // scan for special link markup {{1 Peter 2:3|ESV}} or similar
    // make call to bible api to get verse content
    // replace tag in textarea with markdown formatted version of verse (leave special markup in comments)
    // continue with normal submit process
});
