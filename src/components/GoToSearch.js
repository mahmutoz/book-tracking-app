import {Link} from "react-router-dom";
import {routes} from "../routes";

const GoToSearch = () => {
  const {searchPage} = routes;

  return <div className="open-search">
    <Link to={searchPage.path}>Add a book</Link>
  </div>
}

export default GoToSearch
