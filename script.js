// getting button element from extension's DOM
var buttonElement = document.querySelector("button");

function result() {
  console.log('connections accepted');
}

// creating listener on click
buttonElement.addEventListener("click", function() {
  // getting active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {    
    // executing script on this tab
    chrome.tabs.executeScript(tabs[0].id, {
      // getting 'accept element' from linkedin's website DOM
      code: 'document.querySelectorAll("ul.mn-invitation-list button.artdeco-button--secondary").forEach(function(btn) { btn.click() })'
    }, result)
  });
})
