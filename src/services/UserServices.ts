import axios from "axios";
const urlBase = "https://anotadin-api.herokuapp.com/api"
export default class UserServices {
  axios:any

  constructor () {
    this.axios = axios.create({
      baseURL: import.meta.url = urlBase
    })
  }

  async login (dados:any) {
    const { data } = await this.axios.post('/login', dados)

    if (data) {
      localStorage.setItem("nome", data.user.name)
      localStorage.setItem("token", data.token.token)

      return true
    }

    return
  }

  // async cadastrar (dados:any) {
  //   return this.axios.post('/user', dados)
  // }

  // usuarioAutenticado () {
  //   return localStorage.getItem("token") != undefined ? true : false
  //   // return typeof localStorage.getItem("token")
  // }

  //Desafio ---> implemente um botão que chama essa função dentro da página Home
  // async logout () {
  //   localStorage.removeItem("token")
  //   localStorage.removeItem("nome")
  //   localStorage.removeItem("email")
  // }
}
