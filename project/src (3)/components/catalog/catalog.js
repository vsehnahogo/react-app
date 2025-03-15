import "./catalog.css";
import GamePad from '../../media/console.png';
import Logo from '../../media/js.png';
import App from '../../media/application.png';
import Library from '../../media/music-library.png';
import NewProduct from '../../media/add.png';
import { useState } from 'react';
import Product from '../../components/product/product'

function Catalog() {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <div className="Catalog">
      <div className="leftMenu">
        <div className="logoContainer">
          <img src={Logo} alt="Logo" />
          <p>My site</p>
        </div>
        <div className={`menuElement ${activeMenu === 'games' ? 'active' : ''}`} onClick={() => setActiveMenu('games')}>
          <img src={GamePad} alt="GamePad" />
          <p>Каталог игр</p>
          <p></p>
        </div>
        {activeMenu === 'games' && (
          <div className="submenu">
            <p>Новости</p>
            <p>Новинки</p>
            <p>Скидки</p>
            <p>Разделы</p>
          </div>
        )}
        <div className={`menuElement ${activeMenu === 'apps' ? 'active' : ''}`} onClick={() => setActiveMenu('apps')}>
          <img src={App} alt="App" />
          <p>Каталог приложений</p>
        </div>
        {activeMenu === 'apps' && (
          <div className="submenu">
            <p>Подробнее о Каталоге приложений</p>
          </div>
        )}
        <div className={`menuElement ${activeMenu === 'new' ? 'active' : ''}`} onClick={() => setActiveMenu('new')}>
          <img src={NewProduct} alt="NewProduct" />
          <p>Новинки</p>
        </div>
        {activeMenu === 'new' && (
          <div className="submenu">
            <p>Подробнее о Новинках</p>
          </div>
        )}
        <div className={`menuElement ${activeMenu === 'library' ? 'active' : ''}`} onClick={() => setActiveMenu('library')}>
          <img src={Library} alt="Library" />
          <p>Библиотека</p>
        </div>
        {activeMenu === 'library' && (
          <div className="submenu">
            <p>Подробнее о Библиотеке</p>
          </div>

        )}
      </div>
      <div className="mainSide">
        <Product/>
        <div className="Products">
          
        </div>
      </div>
      <div className="filterSide">

      </div>
    </div>
  );
}

export default Catalog;