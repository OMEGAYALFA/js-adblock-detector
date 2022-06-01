window.AdBlockDetector = {
    check (onDetect=()=>{}){
        fetch(window.location.protocol + '/js/prebid-ads.js').catch(() => {
            onDetect()
        })
    },
    onDetect: undefined
}

document.addEventListener("DOMContentLoaded", function(){
    if(AdBlockDetector.onDetect !== undefined){
        AdBlockDetector.check(AdBlockDetector.onDetect)
    }
})