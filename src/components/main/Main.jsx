import style from "./Main.module.css";
import Login from "../login/Login";

export default function Main() { 
    return (
        <main className={style.main_container}>
            <div className={style.main_description}>
                <span className={style.main_highlight_description1}>
                    Organize
                </span>
                
                <span className={style.main_highlight_description2}>
                    Descubra
                </span>
                
                <span className={style.main_highlight_description3}>
                    Participe
                </span> 
            </div>
            <h2 className={style.main_title}>Descubra Seu Próximo Evento</h2>
            {/* aqui colocarei um input de busca mais tarde. */}

        </main>
    )
}
