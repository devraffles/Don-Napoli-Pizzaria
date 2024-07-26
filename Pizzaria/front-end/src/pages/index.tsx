import Head from "next/head";
import Image from "next/image";
import style from "../../styles/home.module.scss";

import logoImg from '../../public/logo_Completo.png'

import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";

export default function Home() {
  return (
    <>
      <Head>
        <title>Don Nápoli Pizzaria - Login</title>
      </Head>

      <div className={style.conteinerCenter}>
        <Image className={style.logoImg} src={logoImg} alt="Logo Nome Don Nápoli Pizzaria"></Image>

        <div className={style.login}>
          <form>
            <Input placeholder="Digite seu email" type="text"/>
            
            <Input placeholder="Digite sua senha" type="password"/>

            <Button type="submit" loading={false}>
              Acessar
            </Button>
          </form>

          <a className={style.text}>Não possui uma conta? Cadastre-se</a>
        </div>
      </div>
    </>
  );
}
