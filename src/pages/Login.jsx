import { useState } from "react";
import FormLogin from "../components/Forms/FormLogin";
import { useAuthContext } from "../contexts/useAuthContext";
import { useNavigate } from "react-router-dom";
import { validateAccount } from "../services/mainApi";

const Login = () => {
  const { rememberMe, setRememberMe, login } = useAuthContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const accountForm = {
      email : email.trim().toLocaleLowerCase(),
      password : password.trim(),
    }

    try {
      const data = await validateAccount(accountForm);
      setLoading(false);

      if (data.error) {
        setError(data.error);
        return
      }

      if (data.login) {
        login(data.account, rememberMe);
        navigate("/");
      } else if (error) {
        setError("Cuenta no encontrada, intentelo de nuevo.");
      }
    } catch (error) {
      setLoading(false);
      setError("Imposible logear");
    }
  }

  return (
    <FormLogin
      loading={loading}
      error={error}
      handleChangeEmail={setEmail}
      handleChangePassword={setPassword}
      handleChangeRememberMe={setRememberMe}
      handleSubmit={handleSubmit}
    />
  );
};

export default Login;
