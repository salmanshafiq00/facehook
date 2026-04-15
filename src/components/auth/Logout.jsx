import LogoutIcon from '../../assets/icons/logout.svg';
import { useNavigate } from 'react-router';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('User logged out');
    navigate('/login');
  };

  return (
    <button className="icon-btn" onClick={handleLogout}>
      <img src={LogoutIcon} alt="Logout" />
    </button>
  );
};
export default Logout;