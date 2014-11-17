var userID;
var conditionID;

function randomString(string_length) {
	var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
	var randomstring = '';
	for (var i=0; i<string_length; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		randomstring += chars.substring(rnum,rnum+1);
	}
	return randomstring;
}

$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return results[1] || 0;
    }
}

var register = function() {
    userID = $.urlParam("userID");
    conditionID = $.urlParam("conditionID");

	var cookieConditionID = $.cookie("conditionID");
    if (!conditionID) {
		conditionID = cookieConditionID;
	} else if (cookieConditionID && conditionID != cookieConditionID) {
		// If the provided and stored conditionIDs don't match,
		// assume a new user.
		$.removeCookie("userID");
	}
    if (!conditionID) {
		handleError();
        return false;
    }
    $.cookie("conditionID", conditionID, {expires: 3});

    if (!userID) userID = $.cookie("userID");
    if (!userID) {
        userID = randomString(12);
        var callback = location.host + location.pathname +
            "?userID=" + userID + "&conditionID=" + conditionID;
        window.location.replace(
            "https://login.qualtrics.com/SE/?SID=SV_6zHIIaLwDTYmqZD&Preview=Survey&BrandID=ncsu" +
            "&userID=" + userID +
            "&conditionID=" + conditionID +
            "&callback=" + encodeURIComponent(callback)
        )
        return false;
    }
    $.cookie("userID", userID, {expires: 3});

	var xhr = new XMLHttpRequest();
	xhr.onload = function() {
		if (this.status != 200 || isNaN(this.responseText)) {
			handleError();
			return;
		}
		document.getElementById("identifier").innerHTML = this.responseText;
	};
	xhr.open("GET", "register.php?userID=" + userID + "&conditionID=" + conditionID);
	xhr.send();

    return true;
}

function handleError() {
	alert("Oops, something went wrong. Please contact the instructor!");
}
