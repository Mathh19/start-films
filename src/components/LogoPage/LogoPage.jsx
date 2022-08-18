import { Link } from 'react-router-dom';

const LogoPage = () => {
  return (
    <div className="logo">
      <h2 className="logo-title">
        <Link to="/" className="logo-link">
          <div className="box-text-logo">
            <div className="info-logo">
              <span className="i" translate="no">
                I
              </span>
              <span translate="no">nfo</span>
            </div>
          </div>
          <span className="link-name-films" translate="no">
            Films
          </span>
        </Link>
      </h2>
    </div>
  );
};

export default LogoPage;
