/*! NewWall  - chrome.js
Copyright (c) 2020 AmMedia. All rights reserved.

All portions of this file are the confidential and proprietary
intellectual property of AmMedia - NewWall.

*/
chrome.browserAction.onClicked.addEventListener(function () {
  chrome.tabs.create({ url: "chrome://newtab" });
});
