import axios from 'axios';

// base url: https://api-ssl.bitly.com/v4/

// key: b644b6e2b51f0f4dea8d8bb93dbffe7a612e51d2

export const key = 'b644b6e2b51f0f4dea8d8bb93dbffe7a612e51d2';

const api = axios.create({

    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {

        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ key }`

    }

})

export default api;

