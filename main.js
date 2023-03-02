// Get URL of content script
//const contentScriptUrl = chrome.runtime.getURL('content.js');

// Send message to background script to execute content script
let replaceButton = document.querySelector('.replace-btn');
replaceButton.addEventListener('click', function () {
//   chrome.runtime.sendMessage({ action: 'replace-text' });
  console.log(replaceButton);
});

// Listen for incoming messages from popup window
// chrome.runtime.onMessage.addListener(function (message) {
//   if (message.action === 'replace-text') {
//     // Execute content script in active tab
//     chrome.tabs
//       .executeScript({
//         file: contentScriptUrl,
//       })
//       .then(function () {
//         console.log('Text replaced');
//       })
//       .catch(function (error) {
//         console.error('Error:', error);
//       });
//   }
// });