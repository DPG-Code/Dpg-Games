import Results from "../components/Results"
import Search from "../components/Search"
import { Link, Route } from "wouter";

function Home() {
  return (
    <main>
        <h1>App</h1>
        <Link to="/games/pc/shooter/popularity">Pc - shooter/popularity</Link>
        <Link to="/games/browser/shooter/popularity">Browser - shooter/popularity</Link>
        <Route path="/games/:platform/:category/:sort" component={Results} />
    </main>
  )
}

export default Home