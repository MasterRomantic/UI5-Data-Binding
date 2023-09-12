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

    // set the products model to the core (should be the view remember NB).
    var oProductModel = new JSONModel();
    oProductModel.loadData("./model/products.json");
    sap.ui.getCore().setModel(oProductModel, "products");

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
            priceTheshold: 20,
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
        var oView = new XMLView({
            viewName: "sap.ui.demo.db.View.App"
        });

        // Register the view with the message manager
        sap.ui.getCore().getMessageManager().registerObject(oView, true);

        // Insert the view into the DOM
		oView.placeAt("content");
    });
})