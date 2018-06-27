"use strict";
var storage = {
    keyContacts: "contacts_1",
    getContacts: function() {
        var storageString = localStorage.getItem(this.keyContacts) || null;
        return JSON.parse(storageString) || [];
    },
    setContacts: function(value) {
        var storageString = "["
        for (var i = 0; i < value.length; i++) {
            var contact = value[i];
            storageString = storageString + '{ "f":"' + contact.firstName + '","l":"' + contact.lastName + '","o":"' + contact.organization + '","p":"' + contact.phone + '","e":"' + contact.email + '"},'
        }
        storageString = storageString.substr(0, storageString.lastIndexOf(','));
        storageString = storageString + "]";
        console.log(storageString);
        localStorage.setItem(this.keyContacts, storageString);
    },
    clearContacts: function() {
        localStorage.setItem(this.keyContacts, "");
    }
};