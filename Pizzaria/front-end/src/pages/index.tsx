import { useContext, FormEvent, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import style from "../../styles/home.module.scss";

import logoImg from '../../public/logo_Completa.png'

import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";

import { AuthContext } from "../contexts/AuthContext";

import Link from "next/link";

export default function Home() {
  const { singIn } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    let data = {
      email,
      password
    }

    await singIn(data);
  }

  return (
    <>
      <Head>
        <title>Don Nápoli Pizzaria - Login</title>
      </Head>

      <div className={style.conteinerCenter}>
        <Image className={style.logoImg} src={logoImg} alt="Logo Nome Don Nápoli Pizzaria"></Image>

        <div className={style.login}>
          <form onSubmit={handleLogin}>
            <Input 
              placeholder="Digite seu email" 
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            
            <Input 
              placeholder="Digite sua senha" 
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <Button 
              type="submit" 
              loading={false}
            >
              Acessar
            </Button>
          </form>

          <Link className={style.text} href="/signup">
            Não possui uma conta? Cadastre-se
          </Link>
        </div>
      </div>
    </>
  );
}
