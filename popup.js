document.addEventListener('DOMContentLoaded',function(){
    const siteInput = document.getElementById('site-input');
    const addSiteButton = document.getElementById('add-site');
    const siteList = document.getElementById('site-list');
    chrome.storage.sync.get(['blockedSites'], function(result) {
        const blockedSites = result.blockedSites || [];
        blockedSites.forEach(site => addSiteToList(site));
      });
})