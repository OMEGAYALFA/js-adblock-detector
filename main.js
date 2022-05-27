window.AdBlockDetector = {
    checkAdBlock (onDetect=()=>{}){
        fetch(window.location.protocol + '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js').catch(() => {
            onDetect()
        })
    },
    onDetect: undefined
}

document.addEventListener("DOMContentLoaded", function(){
    if(AdBlockDetector.onDetect !== undefined){
        AdBlockDetector.checkAdBlock(AdBlockDetector.onDetect)
    }
})