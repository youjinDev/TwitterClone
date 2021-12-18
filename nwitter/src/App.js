import AppRouter from "./components/Router";
import firebase from "./firebase";
import GlobalStyle from "./GlobalStyle";

function App() {
  // console.log(firebase);

  return (
    <>
      <AppRouter />
      <GlobalStyle />
    </>
  );
}

export default App;
