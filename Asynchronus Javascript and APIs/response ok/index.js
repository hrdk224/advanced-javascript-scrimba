/* 
  STATUS CODE BASICS
  - 200-299 = successful response: TRUE
  - 404 = not found: FALSE
  - 500 = server error: FALSE
*/

try {
    const response = fetch('https:dog.ceo/api/breeds/image/random')
    if (!response.ok) {
        throw new Error('There was a problem with the API')
    }
    const data = await response.json()
    console.log(data)
} catch (err) {
    console.log(err)
    // update the DOM to warn the user
    // access an alternative API
}
finally {
    console.log('The operation completed.')
}