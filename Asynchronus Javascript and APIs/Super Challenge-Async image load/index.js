function getImagePromise(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const img = new Image()
            img.src = url
            img.alt = 'scenic image'
            img.addEventListener('load', () => resolve(img))
            img.addEventListener('error', () => reject(new Error('Failed to load image: ${url}')))

        }, 500)
    })
}

const images = [
    'https://scrimba.com/links/advancedjs-resources-images-scenic1',
    'https://scrimba.com/links/advancedjs-resources-images-scenic2',
    'https://scrimba.com/links/advancedjs-resources-images-scenic3',
]

async function preloadImages(imageUrlsArr) {
    const imgContainer = document.getElementById('img-container')
    const uploadContainer = document.getElementById('upload-container')
    /*
    Challenge:
      1. Create an array of promises using getImagePromise.
      2. Save the results of calling all of those promises 
         in one go to a const 'results'.
      3. If the promises resolve:   
        - log "All images loaded successfully !".
        - hide 'uploadContainer'
        - iterate over the results and render them to imgContainer
      4. If promises reject:
        - catch and log the error.     
    */
    const promises = imageUrlsArr.map((url) => getImagePromise(url))
    try {
        const results = await Promise.all(promises)
        console.log('All images loaded successfully !')
        uploadContainer.style.display = 'none'
        results.map((img) => imgContainer.appendChild(img))
    } catch (err) {
        console.log(err)
    }

}

document.getElementById('submit-imgs').addEventListener('click', () => preloadImages(images))

/*
  My attempt: 
      try {
        const promise = []
        for (let i in images) {
            promise[i] = getImagePromise(images[i])
        }
        const results = await Promise.all(promise)
        console.log('All images loaded successfully !')
        uploadContainer.innerHTML = ' '
        results.forEach(imgElement => {
            imgContainer.appendChild(imgElement)
        })

    } catch (err) {
        console.log(err)
    }
*/