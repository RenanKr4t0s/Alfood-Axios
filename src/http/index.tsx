import axios from 'axios';

const basicUrl = 'http://localhost:8000/api/'

const http = axios.create({
    baseURL: basicUrl + 'v2/'
})

export const httpV1Restaurantes = axios.create({
    baseURL: basicUrl + 'v1/restaurantes/'
})

export const httpRestaurantes = axios.create({
    baseURL: basicUrl + 'v2/restaurantes/'
})

export default http;