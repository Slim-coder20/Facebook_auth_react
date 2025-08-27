import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../store/AuthProvider";
import { ClipLoader } from "react-spinners";

export default function Main() {
  // Variables //
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className=" flex justify-center items-center h-screen ">
        < ClipLoader />
      </div>
    );
  }
  return (
    <div>
      <Outlet />
    </div>
  );
}
