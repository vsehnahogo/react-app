import './App.css';
// import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Catalog from './components/catalog/catalog';
//import Login from './components/login/login';
// import DetailProduct from './components/detail_product/detail_product';

function App() {
    return (
        <div>
            <Catalog/>
        </div>
        // <BrowserRouter>
        //     <Routes>
        //         <Route path="catalog" element={<Catalog />} />
        //         <Route path="login" element={<Login />} />
        //         <Route path="detail" element={<DetailProduct />} />
        //     </Routes>
        // </BrowserRouter>
    );
}

export default App;