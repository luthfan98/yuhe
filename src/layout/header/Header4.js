import Link from "next/link";
import Menu from "../Menu";
const styleInline = {
  width: '115px'
};

const Header4 = () => {
  return (
    <header className="header-area header-four transparent-header">
      {/*====== Header Navigation ======*/}
      <div className="header-navigation">
        <div className="nav-overlay" />
        <div className="container">
          <div className="primary-menu">
            {/*====== Site Branding ======*/}
            <div className="site-branding">
              <Link legacyBehavior href="/">
                <a className="brand-logo">
                  <img style={styleInline}
                    src="assets/images/logo/yuhe_biru.png"
                    alt="Site Logo"
                  />
                </a>
              </Link>
            </div>
            {/*====== Nav Menu ======*/}
            <div className="nav-menu">
              {/*====== Site Branding ======*/}
              <div className="mobile-logo mb-30 d-block d-xl-none">
                <Link legacyBehavior href="/">
                  <a className="brand-logo">
                    <img
                      src="assets/images/logo/yuhe_putih.png"
                      alt="Site Logo"
                    />
                  </a>
                </Link>
              </div>
              {/*=== Nav Search ===*/}
              
              {/*====== main Menu ======*/}
              <Menu />
              {/*====== Menu Button ======*/}
              <div className="menu-button mt-40 d-xl-none">
                <Link legacyBehavior href="/contact">
                  <a className="main-btn secondary-btn">
                    Install Sekarang
                    <i className="fas fa-paper-plane" />
                  </a>
                </Link>
              </div>
            </div>
            {/*====== Nav Right Item ======*/}
            <div className="nav-right-item">
              <div className="menu-button d-xl-block d-none">
                <Link legacyBehavior href="/contact">
                  <a className="main-btn primary-btn" style={{padding:'3px 5px 3px 18px'}}>
                    Install Sekarang
                    <img style={{width:'15px',margin:'10px 10px'}} src="assets\images\hero\icon_playstore.png"/>
                  </a>
                </Link>
              </div>
              <div className="navbar-toggler">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header4;
