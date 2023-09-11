sap.ui.require([
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/XMLView"
], function (JSONModel, XMLView) {
    "use strict";

    // Attach an anonymous function to the SAPUI5 'init' event
    // NB: dont use "sap.ui.getCore()" in production apps, rather "this.getView().getModel()"
    sap.ui.getCore().attachInit(function() {
        //Create a JSON model from an object literal
        var oModel = new JSONModel({
            firstName: "Bruce",
            lastName: "Wayne",
            enabled: true,
            panelHeaderText: "Data Binding Basics"
        });

        // Assign the model object to the SAPUI5 core (NB on getCore)
        sap.ui.getCore().setModel(oModel);

        // Display the XML view called "App"
        new XMLView({
            viewName: "sap.ui.demo.db.View.App"
        }).placeAt("content");
    });
})