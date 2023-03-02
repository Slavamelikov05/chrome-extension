function replaceText() {
  const emojiMap = {
    ' ': '  ',
    '.': '.',
    ',': ',',
    a: '🍎',
    b: '🍌',
    c: '🍪',
    d: '🍩',
    e: '🥚',
    f: '🍟',
    g: '🍇',
    h: '🍯',
    i: '🍦',
    j: '🧃',
    k: '🥝',
    l: '🍋',
    m: '🥛',
    n: '🍜',
    o: '🍊',
    p: '🍕',
    q: '🦑',
    r: '🌹',
    s: '🍣',
    t: '🌳',
    u: '🔓',
    v: '🌋',
    w: '🍉',
    x: '❌',
    y: '🪀',
    z: '💤',
  };

  const replaceArray = ['p', 'ul', 'ol', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

  for (let o = 0; o < replaceArray.length; o++) {
    const pArray = document.querySelectorAll(replaceArray[o]);

    for (let i = 0; i < pArray.length; i++) {
      const text = pArray[i];
      let str = '';

      for (let e = 0; e < pArray[i].innerHTML.length; e++) {
        let letter = pArray[i].innerHTML[e].toLowerCase();

        if (emojiMap[letter]) {
          str += emojiMap[letter];
        }
      }
      pArray[i].innerHTML = str;
    }
  }

  //document.querySelectorAll('p')[2].innerText.length;

  // const allNodes = document.getElementsByTagName('*');
  // console.log('Running');
  // for (let i = 0; i < allNodes.length; i++) {
  //   const node = allNodes[i];
  //   if (node.nodeType === Node.TEXT_NODE) {
  //     node.textContent = 'replaced';
  //   }
  // }
}
const catUrls = [
  'https://placekitten.com/200/200',
  'https://placekitten.com/201/201',
  'https://placekitten.com/202/202',
  'https://placekitten.com/203/203',
  'https://placekitten.com/204/204',
  'https://placekitten.com/205/205',
  // add more URLs for cat images here...
];

const dogUrls = [
  'https://placedog.net/200/200',
  'https://placedog.net/201/201',
  'https://placedog.net/202/202',
  'https://placedog.net/203/203',
  'https://placedog.net/204/204',
  'https://placedog.net/205/205',
];
//   // add more URLs for dog images here...

function getRandomUrl(urls) {
  return urls[Math.floor(Math.random() * urls.length)];
}

function replaceImg() {
  const images = document.querySelectorAll('img');
  images.forEach((image) => {
    const imgUrl =
      Math.random() > 0.5 ? getRandomUrl(catUrls) : getRandomUrl(dogUrls);

    image.src = imgUrl;
  });
}

function reloadPage() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.reload(tabs[0].id);
  });
}

const positive = {
  1: 'Youre awesome!',
  2: 'keep it up',
  3: 'nothing can stop you',
  4: 'Who is better than you? No one!',
  5: 'Who is better than you? No one!',
  6: 'Who is better than you? No one!',
};

function randomPhrase() {
  return positive[Math.floor(Math.random() * 6.9)];
}

function replaceText2() {
  const replaceArray = ['p', 'ul', 'ol', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  for (let e = 0; e < replaceArray.length; e++) {
    const pArray = document.querySelectorAll(replaceArray[e]);
    let count = pArray.length;

    for (let i = 0; i < pArray.length; i++) {
      let str = '';

      for (let o = 0; o < replaceArray.length; o++) {
        while (count > -5) {
          str += randomPhrase();
          count -= randomPhrase() - length;
        }

        pArray[i].innerHTML = str;
      }
    }
  }
}

// document.querySelector('#replace-btn').addEventListener('click', () => {
//   // Get the current tab

//   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//     // Execute a content script in the current tab
//     chrome.tabs.executeScript(tabs[0].id, {
//       code: 'start()',
//     });
//   });
// });

function start() {
  replaceText2();
  replaceImg();
}

document.querySelector('#replace-btn').addEventListener('click', (e) => {
  // Get the current tab
  e.preventDefault();
  if (confirm('Are you sure?')) {
    alert('Here it comes!');

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      // Execute a content script in the current tab
      chrome.tabs.executeScript(tabs[0].id, {
        code: 'start();',
      });
    });
    chrome.runtime.sendMessage({ action: 'playSong' });
  }
});
document.querySelector('#refresh-btn').addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'stopMusic' });
  reloadPage();
});

// function start() {
//   if (confirm('are you sure?')) {
//     alert('here it comes!');
//     replaceText();
//     replaceImg();
//     audio.play();
//   } else {
//     alert('thought so coward!');
//   }
// }
