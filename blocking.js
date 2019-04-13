chrome.webRequest.onBeforeRequest.addListener(
  function () { return {cancel: true}; },
  {
    urls: ['https://img.appledaily.com.tw/pay/js/paywall.20190410.js'],
    types: ['script']
  },
  ['blocking']
)