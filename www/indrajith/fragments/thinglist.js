sap.ui.define([
    'jquery.sap.global', 'sap/ui/core/FragmentControl'],
    function(jQuery, FragmentControl, XML) {
    "use strict";
    var thinglist = FragmentControl.extend("sap.iot.ui.component.consume.fragments.thinglist", {
        metadata: {
            properties: {
                text: { type: "string", defaultValue: "Default Text"}
            },
            aggregations: {
				things: {
					type : "sap.m.ColumnListItem",
					multiple : true,
					bindable : true
				},
				mycolumns:{
					type : "sap.m.Column",
					multiple : true,
					bindable : true
				}
				
			}
        }
    });
    return thinglist;
}, /* bExport= */true);