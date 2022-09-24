import { Routes, Route } from "react-router-dom";

import { Template } from "./components/Template";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Works } from "./components/Works";
import { Contact } from "./components/Contact";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <Template>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </Template>
  );
};

export default App;
