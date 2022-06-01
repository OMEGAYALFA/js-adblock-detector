# Lightweight JS AdBlock detection library

### [Demo](https://0-day.pw/adbdetector/)

## Usage
```html
<script src="path/to/adblockdetector.min.js"></script>
<script>
    // check adblock on page load
    AdBlockDetector.onDetect = function(){
        // do something
    }
    
    // or check if necessary
    AdBlockDetector.check(function(){
        // do something
    })
</script>
```

## License
[MIT](https://github.com/zoto-ff/js-adblock-detector/blob/main/LICENSE)
