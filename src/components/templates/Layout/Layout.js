import PropTypes from 'prop-types';

import classes from './styles.module.scss';

const Layout = ({ children }) => (
  <div className={classes.container}>
    <header className={classes.header}>header</header>
    <main className={classes.main}>{children}</main>
    <footer className={classes.footer}>footer</footer>
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default Layout;
