import ColorfulText from "../components/ColorfulText"
import HomeButton from "../components/HomeButton"
import { IoMdSettings } from "react-icons/io";

const Home = () => {
    return(
        <section className="relative w-full h-[100vh] flex justify-center items-center bg-[url('../src/assets/img/bg.svg')]">
            <div className="flex flex-col justify-center items-center gap-10">
                <ColorfulText texto="Playground" size="giga"/>
                <ul className="flex flex-col justify-center items-center gap-2.5">
                    <HomeButton title="Jogar" link="/choose-game"/>
                    <HomeButton title="Créditos" link="/credits"/>
                </ul>
            </div>
            <div className="absolute top-2 right-2 text-4xl text-[#1686b6] hover:cursor-pointer hover:brightness-110 transition transform ease-in-out hover:rotate-[360deg]">
                <IoMdSettings />
            </div>

        </section>
    )
}

export default Home