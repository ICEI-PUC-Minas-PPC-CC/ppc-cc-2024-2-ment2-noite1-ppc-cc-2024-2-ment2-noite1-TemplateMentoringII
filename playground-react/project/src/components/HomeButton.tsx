import { useNavigate } from "react-router-dom";
import ColorfulText from "../components/ColorfulText"


const HomeButton = (props:any) => {
    const navigate = useNavigate(); // Hook para navegação

    // Função para navegar para a rota desejada
    const handleNavigate = (path: string) => {
      navigate(path);
    };
    
    return(
        <button onClick={() => handleNavigate(props.link)} className="w-64 h-14 bg-primary-bege rounded-lg font-comico text-2xl shadow-lg hover:brightness-105 transition ease-in-out hover:-translate-y-[.2rem] hover:scale-102">
            <ColorfulText texto={props.title} size="grande"/>
        </button>
    )
}

export default HomeButton