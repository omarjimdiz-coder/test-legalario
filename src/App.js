import { Routes, Route } from 'react-router-dom';
import Principal from './components/Principal';
import Ine from './components/Ine';
import Final from './components/Final';
import './scss/base.scss';
import ConfirmPhoto from './components/ConfirmPhoto';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/ine/" element={<Ine />} />
        <Route path="/ine/confirmphoto" element={<ConfirmPhoto />} />
      </Routes>
      <Final 
        message={"Revisa que los documentos sean claros y legibles"}
      />
    </>
  );
}

export default App;
