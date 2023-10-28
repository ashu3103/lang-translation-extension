"use strict";

function myContentScriptFunction(data) {
    // Your content script logic here
    alert(data);
}

// Message listener in the content script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(request);
});