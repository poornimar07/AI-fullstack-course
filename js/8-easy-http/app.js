
const http = new EasyHTTP();


http.get("https://691c8fa53aaeed735c9156e1.mockapi.io/api/v1/users")
.then(data => console.log(data))
.catch(err => console.log(err));

const myData = {
    name:"This is a test title update"
}

// http.post("https://691c8fa53aaeed735c9156e1.mockapi.io/api/v1/users", myData)
// .then(data => console.log(data))
// .catch(err => console.log(err))

http.put("https://691c8fa53aaeed735c9156e1.mockapi.io/api/v1/users/52", myData)
.then(data => console.log(data))
.catch(err => console.log(err))


http.delete("https://691c8fa53aaeed735c9156e1.mockapi.io/api/v1/users/51")
.then(data => console.log(data))
.catch(err => console.log(err))