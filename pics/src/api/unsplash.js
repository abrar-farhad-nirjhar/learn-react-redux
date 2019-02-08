import axios from "axios";


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 98b4143e467679547a8668cd3cec17d728ac12a3a47f0ad2d72a7aab4696a89e' 
    }
});