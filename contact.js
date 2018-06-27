"use strict";

var Contact = function(first, last, org, phone, email) {
    if (arguments.length > 0) {
        this.firstName = first;
        this.lastName = last;
        this.organization = org;
        this.phone = phone;
        this.email = email;
    }
};
Contact.prototype.isValid = function() {
    var isValid = true;
    if (this.firstName === "" || this.lastName === "") { isValid = false; }
    if (this.phone === "" && this.email === "") { isValid = false; }
    return isValid;
};
Contact.prototype.displayContact = function() {
    return this.firstName.concat(" ", this.lastName, ", ",
        this.organization, "<br>Phone: ", this.phone, " <br>Email: ",
        this.email, "<hr>");
};

Contact.prototype.loadJsonObject = function(obj) {
    if (obj) {
        this.firstName = obj.f;
        this.lastName = obj.l;
        this.organization = obj.o;
        this.phone = obj.p;
        this.email = obj.e;
    }
};
Contact.prototype.toJSON = function() {};