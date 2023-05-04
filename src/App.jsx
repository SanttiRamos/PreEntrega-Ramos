import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"


export default function App() {
  return(
  <>
    <header>
      <NavBar />
    </header>
    <main>
      <ItemListContainer saludo="Hola, bienvenido a mi proyecto" />
    </main>
  </>
  )
}

