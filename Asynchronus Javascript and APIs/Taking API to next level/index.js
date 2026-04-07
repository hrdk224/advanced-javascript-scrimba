/*
   CHALLENGE
   Base Url : https://apis.scrimba.com/jsonplaceholder
   Endpoint : /posts
   1. Make a fetch request to get all of the available posts.

*/

try {
    const response = await fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    const data = await response.json()
    //console.log(data)
    if (!response.ok) {
        throw new Error('There was an error in API')
    }
} catch (err) {
    console.log(err)
} finally {
    console.log('Completed excecution')
}