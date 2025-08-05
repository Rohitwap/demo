import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Course from "./pages/Course";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Navbar from "./pages/Navbar";
import FullAI from './courses/FullAI';
import Footer from './pages/Footer';
import FullWeb from './courses/FullWeb';
import AdvancedUi from './courses/AdvancedUi';
import AdvanceDigital from './courses/AdvanceDigital';
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Course />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/fullai" element={<FullAI />} />
            <Route path="/fullweb" element={<FullWeb />} />
            <Route path='/advancedui' element={<AdvancedUi/>}/>
            <Route path='/advencedigital' element={<AdvanceDigital/>}/>
            {/* Remove the /footer route as it's not needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;