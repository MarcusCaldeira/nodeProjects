const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve([1,7,10])
        reject('Things went wrong')
        resolve([2,3,2])
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log('Success',result)
}).catch((error) => {
    console.log('error', error)
})