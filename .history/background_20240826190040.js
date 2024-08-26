//Create a file named background.js. This script will handle blocking websites and managing time limits.



const DEFAULT_BLOCKED_SITES=[
    'facebook.com',
    'twitter.com',
    'instagram.com'
]



chrome.storage.sync.get(['blockedSites'],function(result){
    let blockedSites  =result.blockedSites || DEFAULT_BLOCKED_SITES;
    setupBlocking(blockedSites)
})



function setupBlocking(blockedSites){
    chrome.webRequest.onBeforeRequest.addListener(
        function(details){
            return{
                cancel:true
        }
        ,{
            urls:blockedSites.map(site=>`*://${site}/*`)
        },
            ['blocking']
        }
    )
}


chrome.storage.onChanged.addListener(function)