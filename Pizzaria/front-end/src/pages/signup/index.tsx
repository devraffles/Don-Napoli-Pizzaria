import Head from "next/head";
import Image from "next/image";
import style from "../../../styles/home.module.scss";

import logoImg from '../../../public/logo_Completa.png'

import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";

import Link from "next/link";

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Don Nápoli Pizzaria - Cadastro</title>
      </Head>

      <div className={style.conteinerCenter}>
        <Image className={style.logoImg} src={logoImg} alt="Logo Nome Don Nápoli Pizzaria"></Image>

        <div className={style.login}>
          <h1>Criando sua conta</h1>
          
          <form>
            <Input placeholder="Digite seu nome" type="text"/>
            
            <Input placeholder="Digite seu email" type="text"/>
            
            <Input placeholder="Digite sua senha" type="password"/>

            <Button type="submit" loading={false}>
              Cadastrar
            </Button>
          </form>
          
          <Link className={style.text} href="/">
            já possui uma conta? Faça Login!
          </Link>

        </div>
      </div>
    </>
  );
}
