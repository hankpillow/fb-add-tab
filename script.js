document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("btn").addEventListener('click', add_tab);
});

function add_tab(){
	var app_key = document.getElementById("app_key").value;
	var script = "document.location.href='https://www.facebook.com/add.php?api_key="+app_key+"&pages=1'";
	chrome.tabs.executeScript(null,{code:script});
}
