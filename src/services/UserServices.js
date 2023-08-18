import axios from 'axios'

export default class UserServices {
    constructor() {

        this.axios = axios.create({
            baseURL: process.env.REACT_APP_API_LOGIN,
            headers: {
                'Access-Control-Allow-Origin': '*',
                "Access-Control-Allow-Methods": 'GET,PUT,POST,DELETE',
            }
        })
    }
    async login(dados) {
        let boleano = false
        await this.axios.post('/login', dados).then(
            (res) => {
                localStorage.setItem('name', res.data.name);
                localStorage.setItem('token', res.data.token);
                console.log(res.data)
                boleano = true
            }

        ).catch((err) => {
            console.log(err)
        })

        return boleano

    }

    async register(dados) {
        let boleano = false
        await this.axios.post('/register', dados).then(
            (res) => {
                localStorage.setItem('name', res.data.name);
                localStorage.setItem('token', res.data.token);
                boleano = true
            }

        ).catch((err) => {
            console.log(err)
        })

        return boleano

    }

    usuarioAutenticado() {
        console.log(localStorage.getItem('token') )

        return localStorage.getItem('token') !== null ? true : false
    }

    async logout() {
        localStorage.removeItem("token")
        localStorage.removeItem("name")
    }
}