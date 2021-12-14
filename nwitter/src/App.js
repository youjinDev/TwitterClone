import AppRouter from "./components/Router";
import firebase from "./firebase";

function App() {
  console.log(firebase);

  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
