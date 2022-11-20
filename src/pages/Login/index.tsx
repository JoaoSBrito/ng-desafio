import { ChangeEvent, ChangeEventHandler, FormEvent, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { validatePassword, validateUser } from "../../utils/validations";
import { ContainerSignUp, LoginContainer, LoginForm } from "./styles";
import UserService from "../../services/UserServices";

// interface FormProps {
//   username: string;
//   password: string;
// }

const userService = new UserService();

export function Login() {
  const [loading, setLoading] = useState(Boolean);
  const [form, setForm] = useState({ username: "", password: "" });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await userService.login(form);
      console.log("response do Login", response);
      if (response === true) {
        alert("usuário Logado com Sucesso");
        // navigate('/home')
      }
      setLoading(false);
    } catch (err) {
      alert("Algo deu errado com o Login" + err);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    // console.log("Digitando", event.target.name, event.target.value);
    setForm({ ...form, [event.target.name]: event.target.value });
    // console.log("Form", form);
  };

  const inputIsValid = () => {
    return validateUser(form.username) && validatePassword(form.password);
  };

  console.log(inputIsValid());

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <h1>Faça o seu Login!!</h1>

        <input
          name="username"
          type="text"
          placeholder="Digite o seu usuario!"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Digite a sua senha!"
          onChange={handleChange}
        />

        <button type="submit" disabled={loading === true || !inputIsValid()}>
          Entrar!
        </button>

        <ContainerSignUp>
          <p>Ainda não possui uma conta?</p>
          <Link to="">Cadastre-se</Link>
          {/* <a href="">Cadastre-se</a> */}
        </ContainerSignUp>
      </LoginForm>
    </LoginContainer>
  );
}
