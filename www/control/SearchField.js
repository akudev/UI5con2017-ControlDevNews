sap.ui.define(
		['jquery.sap.global', 'sap/ui/core/FragmentControl'],
		function (jQuery, FragmentControl) {
	"use strict";
	
	var oSearchField = FragmentControl.extend("control.SearchField", {
		metadata: {
			properties: {
				placeholder: { type: "string", defaultValue: "Hello World" }
			},
			events: {
				search: {
					parameters: {
						value: {type: "string"}
					}
				}
			}
		},
		
		handleSearch: function() { // button was pressed, retrieve the current Input value
			var sSearchString = sap.ui.getCore().byId(this.getId() + "--innerInput").getValue();   // should be and will be:  this.byId("innerInput").getValue();
			this.fireEvent("search", {value: sSearchString}); // just forward the Input event's parameters
		}
	});
	return oSearchField;
}, /* bExport= */ true);