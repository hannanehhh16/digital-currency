import NavbarComponent from "./components/ui/Navbar.Component";
import FooterComponent from "./components/ui/Footer.Component";

import { Route, Routes} from "react-router-dom";
import HomePage from "./pages/Home.Page";
import AboutUsPage from "./pages/About-us.Page";
import ContactUsPage from "./pages/Contact-us.Page";
import FaqPage from "./pages/Faq.Page";
import Coinpage from "./pages/Coin.page";




function App() {
  return (
    <div>
      <NavbarComponent />
      <div>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coin/:id" element={<Coinpage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;