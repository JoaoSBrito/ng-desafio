import axios from "axios";

export default class UserServices {
  axios: any;
  constructor() {
    this.axios = axios.create({
      baseURL: import.meta.env.REACT_APP_LOGIN_API,
    });

    async (dados: any) => {
      const { data } = await this.axios.post("/login", dados);

      if (data) {
        localStorage.setItem("nome", data.user.name);
        localStorage.setItem("token", data.user.token);

        return true;
      }
      return;
    };
  }
}
