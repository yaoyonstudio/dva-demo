import React from 'react';
import styles from './Common.scss'

const menus = [
  { id: 1, title: '首页', icon: '../../assets/menu_icons/tab_menu1.png', path: '/' },
  { id: 2, title: '文章', icon: '../../assets/menu_icons/tab_menu2.png', path: '/posts' },
  { id: 3, title: '测试', icon: '../../assets/menu_icons/tab_menu3.png', path: '/test' }
]

const AppTabMenu = () => {
  return (
    <div className={styles.AppTabMenu}>
      <ul className="flex-r flex-c-c">
        {menus.map((menu, index) => {
          return (
            <li className="flexItem" key={index}>{menu.title}</li>
          )
        })}
      </ul>
    </div>
  );
};

AppTabMenu.propTypes = {
};

export default AppTabMenu;
