import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Course from "./pages/Course";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Navbar from "./pages/Navbar"; // Moved to components folder
import FullAI from './courses/FullAI';
import Footer from './pages/Footer'; // Moved to components folder
import FullWeb from './courses/FullWeb';
import AdvancedUi from './courses/AdvancedUi';
import AdvanceDigital from './courses/AdvanceDigital';
import MobileApp from './courses/MobileApp';
import Resources from './pages/Resourses'; // Fixed typo in filename
import Career from "./pages/Career";
import Placement from "./pages/Placement";
import Gallery from "./pages/Gallery";
import HireUp from "./pages/HireUp";
import Refer from "./pages/Rafer"; // Fixed typo in filename
import NotFound from "./pages/NotFound";

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
            <Route path="/advancedui" element={<AdvancedUi />} />
            <Route path="/advancedigital" element={<AdvanceDigital />} />
            <Route path="/mobileapp" element={<MobileApp />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/career" element={<Career />} />
            <Route path="/placement" element={<Placement />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/hire" element={<HireUp />} />
            <Route path="/refer" element={<Refer />} />
            <Route path="*" element={<NotFound />} /> {/* Added catch-all route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;