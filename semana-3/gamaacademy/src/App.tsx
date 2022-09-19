// import Home from "./views/Home";
import Router from "./routes";
import GlobalStyle from './styles/globalStyle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <ToastContainer/>
      <GlobalStyle />
      <Router />
    </>

  );
  
}

export default App;
