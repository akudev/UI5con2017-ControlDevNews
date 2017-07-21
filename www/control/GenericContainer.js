sap.ui.define(
		['jquery.sap.global', 'sap/ui/core/XMLComposite'],
		function (jQuery, XMLComposite) {
	"use strict";
	
	var oGenericContainer = XMLComposite.extend("control.GenericContainer", {
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