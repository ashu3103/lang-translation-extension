"use strict";
let counter = 1;

function print(msg) {
    console.log(`(Background Script)[${counter}]: ${msg}`);
    counter++;
}

print("Background node is running!!");


// async function getCurrentTab() {
//     let queryOptions = { active: true, lastFocusedWindow: true };
//     // `tab` will either be a `tabs.Tab` instance or `undefined`.
//     let [tab] = await chrome.tabs.query(queryOptions);
//     return tab;
// }

// const getCurrentTabID = async () => {
//     const tab = await getCurrentTab();
//     return tab.id;
// }