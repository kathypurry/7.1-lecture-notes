let obj = { username: "kat" }
console.log(obj)
let string = JSON.stringify(obj)
console.log(string)
fetch("https://alejos-todos-api.herokuapp.com/api/users/signup", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: string,
})
  .then((res) => {
    return res.json()
  })
  .then((json) => {
    console.log(json)
  })
  .catch((err) => {
    console.error(err)
  })


// fetch('https://alejos-todos-api.herokuapp.com/api/users').then(response => {
//   console.log(response)
//   let res = response.json()
//   return res
// }).then(body => {
//   console.log(body)
// })




// const myFirstPromise = fetch('https://alejos-todos-api.herokuapp.com/api/users')

// console.log(myFirstPromise)

// const promise = fetch('https://alejos-todos-api.herokuapp.com/api/users')
// console.log(promise)
// promise.then(response => console.log(response))
// console.log('Hi there everybody')

// fetch('https://alejos-todos-api.herokuapp.com/api/users')
//     .then(response => {
//         return response.json()
//     }) .then (body=> {
//         console.log(body)
//     }) .then (users => {

//     })

// fetch('https://alejos-todos-api.herokuapp.com/api/todos').then(response => {
//   return response.json()
// }).then(todos => {
//     return todos.payload[0]
// }).then(todos =>{
//     console.log(todos)
// })
