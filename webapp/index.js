sap.ui.require([
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/XMLView",
    "sap/ui/model/BindingMode",
    "sap/ui/model/resource/ResourceModel"
], function (JSONModel, XMLView, BindingMode, ResourceModel) {
    "use strict";

    // Attach an anonymous function to the SAPUI5 'init' event
    // NB: dont use "sap.ui.getCore()" in production apps, rather "this.getView().getModel()"
    sap.ui.getCore().attachInit(function() {
        //Create a JSON model from an object literal
        var oModel = new JSONModel({
            firstName: "Bruce",
            lastName: "Wayne",
            enabled: true,
            address:{
                street: "1007 Mountain Drive",
                city: "Gotham City",
                zip: "69190",
                country: "USA"
            },
            salesAmount: 12345.6789,
            currencyCode: "EUR",
            panelHeaderText: "Data Binding Basics"
        });

        // Create a resource bundle for language specific texts
        var oResourcemodel = new ResourceModel({
            bundleName: "sap.ui.demo.db.i18n.i18n",
            supportedLocales: ["", "de"],
            fallbackLocale: ""
        });

        // Assign the model object to the SAPUI5 core using the name "i18n"
        sap.ui.getCore().setModel(oResourcemodel, "i18n");

        // We set the data binding to one way data binding
        // oModel.setDefaultBindingMode(BindingMode.OneWay);

        // Assign the model object to the SAPUI5 core (NB on getCore)
        sap.ui.getCore().setModel(oModel);

        // Display the XML view called "App"
        new XMLView({
            viewName: "sap.ui.demo.db.View.App"
        }).placeAt("content");
    });
})