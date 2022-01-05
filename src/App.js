
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';
import Alertt from './components/Alertt';
import Bodybody from './components/Bodybody';
import FormeForme from './components/FormeForme';
import LAyout from './components/LAyout';

import { Navebar } from './components/Navebar';

function App() {
  return (
    <div className="App">
     
      <Navebar/>
   <FormeForme/>
   <Bodybody/>
   <LAyout/>
<Alertt/>
    </div>
  );
}

export default App;
