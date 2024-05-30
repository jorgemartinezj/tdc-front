import { Routes, Route } from "react-router-dom";

import {
  Layout,
  Home,
  Productos,
  Plazos,
} from './components';

function App() {
  return <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/plazos" element={<Plazos />} />
    </Routes>
  </Layout>;
}

export default App;
