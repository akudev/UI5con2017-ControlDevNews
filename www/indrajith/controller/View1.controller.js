sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sap.iot.ui.component.consume.controller.View1", {
		
		onInit: function(){
			var oModel = new sap.ui.model.json.JSONModel();
			var aData = [{fname : "SAP",lname : "Labs" , country : "Germany"},
			             {fname : "Igate",lname : "Labs" , country : "USA"},
			             {fname : "walmart",lname : "Labs" , country : "USA"},
			             {fname : "google",lname : "Labs" , country : "India"}
			             
			             ];
			
			oModel.setData({
				collection : aData});
			this.getView().setModel(oModel);
		},

	});
});