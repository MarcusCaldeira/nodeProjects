const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1,7,10])
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log('Success',result)

})