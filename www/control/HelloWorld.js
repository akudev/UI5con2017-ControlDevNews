sap.ui.define(
		['jquery.sap.global', 'sap/ui/core/XMLComposite'],
		function (jQuery, XMLComposite) {
	"use strict";
	
	var HelloWorld = XMLComposite.extend("control.HelloWorld", {
		metadata: {
			properties: {
				text: { type: "string", defaultValue: "Hello World" }
			}
		}
	});
	return HelloWorld;
}, /* bExport= */ true);