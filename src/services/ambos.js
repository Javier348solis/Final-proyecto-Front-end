const API="http://localhost:3001/"

const postData = async(endpoint,obj)=>{
    const response = await fetch(API+endpoint,{
        method:"POST",
        body:JSON.stringify(obj),
        headers:{
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    const data = await response.json()
    console.log(data);
}