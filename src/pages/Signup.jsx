import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import Logo from "../components/Logo/Logo";

export default function Home() {
    return (
        <>
            <div className="flex flex-col gap-10 justify-center items-center min-h-screen">
                <Logo />

                <div className="element lg:w-[400px] w-full">
                    <div className="text-center text-lg mb-5">
                        S'inscrire sur Facebook
                    </div>
                    {/* Form */}
                    <form>
                        <input
                            type="text"
                            placeholder="Adresse e-mail"
                            className="input"
                        />
                        <input
                            type="text"
                            placeholder="Mot de passe"
                            className="input"
                        />
                        <Button large>S'inscrire</Button>
                    </form>

                    {/* Pass */}
                    <div className="flex justify-center mt-5">
                        <div className="text-blue-facebook hover:text-blue-500 duration-150 cursor-pointer">
                            <Link to="/">Pas de compte ?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
