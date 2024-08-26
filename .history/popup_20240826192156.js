document.addEventListener('DOMContentLoaded',function(){
    const siteInput = document.getElementById('site-input');
    const addSiteButton = document.getElementById('add-site');
    const siteList = document.getElementById('site-list');
    chrome.storage.sync.get(['blockedSites'], function(result) {
        const blockedSites = result.blockedSites || [];
        blockedSites.forEach(site => addSiteToList(site));
      });
})
addSiteButton.addEventListener('click', function() {
    const site = siteInput.value.trim();
    if (site) {
      chrome.storage.sync.get(['blockedSites'], function(result) {
        const blockedSites = result.blockedSites || [];
        if (!blockedSites.includes(site)) {
          blockedSites.push(site);
          chrome.storage.sync.set({ blockedSites: blockedSites }, function() {
            addSiteToList(site);
            siteInput.value = '';
          });
        }
      });
    }
  });
  function addSiteToList(site) {
    const listItem = document.createElement('li');
    listItem.textContent = site;
    siteList.appendChild(listItem);
  };ggggggggggggggggggggggggggggggggggggggggggggg