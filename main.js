
function emojify() {
    // Replace all text on the page with emojis
    const allNodes = document.getElementsByTagName("*");
  
  // Loop through all nodes
  for (let i = 0; i < allNodes.length; i++) {
    const node = allNodes[i];
    // Check if node is a text node
    if (node.nodeType === Node.TEXT_NODE) {
      // Replace the text with the emoji
      node.textContent = "😊👍🎉";
    }
  }

  }

  let emojifyButton =  document.getElementById("emojify")

  emojifyButton.addEventListener("click",emojify)
