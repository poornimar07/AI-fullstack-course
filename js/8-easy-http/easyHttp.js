

class EasyHTTP{

    // Make an get request 

    get(url){

        return new Promise((reslove, reject) => {
           fetch(url)
           .then(res => res.json())
           .then(data => reslove(data))
           .catch(err => reject("Some thing went worng"))
        })

    }


    // Make a post request
    post(url, data){

        return new Promise((resolve, reject) => {

            fetch(url, {
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject("Some thing went worng"))

        })

    }

     // Make a update request
     put(url, data){

        return new Promise((resolve, reject) => {

            fetch(url, {
                method:"PUT",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject("Some thing went worng"))

        })

    }

    // Make a update request
    delete(url){

        return new Promise((resolve, reject) => {

            fetch(url, {
                method:"DELETE",
                headers:{
                    "Content-type":"application/json"
                }
            })
            .then(res => res.json())
            .then(data => resolve("Resource Deleted"))
            .catch(err => reject("Some thing went worng"))

        })

    }

}