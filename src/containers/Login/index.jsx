import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {  useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import Logo from "../../assets/wburguer.png";
import {
  Container,
  InputContainer,
  LeftContainer,
  RightContainer,
  Title,
  Form,
  Link,
} from "./styles";

import { Button } from "../../components/Button";
import { api } from "../../services/api";

export function Login() {
  const navigate = useNavigate();

  const schema = yup
    .object({
      email: yup
        .string()
        .email("Digite um e-mail válido")
        .required("O e-mail é obrigatório"),
      password: yup
        .string()
        .min(6, "A senha deve ter pelo menos 6 caracteres")
        .required("Digite uma senha"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

  const onSubmit = async (data) => {
    const response = await toast.promise(
      api.post("/session", {
        email: data.email,
        password: data.password,
      }),
      {
        pending: "Verificando seus dados",
        success: {
          render() {
            setTimeout(() => {
              navigate("/");
            }, 2000);

            return "Seja Bem-Vindo(a)";
          },
        },
        error: "Email ou Senha Incorretos 🤯",
      }
    );

    console.log(response);
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="teste" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span>WBurguer!</span>
          <br />
          Acesse com seu<span> Login e senha.</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Email</label>
            <input type="email" {...register("email")} />
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input type="password" {...register("password")} />
            <p>{errors?.password?.message}</p>
          </InputContainer>
          <Button type="submit">Entrar</Button>
        </Form>

        <p>
          Nao possui conta? <Link to="/cadastro">Clique aqui.</Link>
        </p>
      </RightContainer>
    </Container>
  );
}
