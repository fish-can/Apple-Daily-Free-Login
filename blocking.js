chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === 'loading') {
      chrome.tabs.executeScript(tabId, {
        code: `
          const theScript = document.createElement('script');
          theScript.innerHTML = "const paywall = NULL;";
          document.documentElement.appendChild(theScript);
        `,
        allFrames: true,
        runAt: "document_start",
      });
    }
});