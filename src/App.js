import { NavbarComponent } from './components/NavbarComponent/NavbarComponent';
import { FooterComponent } from './components/FooterComponent/FooterComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/global.scss';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
