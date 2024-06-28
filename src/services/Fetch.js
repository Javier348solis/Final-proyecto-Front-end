//Get
const apiUrl = "http://localhost:3001/"
const getData = async (endpoint,id="") => {
    try {
   
      const response = await fetch(apiUrl+endpoint+"/"+id);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al cargar los usuarios:', error);
    } 
  };
  export default getData
 //Post
const guardarUser = async (obj,endpoint) => {
    try {
        const response = await fetch(apiUrl+endpoint, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        const data = response.json()
        console.log(data);
        return data
    } catch (error) {
    }
}
export {guardarUser}














