// within this file, we are going to create a function that fetch a data from the api server
export default{
    getRandomWyr(){ // here we make the call fetch and once we get the data, we send back the response in json
        return fetch('/wyr').then(response => {
            return response.json();
        })
    }
}