import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav style={{
      backgroundColor: '#222',
      padding: '1rem',
      display: 'flex',
      gap: '1.5rem'
    }}>
      <NavLink to="/" style={{ color: '#fff' }}>Home</NavLink>
      <NavLink to="/saved" style={{ color: '#fff' }}>Potential Candidates</NavLink>
    </nav>
  );
};

export default Nav;
