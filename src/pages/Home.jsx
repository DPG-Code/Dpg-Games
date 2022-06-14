import { Link, Route } from "wouter";
import SearchByTitle from "./SearchByTitle";
import ResultsSearch from "../components/ResultsSearch";
import SearchByFilters from "./SearchByFilters";
import GetDefault from "../services/GetDefault";

function Home() {
  return (
    <main>
        <h1>Games</h1>
        <Link to='/'>Home</Link>

        <Link to="/search">Search</Link>
        <Route path="/search" component={SearchByTitle} />
        <Route path="/search/:keyword" component={ResultsSearch} />

        <Link to='/games'>Filters</Link>
        <Route path="/games" component={SearchByFilters} />
        <Route path="/games/:platform/:category/:sort" component={SearchByFilters} />

        <Route path="/" component={GetDefault} />
    </main>
  )
}

export default Home
