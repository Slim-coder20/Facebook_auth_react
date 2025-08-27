import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../store/AuthProvider";

export default function Main() {
  // Variables //
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className=" flex justify-center items-center h-screen ">
        chargement..
      </div>
    );
  }
  return (
    <div>
      <Outlet />
    </div>
  );
}
