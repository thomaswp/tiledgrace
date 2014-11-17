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

    if (!conditionID) conditionID = $.cookie("conditionID");
    if (!conditionID) {
        alert("Oops, something went wrong. Please contact the instructor!");
        return false;
    }
    $.cookie("conditionID", conditionID, {expires: 1});

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
    $.cookie("userID", userID, {expires: 1});

    return true;
}
