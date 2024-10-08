import style from "./page.module.scss";
import logoimg from '/public/logo-Nome-white.svg'

import Image from "next/image";
import Link from "next/link";

export default function Page() {
 return (
   <>
    <div className={style.containerCenter}>
      <Image
        src={logoimg}
        alt="Logo da Pizzaria"
        className={style.logo}
      />

      <section className={style.login}>
        <form>
          <input 
            type="email" 
            required
            name="email"
            placeholder="Digite seu email..."
            className={style.input}
          />

          <input 
            type="password" 
            required
            name="password"
            placeholder="*******************"
            className={style.input}
          />

          <button type="submit" className={style.button}>
            Acessar
          </button>

          
        </form>
        <Link href="/singup" className={style.text}>
            Não possui uma conta? Cadastre-se
        </Link>
      </section>
    </div>
   </>
 );
}