import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import Logo from "../components/Logo/Logo";

export default function Home() {
    return (
        <>
            <div className="flex lg:flex-row flex-col lg:gap-0 gap-10 min-h-screen items-center lg:justify-normal justify-center p-10 max-w-6xl mx-auto">
                <div className="lg:w-5/12 w-full lg:block flex flex-col">
                    <div className="lg:block flex justify-center">
                        <Logo />
                    </div>
                    <h1 className="text-3xl mt-3 lg:text-left text-center">
                        Avec Facebook, partagez et restez en contact avec votre
                        entourage.
                    </h1>
                </div>
                <div className="lg:w-7/12 w-full flex lg:justify-end">
                    <div className="element lg:w-[400px] w-full">
                        {/* Login */}
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
                            <Button large>Se connecter</Button>
                        </form>

                        {/* Pass */}
                        <div className="flex justify-center mt-5">
                            <div className="text-blue-facebook hover:text-blue-500 duration-150 cursor-pointer">
                                Mot de passe oublié ?
                            </div>
                        </div>

                        {/* Separator */}
                        <hr className="my-5" />

                        {/* Sign */}
                        <div className="flex justify-center">
                            <Link to="/signup">
                                <Button green>Créer un nouveau compte</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
