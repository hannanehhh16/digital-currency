import './App.css';
import FooterComponent from './components/ui/Footer.Component';
import NavbarComponent from './components/ui/navbar.component';
import WrapperComponent from './components/ui/wrapper.component';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <WrapperComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
