import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import bgVideo from './assets/bg.mp4';



// Core Pages
import Nav from './Pages/Nav';
import Home from './Pages/Home';
import Societies from './Pages/societies';
import Events from './Pages/Events';
import FutureEventTimeLine from './Pages/FutureEventTimeLine';
import TopLeadership from './Pages/TopLeadership';
import FacltyAdv from './Pages/FacltyAdv';
import Team from './Pages/Team';
import Collaborators from './Pages/Collaborators';
import Contact from './Pages/Contact';


// Society Pages
import ComputerSociety from './Pages/societies/ComputerSociety';
import CommunicationSociety from './Pages/societies/CommunicationSociety';
import CircuitsAndSystemsSociety from './Pages/societies/CircuitsAndSystemsSociety';

// Events
import AllEvents from './Pages/AllEvents';
import VirtualVista2 from './Pages/events/computersociety/VirtualVista2';
import AIMastery from './Pages/events/computersociety/AIMastery';
import TechIgnition from './Pages/events/main/TechIgnition';

// Math Topics
import Vectors from './Pages/Mathematics/Vectors';
import Matrices from './Pages/Mathematics/Matrices';
import SVD from './Pages/Mathematics/SVD';
import Derivatives from './Pages/Mathematics/Derivatives';
import Provability from './Pages/Mathematics/Provability';
import Statistics from './Pages/Mathematics/Statistics';

// Programming Topics
import Datatypes from './Pages/Programming/Datatypes';
import Operators from './Pages/Programming/Operators';
import ControlStatements from './Pages/Programming/ControlStatements';
import Loops from './Pages/Programming/Loops';
import Arrays from './Pages/Programming/Arrays';
import Strings from './Pages/Programming/Strings';
import Lists from './Pages/Programming/Lists';
import Tuples from './Pages/Programming/Tuples';
import Dictionaries from './Pages/Programming/Dictionaries';
import Sets from './Pages/Programming/Sets';
import Functions from './Pages/Programming/Functions';
import RecursiveFunctions from './Pages/Programming/RecursiveFunctions';
import Libraries from './Pages/Programming/Libraries';

import TrackLearning from './Pages/tracklearning';

function App1() {
  return (
    <>
      <Nav />
      <Home />
      <Societies />
      <FutureEventTimeLine />
      <Events />
      <TopLeadership />
      <FacltyAdv />
      <Team />
      <Collaborators />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      {/* Background Video */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Main Routes */}
      <Routes>
        <Route path="/" element={<App1 />} />
        <Route path="/ComputerSociety" element={<ComputerSociety />} />
        <Route path="/CommunicationSociety" element={<CommunicationSociety />} />
        <Route path="/CircuitsAndSystemsSociety" element={<CircuitsAndSystemsSociety />} />
        <Route path="/events" element={<AllEvents />} />
        <Route path="/events/VirtualVista" element={<VirtualVista2 />} />
        <Route path="/events/TechIgnition" element={<TechIgnition />} />
        <Route path="/events/AIMastery" element={<AIMastery />} />

        {/* Math */}
        <Route path="/vectors" element={<Vectors />} />
        <Route path="/matrices" element={<Matrices />} />
        <Route path="/svd" element={<SVD />} />
        <Route path="/derivatives" element={<Derivatives />} />
        <Route path="/provability" element={<Provability />} />
        <Route path="/statistics" element={<Statistics />} />

        {/* Programming */}
        <Route path="/datatypes" element={<Datatypes />} />
        <Route path="/operators" element={<Operators />} />
        <Route path="/control-statements" element={<ControlStatements />} />
        <Route path="/loops" element={<Loops />} />
        <Route path="/arrays" element={<Arrays />} />
        <Route path="/strings" element={<Strings />} />
        <Route path="/lists" element={<Lists />} />
        <Route path="/tuples" element={<Tuples />} />
        <Route path="/dictionaries" element={<Dictionaries />} />
        <Route path="/sets" element={<Sets />} />
        <Route path="/functions" element={<Functions />} />
        <Route path="/recursive-functions" element={<RecursiveFunctions />} />
        <Route path="/libraries" element={<Libraries />} />

        {/* Track Learning */}
        <Route path="/tracklearning" element={<TrackLearning />} />
      </Routes>


    </Router>
  );
}

export default App;
