// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

export const api = axios.create({
    baseURL : 'https://hamburgueria-kenzie-v2.herokuapp.com',
    timeout : 7000
})