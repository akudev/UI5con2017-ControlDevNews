sap.ui.define(
		['jquery.sap.global', 'sap/ui/core/FragmentControl'],
		function (jQuery, FragmentControl) {
	"use strict";
	
	var HelloWorld = FragmentControl.extend("control.HelloWorld", {
		metadata: {
			properties: {
				text: { type: "string", defaultValue: "Hello World" }
			}
		}
	});
	return HelloWorld;
}, /* bExport= */ true);