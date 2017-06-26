sap.ui.define(
		['jquery.sap.global', 'sap/ui/core/FragmentControl'],
		function (jQuery, FragmentControl) {
	"use strict";
	
	var oGenericContainer = FragmentControl.extend("control.GenericContainer", {
		metadata: {
			aggregations: {
				content: {
					type: "sap.ui.core.Control",
					multiple: true
				}
			}
		}
	});
	return oGenericContainer;
}, /* bExport= */ true);