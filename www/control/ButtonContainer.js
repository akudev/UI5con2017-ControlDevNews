sap.ui.define(
		['jquery.sap.global', 'sap/ui/core/FragmentControl'],
		function (jQuery, FragmentControl) {
	"use strict";
	
	var oButtonContainer = FragmentControl.extend("control.ButtonContainer", {
		metadata: {
			aggregations: {
				content: {
					type: "sap.ui.core.Item",
					multiple: true
				}
			},
			events: {
				press: {
					parameters: {
						itemText: {type: "string"}
					}
				}
			}
		},
		
		handlePress: function(oEvent) { // one of the buttons was pressed
			this.fireEvent("press", {itemText: oEvent.getSource().getText()});
		}
	});
	return oButtonContainer;
}, /* bExport= */ true);