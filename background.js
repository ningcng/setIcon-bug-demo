chrome.browserAction.onClicked.addListener(function() {
  chrome.browserAction.setIcon({
    path: {
      '19': 'icon_19_normal.png',
      '38': 'icon_38_normal.png',
    }
  });
  chrome.browserAction.setIcon({
    path: {
      '19': 'icon_19_severe.png',
      '38': 'icon_38_severe.png',
    }
  });
  chrome.browserAction.setIcon({
    path: {
      '19': 'icon_19_normal.png',
      '38': 'icon_38_normal.png',
    }
  });
});
