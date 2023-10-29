"use strict";

// Message listener in the content script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action == "ScanPage") {
        const htmlContent = document.documentElement.innerHTML;
        console.log(htmlContent);
    }
});