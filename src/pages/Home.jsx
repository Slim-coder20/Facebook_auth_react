import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import Logo from "../components/Logo/Logo";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../store/AuthProvider";

export default function Home() {
  // State //
  const [emailError, setEmailError] = useState("");

  // UseForm //
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { loginUser } = useContext(AuthContext);

  // State
  const [loading, setLoading] = useState(false);

  // Fonction //
  const onSubmit = (data) => {
    if (loading) return;
    loginUser(data.email, data.password)
      .then((userCredential) => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        const { code, message } = error;
        if (code == "auth/user-not-found") {
          toast.error("Cet email n'existe pas.");
        } else if (code == "auth/invalid-credential") {
          toast.error("La combinaison est incorrect.");
        } else {
          toast.error(code);
        }
      });
  };

  return (
    <>
      <div className="flex lg:flex-row flex-col lg:gap-0 gap-10 min-h-screen items-center lg:justify-normal justify-center p-10 max-w-6xl mx-auto">
        <div className="lg:w-5/12 w-full lg:block flex flex-col">
          <div className="lg:block flex justify-center">
            <Logo />
          </div>
          <h1 className="text-3xl mt-3 lg:text-left text-center">
            Avec Facebook, partagez et restez en contact avec votre entourage.
          </h1>
        </div>
        <div className="lg:w-7/12 w-full flex lg:justify-end">
          <div className="element lg:w-[400px] w-full">
            {/* Login */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="email"
                placeholder="Adresse e-mail"
                className={`input ${emailError && "bg-red-50"}`}
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Renseigner un email valide. ",
                  },
                })}
              />
              {errors.email && (
                <p className=" text-red-400 mb-10">{errors.email.message}</p>
              )}
              <input
                type="password"
                placeholder="Mot de passe"
                className={`input ${emailError && "bg-red-50"}`}
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 8,
                    message:
                      "Le mot de passe doit contenir au moins 8 caractères",
                  },
                })}
              />
              {errors.password && (
                <p className=" text-red-400 mb-10">{errors.password.message}</p>
              )}
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
