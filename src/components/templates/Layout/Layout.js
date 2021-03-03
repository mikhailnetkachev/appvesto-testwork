import PropTypes from 'prop-types';

import Header from '../../organisms/Header';
import classes from './styles.module.scss';

const Layout = ({ children }) => (
  <div className={classes.container}>
    <header className={classes.header}>
      <div className="wrapper">
        <Header />
      </div>
    </header>
    <main className={classes.main}>{children}</main>
    <footer className={classes.footer}>
      <div className="wrapper">
        <div>footer</div>
      </div>
    </footer>
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default Layout;
