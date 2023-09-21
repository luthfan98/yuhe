const Footer = ({ bg, extraClass }) => {
  return (
    <footer style={{background:'#221e47'}}
      className={`main-footer ${bg ? bg : "black"}-bg ${
        extraClass ? extraClass : ""
      }`}
    >
      <div className="container">
        {/*=== Footer CTA ===*/}
        
        {/*=== Footer Widget ===*/}
        <div className="footer-widget-area pt-75 pb-30">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              {/*=== Footer Widget ===*/}
              <div className="footer-widget about-company-widget mb-40">
                <h4 className="widget-title">Tentang</h4>
                <div className="footer-content">
                  <p>
                    Perusahaan distributor Snack dan bahan pangan dengan harga murah langsung dari pabriknya
                  </p>
                  <a href="#" className="footer-logo">
                    <img style={{height:'100px'}} src="assets/images/logo/yuhe_putih.png"
                      alt="Site Logo"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              {/*=== Footer Widget ===*/}
              <div className="footer-widget service-nav-widget mb-40 pl-lg-70">
                <h4 className="widget-title">Services</h4>
                <div className="footer-content">
                  <ul className="footer-widget-nav">
                    <li>
                      <a href="#">Beranda</a>
                    </li>
                    <li>
                      <a href="#">Cara Belanja</a>
                    </li>
                    <li>
                      <a href="#">Tentang Kami</a>
                    </li>
                  </ul>
                  <ul className="footer-widget-nav">
                    <li>
                      <a href="#">Carier</a>
                    </li>
                    <li>
                      <a href="#">Kontak</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              {/*=== Footer Widget ===*/}
              <div className="footer-widget footer-newsletter-widget mb-40 pl-lg-100">
                <h4 className="widget-title">Temukan kita di</h4>
                <div style={{display:'flex'}}>
                  <a><box-icon name='instagram' type='logo' size='50px' color='#ffffff' ></box-icon></a>
                  <a><box-icon type='logo' color='#ffffff' size='50px' name='facebook'></box-icon></a>
                  <a><box-icon type='logo' color='#ffffff' size='50px' name='linkedin'></box-icon></a>
                  <a style={{marginLeft:'10px'}}><box-icon type='logo' color='#ffffff' size='50px' name='youtube'></box-icon></a>
                </div>                
                <div className="footer-content mt-3">
                  <p style={{marginBottom:'5px'}}>
                    Dapatkan notifikasi promo produk
                  </p>
                  <form>
                    <div className="form_group">
                      <label>
                        <i className="far fa-paper-plane" />
                      </label>
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Nomor Whatsapp"
                        name="email"
                        required
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*=== Footer Copyright ===*/}
        <div className="footer-copyright">
          <div className="row">
            <div className="col-lg-6">
              {/*=== Footer Text ===*/}
              <div className="footer-text">
                <p>
                  Copy@ 2023 <span style={{ color: "#F7921E" }}>Putra PPJ</span>,
                  All Right Reserved
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== Footer Nav ===*/}
              <div className="footer-nav float-lg-end">
                <ul>
                  <li>
                    <a href="#">Setting &amp; privacy</a>
                  </li>
                  <li>
                    <a href="#">Faqs</a>
                  </li>
                  <li>
                    <a href="#">Support</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
