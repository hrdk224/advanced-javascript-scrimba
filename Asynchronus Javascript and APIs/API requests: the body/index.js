/* 
   code snippet: 
   fetch('https://jsonplaceholder.typicode.com/posts',{
   method: 'POST',
   body: JSON.stringify({
     title: 'foo',
     body: 'bar',
     userId: 1,
   }), })

   Challenge:
   1. Using the code snippet in the slide. add a body 
      property to the object we are passing with the fetch 
      request. I want you to create a new post with the title
      "Holiday Nightmares" and the body "When I was kidnapped in Scotland..."

      In the console, you should see an object with an ID, for example:
      {id: 101}
   CODE: 
   try {
    const response = await fetch('https://apis.scrimba.com/jsonplaceholder/posts')  
    if (!response.ok) {
     throw new Error('There was a problem with the API')  
    }
     const data = await response.json()
     console.log(data)
    } catch(err) {
      console.log(err) 
    }
      */
try {
    const response = await fetch('https://apis.scrimba.com/jsonplaceholder/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Holiday Nightmares',
            body: 'When I was kidnapped in Scotland...',
            userId: 100,
        })
    })
    if (!response.ok) {
        throw new Error('There was a problem with the API')
    }
    const data = await response.json()
    console.log(data)
} catch (err) {
    console.log(err)
}
