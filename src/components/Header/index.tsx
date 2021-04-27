import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";
import Link from "next/link";
import styles from "./styles.module.scss";

export function Header() {
    const currentDate = format(new Date(), 'EEEEEE, d MMMM',{
        locale: ptBR
    });


    return (
        <header className={styles.HeaderContainer}>
            <Link href={`/`}>
                <button type="button">
                    <img src="/logo.svg" alt="Podcastr" />
                </button>
            </Link>
            <p>O melhor pra você ouvir, sempre</p>
            <span>{currentDate}</span>
        </header>
    ); 
}