import { Link } from 'react-router-dom';

import { HomePage } from '../pages/HomePage';
const PageNotFound = () => {
  return (
    <div>
      <p>Sorry, page not found</p>
      <Link to={HomePage}>
        <span>{`Back to Home page`}</span>
      </Link>
    </div>
  );
};
export default PageNotFound;
