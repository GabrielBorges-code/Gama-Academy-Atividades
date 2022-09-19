import React, { useState, useCallback, FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom"; //trocou o useHistory por useNavigate
import { toast } from "react-toastify";
import Loader from "../../components/Loader";

import { Container } from "./style";
import { api } from "../../services/api";

interface IData {
  registro: string;
  senha: string;
}
const SignIn: React.FC = () => {
  const [data, setData] = useState<IData>({} as IData);
  const [load, setLoad] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoad(true);
      api.post("login", data).then(response => {
        const sessionToken = JSON.stringify(response.data.token);
        localStorage.setItem('@gamaServiceToken', sessionToken)
        setLoad(true);
        // console.log(response.data);
        toast.success("Login realizado com sucesso!", {
          hideProgressBar: false,
          onClose: () => navigate("/dashboard"),
        });
      }).catch( e => {
        toast.error("Oops, algo deu errado!")
      }).finally(() => setLoad(false));
    },
    [data, navigate]
  );

  if(load){
    return <Loader/>
  }

  return (
    <Container>
      <div className="card">
        <h5>Login</h5>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Informe seu registro"
            onChange={(e) => setData({ ...data, registro: e.target.value })}
          />
         
          <input
            type="password"
            placeholder="Informe seu senha"
            onChange={(e) => setData({ ...data, senha: e.target.value })}
          />
         
          <input type="submit" value="Logar" />
        </form>
        <Link to="/signup">Cadastra-se</Link>
      </div>
    </Container>
  );
};

export default SignIn;
