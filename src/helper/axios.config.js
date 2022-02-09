import axios from "axios"

const defaultOptions = {
    baseURL: `${process.env.REACT_APP_API_URL}`,
    // headers: {
    //     'Content-Type': 'application/json',
    // },
}

// Create instance
let myInstance = axios.create(defaultOptions)

// Set the AUTH token for any request
myInstance.interceptors.request.use((config) => {
    
    // axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('token')
    const token = sessionStorage.getItem('token')
    config.headers.Authorization =  token ? `Bearer ${token}` : ''
    
    return config
})


export default myInstance
