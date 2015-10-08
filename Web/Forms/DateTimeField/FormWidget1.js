Type.registerNamespace("SitefinityWebApp.Forms.DateTimeField");

SitefinityWebApp.Forms.DateTimeField.FormWidget1 = function (element) {
    this._dateTimePicker = null;
    this._dataFieldName = null;
    SitefinityWebApp.Forms.DateTimeField.FormWidget1.initializeBase(this, [element]);
}

SitefinityWebApp.Forms.DateTimeField.FormWidget1.prototype = {
    /* --------------------------------- set up and tear down ---------------------------- */

    /* --------------------------------- public methods ---------------------------------- */

    // Gets the value of the field control.
    get_value: function () {
        return jQuery(this._dateTimePicker).get_selectedDate();
    },

    // Sets the value of the text field control depending on DisplayMode.
    set_value: function (value) {
        jQuery(this._dateTimePicker).set_selectedDate(value);
    },

    /* --------------------------------- event handlers ---------------------------------- */

    /* --------------------------------- private methods --------------------------------- */

    /* --------------------------------- properties -------------------------------------- */

    get_dateTimePicker: function () {
        return this._dateTimePicker;
    },

    set_dateTimePicker: function (value) {
        this._dateTimePicker = value;
    },

    get_dataFieldName: function () {
        return this._dataFieldName;
    },

    set_dataFieldName: function (value) {
        this._dataFieldName = value;
    }
}

SitefinityWebApp.Forms.DateTimeField.FormWidget1.registerClass('SitefinityWebApp.Forms.DateTimeField.FormWidget1', Telerik.Sitefinity.Web.UI.Fields.FieldControl);