import axios from 'axios';

export async function postDatas(url, data) {
   return axios
        .post(url, data)
        .then(response => response.data)
        .then(result => console.log(result))
        .catch(err => console.error(err))
}
