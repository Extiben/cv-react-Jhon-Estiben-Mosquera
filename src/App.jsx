// src/App.jsx
import CabeceraCV from './components/CabeceraCV';
import Perfil from './components/Perfil';
import Experiencia from './components/Experiencia';
import Educacion from './components/Educacion';

import { datosPersonales, resumen, experiencias, educacion } from './data';

function App() {
  return (
    <div>
      <CabeceraCV {...datosPersonales} />
      <Perfil resumen={resumen} />
      <Experiencia experiencias={experiencias} />
      <Educacion educacion={educacion} />
    </div>
  );
}

export default App;
