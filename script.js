document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("btn").addEventListener('click', add_tab);
});

function add_tab(){
	var app_id = document.getElementById("app_id").value;
	var redirect_uri = document.getElementById("redirect_uri").value;
	var script = "document.location.href='https://www.facebook.com/dialog/pagetab?app_id="+app_id+"&redirect_uri="+redirect_uri+"'";
	chrome.tabs.executeScript(null,{code:script});
}
