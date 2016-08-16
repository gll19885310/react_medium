require('normalize.css/normalize.css');
require('./layout.less');

import React from 'react';
import Header from './header/index.js';
import SideMenu from './side-menu/index.js';
import GridArticle from './grid-article/index.js';
import GridKeyArticle from './grid-key-article/index.js';


class Layout extends React.Component {
  render() {
    return (
      <div className="index">
      	<Header />
      	<GridArticle />
      	<GridKeyArticle />
      	{this.props.children}
      </div>
    );
  }
}

Layout.defaultProps = {
};

export default Layout;
