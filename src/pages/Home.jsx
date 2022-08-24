import { Link, Route } from "wouter";
import HomeContent from "./HomeContent";
import SearchByTitle from "./SearchByTitle";
import ResultsSearch from "../components/ResultsSearch";
import SearchByFilters from "./SearchByFilters";
import GetDefault from "../services/GetDefault";
import Detail from "./Detail"
import './styles/Home.css'

function Home() {
  return (
    <main className="home-container">
        <header>
          <Link className="home" to='/'>FreeGames</Link>
          <Link className="all-games" to='/allgames'>All Games</Link>
          <SearchByTitle />
          <div className="avatar"><img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_940x529/public/media/image/2021/11/god-war-kratos-2525517.jpg?itok=IBKfz-l2" alt="profile" /></div>
        </header>

        <Route path="/" component={HomeContent}/>

        <section className="links-options">
          <Route path="/games" component={SearchByFilters} />
        </section>

        <section className="games-search">
          <Route path="/search/:keyword" component={ResultsSearch} />
        </section>

        <section className="games-filters">
          <Route path="/games/:platform/:category/:sort" component={SearchByFilters} />
        </section>

        <section className="games-home">
          <Route path="/allgames" component={GetDefault} />
        </section>

        <Route path="/game/:id" component={Detail}/>
    </main>
  )
}

export default Home
