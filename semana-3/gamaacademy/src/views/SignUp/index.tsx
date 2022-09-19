import React, { useState, useCallback, FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom"; //trocou o useHistory por useNavigate
import { toast } from "react-toastify";
import Loader from "../../components/Loader";

import { Container } from "./style";
import { api } from "../../services/api";

interface IData {
  registro: string;
  nome: string;
  telefone: string;
  celular: string;
  email: string;
  senha: string;
  profissao: string;
}
const SignUp: React.FC = () => {
  const [data, setData] = useState<IData>({} as IData);
  const [load, setLoad] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoad(true);
      api.post("specialist", data).then(response => {
        setLoad(true);
        // console.log(response.data);
        toast.success("Cadastro realizado com sucesso!", {
          hideProgressBar: false,
          onClose: () => navigate("/signin"),
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
        <h5>Cadastra-se</h5>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Informe seu registro"
            onChange={(e) => setData({ ...data, registro: e.target.value })}
          />
          <input
            type="text"
            placeholder="Informe seu nome"
            onChange={(e) => setData({ ...data, nome: e.target.value })}
          />
          <input
            type="text"
            placeholder="Informe seu telefone"
            onChange={(e) => setData({ ...data, telefone: e.target.value })}
          />
          <input
            type="text"
            placeholder="Informe seu celular"
            onChange={(e) => setData({ ...data, celular: e.target.value })}
          />
          <input
            type="email"
            placeholder="Informe seu email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Informe seu senha"
            onChange={(e) => setData({ ...data, senha: e.target.value })}
          />
          <input
            type="text"
            placeholder="Informe seu profissao"
            onChange={(e) => setData({ ...data, profissao: e.target.value })}
          />
          <input type="submit" value="Cadastrar" />
        </form>
        <Link to="/signin">Fazer Login</Link>
      </div>
    </Container>
  );
};

export default SignUp;
