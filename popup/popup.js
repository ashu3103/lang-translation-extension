"use strict";
let counter = 1;

function print(msg) {
    console.log(`(Popup Script)[${counter}]: ${msg}`);
    counter++;
}

print("Popup node running!!");

// Extract the button element
const button = document.getElementById("translate");

// // Do something when button is clicked
button.addEventListener("click", () => {
    print("Translate button is clicked");
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        if (tabs && tabs.length > 0){
            const activeTab = tabs[0];
            const dataToSend = {action: "ScanPage"};
            print("Sending Message");
            chrome.scripting.executeScript({
                target : {tabId : activeTab.id},
                files : ["scripts/content.js"],
              }, function() {
                print("Re-injected content script");
                // Now, send the message to the content script
                chrome.tabs.sendMessage(activeTab.id, dataToSend);
            });
        }
    });
});