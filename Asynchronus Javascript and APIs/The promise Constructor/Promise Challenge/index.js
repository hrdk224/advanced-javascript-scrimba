function preLoading(url) {
    /*
    Challenge:
    1. Return a new promise. The promise should:
       - create a new image and assign the incoming url
         to its src attribut.(Use the image constructor 
         for this!)
       - listen out for a load event. If a load event is detected,
         the promise should resolve, providing the image element.
       - listen out for an "error" event. If an error event is 
         detected, the promise should reject giving the message 
         "img has NOT loaded".      
     */
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = url
        img.alt = "A beautiful scenary"
        img.addEventListener('load', () => resolve(img))
        img.addEventListener('error', () => reject("image has not loaded"))
    })
}

try {
    const results = await preLoading('https://scrimba.ams3.cdn.digitaloceanspaces.com/assets/courses/gadvancedjs/scenic1.jpg')
    console.log(results)
    document.getElementById('img-container').appendChild(results)
} catch (error) {
    console.log(error)
}