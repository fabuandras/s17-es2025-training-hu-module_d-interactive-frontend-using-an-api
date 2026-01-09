import { myAxios, getAuthHeaders } from "../services/api";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [serverError, setServerError] = useState(null);

  function hibakezeles(error) {
    const status = error.response?.status;

    if (status === 400) {
      setServerError("A megadott adatok nem szerepelnek az adatbázisban");
    } else if (status === 401) {
      setServerError(
        "A hitelesítési token érvénytelen vagy lejárt. Menj a login oldalra!"
      );
    } else if (status === 403) {
      setServerError("Nincs jogosultsága a kért művelethez!");
    } else if (status === 404) {
      setServerError("A kért erőforrás nem található!");
    } else if (status === 422) {
      setServerError("Validációs hiba");
    } else if (status === 500) {
      setServerError("Szerver hiba történt.");
    } else {
      setServerError("Ismeretlen hiba történt.");
    }
  }

  function login(adat) {
    setServerError(null);
    setLoading(true);

    myAxios
      .post("/users/login", adat)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        setToken(response.data.token);
        setUser(response.data.user);
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
        hibakezeles(error);
      })
      .finally(() => setLoading(false));
  }

  function register(adat) {
    setServerError(null);
    setLoading(true);

    myAxios
      .post("/users/register", adat)
      .then(() => {
        window.location.href = "/login";
      })
      .catch((error) => {
        console.log(error);
        hibakezeles(error);
      })
      .finally(() => setLoading(false));
  }

  function loadUser() {
    const savedToken = localStorage.getItem("token");

    if (!savedToken) {
      setLoading(false);
      setUser(null);
      return;
    }

    setToken(savedToken);
    setLoading(true);

    myAxios
      .get("/users/me", { headers: getAuthHeaders() })
      .then((response) => setUser(response.data))
      .catch((error) => {
        console.log(error);
        setUser(null);
        localStorage.removeItem("token");
      })
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    loadUser();
  }, []);

  function logout() {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    window.location.reload();
  }

  return (
    <AuthContext.Provider
      value={{
        login,
        register,
        loading,
        user,
        logout,
        serverError,
        loadUser,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
