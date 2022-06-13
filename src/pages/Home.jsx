import { Link, Route } from "wouter";
import HomeResult from "./HomeResult";
import GetDefault from "../services/GetDefault";

function Home() {
  return (
    <main>
        <h1>App</h1>
        <Link to='/'>Home</Link>
        <Route path="/" component={HomeResult} />
        <Route path="/games/:platform/:category/:sort" component={HomeResult} />

        <section>
          <GetDefault />
        </section>
    </main>
  )
}

export default Home
