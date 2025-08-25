import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import Logo from "../components/Logo/Logo";
import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";

export default function Home() {
  // States //
  //const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);

  // UseForm //

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  // Cycles : useRef //
  // const email = useRef("");
  // const password = useRef("");

  // Utilisation du UseEffect qui va s'exécuter dès que nous allons avoir notre email
  // useEffect(() => {
  //   // On vérifie la syntaxe de l'email :
  //   if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) && email != "") {
  //     setEmailError("Veuilez saisir une adresse email valide.")
  //   } else {
  //     setEmailError("");
  //   }
  // }, [email]);

  // Function
  const onSubmit = async (data) => {
    if (loading) return;
    setLoading(true);

    await createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setLoading(false);
        navigate("/?success=true");
      })
      .catch((error) => {
        const { code, message } = error;
        if (code == "auth/email-already-in-use") {
          toast.error("Cet email est utilisé .");
        } else {
          toast.error(code);
        }
        setLoading(false);
      });

    //event.preventDefault();

    // let isValid = true;

    // // Vérfier la syntaxee de l'email //
    // if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email.current.value)) {
    //   isValid = false;
    // }

    // // Valider nos données de connexion //
    // if (isValid) {
    //   console.log(email.current.value, password.current.value);
    // }

    // On va utiliser le formData pour récupérer les données //
    // console.log(event.target)
    // const data = new FormData(event.target)
    // console.log(data.get("email"));
    // console.log(data.get("password"));

    // rénitiliser le fomulaire //
    // event.target.reset();
    // email.current.focus();
  };

  // const handleEmailBlur = () => {

  //   if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) && email != ""){
  //     setEmailError("Veuillez renseigner une adresse mail valide");

  //   } else {
  //     setEmailError("")
  //   }
  // };
  return (
    <>
      <div className="flex flex-col gap-10 justify-center items-center min-h-screen">
        <Logo />

        <div className="element lg:w-[400px] w-full">
          <div className="text-center text-lg mb-5">
            S&#39;inscrire sur Facebook
          </div>
          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              placeholder="Adresse e-mail"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Renseigner une adresse email valide.",
                },
              })}
              className={`input ${emailError && "bg-red-50"}`}
              // name="email"
              // required
              // value={email}
              // onChange={(event) => setEmail(event.target.value)}
              //ref={email}
              //onBlur={handleEmailBlur}
            />
            {errors.email && (
              <p className=" text-red-400 mb-10">{errors.email.message}</p>
            )}
            <input
              type="password"
              placeholder="Mot de passe"
              {...register("password", {
                required: true,
                minLength: {
                  value: 8,
                  message:
                    "Le mot de passe ne peut contenir moins de 8 caractères.",
                },
              })}
              className="input"
              // name="password"
              //   value={password}
              //   onChange={(event) => setPassword(event.target.value)}
              //ref={password}
            />
            {errors.password && (
              <p className=" text-red-400 mb-10">{errors.password.message}</p>
            )}
            <Button large disabled={loading}>
              S&#39;inscrire
            </Button>
          </form>

          {/* Pass */}
          <div className="flex justify-center mt-5">
            <div className="text-blue-facebook hover:text-blue-500 duration-150 cursor-pointer">
              <Link to="/">Déjà un compte ?</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
