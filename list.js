"use strict";
var $ = function(id) { return document.getElementById(id); };
var contacts = [];

var displayContacts = function() {

    contacts.length = 0;
    $("contacts").innerHTML = "";

    var array = storage.getContacts();
    var html = "";

    for (var i = 0; i < array.length; i++) {
        var contact = new Contact();
        contact.loadJsonObject(array[i]);
        html = html.concat("<tr><td>", contact.displayContact(), "</td></tr>");
        contacts[i] = contact;
    }

    $("contacts").innerHTML = html;
    $("first").focus();
};

var addContact = function() {

    var first = $("first").value;
    var last = $("last").value;
    var org = $("org").value;
    var phone = $("phone").value;
    var email = $("email").value;
    var contact = new Contact(first, last, org, phone, email);

    if (contact.isValid()) {
        contacts.push(contact);
        storage.setContacts(contacts);
        clearTextBoxes();
        displayContacts();
    } else {
        alert("Please enter a first and last name, and a phone number or email address.");
        $("first").focus();
    }
};

var clearTextBoxes = function() {
    $("first").value = "";
    $("last").value = "";
    $("org").value = "";
    $("phone").value = "";
    $("email").value = "";
};

var eraseContacts = function() {
    storage.clearContacts();
    contacts.length = 0;
    $("contacts").innerHTML = "";
    $("first").focus();
};

window.onload = function() {
    $("add_contact").onclick = addContact;
    $("erase").onclick = eraseContacts;
    displayContacts();
};