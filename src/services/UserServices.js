import axios from 'axios'

export default class UserServices {
    constructor(){
  
        this.axios = axios.create({
            baseURL:process.env.REACT_APP_API_LOGIN,
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                "Access-Control-Allow-Methods": 'GET,PUT,POST,DELETE',
            }
            })
    }
    async login(dados){
        const {data} = await this.axios.post('/login', dados)
        console.log(data)

        return true
    }

}