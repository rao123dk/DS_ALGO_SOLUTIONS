const debounce = (func, delay) => {
    let debounceTimer
    return function() {
        const context = this
        const args = arguments
        debounceTimer && clearTimeout(debounceTimer)
        debounceTimer = setTimeout(() => func.apply(context, args), delay)
    }
}


var res = debounce(function(){console.log("Hello world")}, 2000)

res("ok")