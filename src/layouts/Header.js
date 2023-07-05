import { Link } from 'react-router-dom';

import { FaSearch, FaArrowLeft  } from 'react-icons/fa';

const Header = () => {
    return (
      <>
        <section>
          <Link to='/'><FaArrowLeft/> Dashboard</Link>
          <div>
            <FaSearch className="search-icon" />
            <input type="text" placeholder='Search' />
          </div>
        </section>
        <section>
          <p>notification</p>
        </section>
      </>
    );
  };
  
 
export default Header;