import './styles/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

import Home from './webpages/home';
import IndustrialProjects from './webpages/industrialProjects';
import CaseStudies from './webpages/caseStudies';


function App() {

  return (

    <div>
      <Router>

        <Routes>

          <Route path="/" element={ <Home/> }/>

          <Route path="/case-studies" element={ <CaseStudies/> } />

          <Route path="/industrial-projects" element={ <IndustrialProjects/>} />

        </Routes>

      </Router>
    </div>

  );
}

export default App;
