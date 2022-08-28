import { Routes, Route } from "react-router-dom";
import { Template } from "./components/Template";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Works } from "./components/Works";
import { Contact } from "./components/Contact";

const App = () => {
  return (
    <Template>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Template>
  );
};

export default App;
