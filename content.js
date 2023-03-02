function replaceText() {
    console.log(document.querySelectorAll('p'));
  
    const emojiMap = {
      ' ': ' ',
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
      l: '🥭',
      m: '🥛',
      n: '🍜',
      o: '🍊',
      p: '🍕',
      q: '🎂',
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
  
    const replaceArray = [
      'p',
      'ul',
      'ol',
      // 'a',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
    ];
  
    for (let o = 0; o < replaceArray.length; o++) {
      const pArray = document.querySelectorAll(replaceArray[o]);
  
      console.log(0);
      for (let i = 0; i < pArray.length; i++) {
        const text = pArray[i];
        let str = '';
  
        for (let e = 0; e < pArray[i].innerText.length; e++) {
          let letter = pArray[i].innerText[e].toLowerCase();
  
          if (emojiMap[letter]) {
            str += emojiMap[letter];
          }
        }
        pArray[i].innerText = str;
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
  