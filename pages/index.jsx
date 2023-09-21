import GallerySection from "@/src/components/GallerySection";
import Layout from "@/src/layout/Layout";
import {
  partnerSliderOne,
  sliderActive3Item,
  testimonialSliderOne,
  sliderActive5Item,
} from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

const Index = () => {
  return (
    <Layout header={4}>
      {/*====== Start Hero Section ======*/}
      <section className="hero-section">
        {/*=== Hero Wrapper ===*/}
        <div className="hero-wrapper-four">
          
          <div className="container">
            <div className="row">
              <div className="col-xl-7">
                {/*=== Hero Content ===*/}
                <div className="hero-content">
                  <span className="sub-title wow fadeInUp" data-wow-delay=".1s">
                    haloo Juragan
                  </span>
                  <h1  className="wow fadeInDown" data-wow-delay=".1s">
                    Belanja dari rumah lebih gampang
                  </h1>
                  <p className="wow fadeInUp" data-wow-delay=".1s">
                    Layanan belanja online masa kini cuman dari HP aja
                  </p>
                  {/*=== Hero Search ===*/}
                  
                  <div
                    className="avatar-box wow fadeInUp"
                    data-wow-delay=".1s"
                  >
                    <img src="assets/images/about/avater.png" alt />
                    <span>35+ Bakul udah pake aplikasi ini</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 d-xl-block d-none">
                <div style={{height:'600px'}}
                  className="hero-image wow fadeInRight"
                  data-wow-delay=".1s"
                >
                  <img
                    src="assets/images/hero/image-home.jpg"
                    alt="hero image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Hero Section ======*/}
      {/*====== Start Features Section ======*/}
      <section className="features-section gray-bg pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title mb-55 wow fadeInLeft">
                <span className="sub-title">Yang kita sediakan</span>
                <h2>Barang paling laris yag banyak Juragan beli</h2>
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== Features Content Box ===*/}
              <div className="features-content-box pl-lg-70 wow fadeInRight">
                <p className="mb-25">
                  Sit amet consectetue integer eu tincidunt scelerisque. Sodales
                  volutpat neque fermentum alesuada scelerisque massa.
                </p>
                <div className="row justify-content-center">
                  <div className="col-sm-4 col-6">
                    {/*=== Counter Item ===*/}
                    <div className="counter-item mb-55">
                      <h2 className="number">
                      356+
                      </h2>
                      <p>Bakulan</p>
                    </div>
                  </div>
                  <div className="col-sm-4 col-6">
                    {/*=== Counter Item ===*/}
                    <div className="counter-item mb-55">
                      <h2 className="number">
                      250+
                      </h2>
                      <p>Juragan</p>
                    </div>
                  </div>
                  <div className="col-sm-4 col-6">
                    {/*=== Counter Item ===*/}
                    <div className="counter-item mb-55">
                      <h2 className="number">
                      4+
                      </h2>
                      <p>Distributor</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=== Features Slider ===*/}
          <Slider
            {...sliderActive5Item}
            className="slider-active-5-item wow fadeInUp"
          >
            {/*=== Features Item ===*/}
            <div className="single-features-item-three">
              <div className="img-holder">
                <img
                  src="assets/images/features/guntur.jpg"
                  alt="Features Image"
                />
              </div>
              <div className="content">
                <h6>Guntur</h6>
              </div>
            </div>
            {/*=== Features Item ===*/}
            <div className="single-features-item-three">
              <div className="img-holder">
                <img
                  src="assets/images/features/maksibiru.jpg"
                  alt="Features Image"
                />
              </div>
              <div className="content">
                <h6>Maksi</h6>
              </div>
            </div>
            {/*=== Features Item ===*/}
            <div className="single-features-item-three">
              <div className="img-holder">
                <img
                  src="assets/images/features/gesit.jpg"
                  alt="Features Image"
                />
              </div>
              <div className="content">
                <h6>Gesit</h6>
              </div>
            </div>
            {/*=== Features Item ===*/}
            <div className="single-features-item-three">
              <div className="img-holder">
                <img
                  src="assets/images/features/bebetos.jpg"
                  alt="Features Image"
                />
              </div>
              <div className="content">
                <h6>Bebetos</h6>
              </div>
            </div>
            {/*=== Features Item ===*/}
            <div className="single-features-item-three">
              <div className="img-holder">
                <img
                  src="assets/images/features/clevo.jpg"
                  alt="Features Image"
                />
              </div>
              <div className="content">
                <h6>Clevo</h6>
              </div>
            </div>
            {/*=== Features Item ===*/}
            <div className="single-features-item-three">
              <div className="img-holder">
                <img
                  src="assets/images/features/realgood.jpg"
                  alt="Features Image"
                />
              </div>
              <div className="content">
                <h6>Realgood</h6>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*=== Start What We Section ===*/}
      <section className="who-we-section pt-100 pb-50">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-xl-5 order-2 order-xl-1">
              {/*=== We Image Box ===*/}
              <div className="we-image-box text-center text-xl-left pr-lg-30 mb-50 wow fadeInLeft">
                <img
                  src="assets/images/gallery/home_bg_tengah2.jpg"
                  className="radius-top-left-right-288"
                  alt="What We Image"
                />
              </div>
            </div>
            <div className="col-xl-7 order-1 order-xl-2">
              {/*=== We Content Box ===*/}
              <div className="we-contnet-box mb-20 wow fadeInRight">
                {/*=== Section Title ===*/}
                <div className="section-title mb-45">
                  <span className="sub-title">dengan sigap</span>
                  <h2>Tim yuhe.id Siap Melayani Juragan!</h2>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    {/*=== Fancy Icon Box ===*/}
                    <div className="fancy-icon-box-three mb-30">
                      <div className="icon">
                        <i className="flaticon-camping" />
                      </div>
                      <div className="text">
                        <h5 className="title">Pelayanan 24/7</h5>
                        
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/*=== Fancy Icon Box ===*/}
                    <div className="fancy-icon-box-three mb-30">
                      <div className="icon">
                        <i className="flaticon-biking-mountain" />
                      </div>
                      <div className="text">
                        <h5 className="title">Pengiriman Cepat</h5>
                        
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/*=== Fancy Icon Box ===*/}
                    <div className="fancy-icon-box-three mb-30">
                      <div className="icon">
                        <i className="flaticon-fishing-2" />
                      </div>
                      <div className="text">
                        <h5 className="title">Diskon melimpah</h5>
                        
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/*=== Fancy Icon Box ===*/}
                    <div className="fancy-icon-box-three mb-30">
                      <div className="icon">
                        <i className="flaticon-caravan" />
                      </div>
                      <div className="text">
                        <h5 className="title">Garansi barang rusak</h5>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=== End What We Section ===*/}
      {/*====== Start Service Section ======*/}
      <section className="service-section-two pt-100 pb-100" style={{background:'#221e47'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              {/*=== Section Title ===*/}
              <div className="section-title text-center text-white mb-45 wow fadeInDown">
                <span className="sub-title">Layanan Pengiriman</span>
                <h2>armada yang kita pake</h2>
              </div>
            </div>
          </div>
          <Slider
            {...sliderActive3Item}
            className="slider-active-3-item wow fadeInUp"
          >
            {/*=== Single Service Item ===*/}
            <div className="single-service-item-four">
              <div className="img-holder">
                <img
                  src="assets/images/gallery/truck1.jpg"
                  alt="Service Image"
                />
              </div>
              <div className="content">
                
                <h3 className="title">Classic Tents</h3>
                <p>
                  Sit amet consecteturauris natoque name pellentue augue mattis
                  faucibus
                </p>
                
                
              </div>
            </div>
            {/*=== Single Service Item ===*/}
            <div className="single-service-item-four">
              <div className="img-holder">
                <img
                  src="assets/images/gallery/truck2.jpg"
                  alt="Service Image"
                />
              </div>
              <div className="content">
                
                <h3 className="title">Glamping Cabin</h3>
                <p>
                  Sit amet consecteturauris natoque name pellentue augue mattis
                  faucibus
                </p>
                
                
              </div>
            </div>
            {/*=== Single Service Item ===*/}
            <div className="single-service-item-four">
              <div className="img-holder">
                <img
                  src="assets/images/gallery/truck3.jpg"
                  alt="Service Image"
                />
              </div>
              <div className="content">
                
                <h3 className="title">RV Luxury Tent</h3>
                <p>
                  Sit amet consecteturauris natoque name pellentue augue mattis
                  faucibus
                </p>
                
                
              </div>
            </div>
          </Slider>
          {/*=== Text Box ===*/}
          
        </div>
      </section>
      {/*====== End Service Section ======*/}
      {/*====== Start Places Section ======*/}
      <section className="places-section pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              {/*=== Section Title ===*/}
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">Cabang Yuhe.id</span>
                <h2>Kunjungi cabang kita juga di Jawa Tengah</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              {/*=== Single Place Item Three ===*/}
              <div className="single-place-item-three mb-30 wow fadeInUp">
                <div className="place-img">
                  <img
                    src="assets/images/place/place-20.jpg"
                    alt="Place Image"
                  />
                </div>
                <div className="place-content">
                  <h4 className="title">
                    <Link legacyBehavior href="/tour-details">
                      Hiking Mountains
                    </Link>
                  </h4>
                  <p className="location">
                    <i className="far fa-map-marker-alt" />
                    Arefu, AG, Romania
                  </p>
                  <div className="meta">
                    <span>
                      <i className="far fa-calendar-alt" />
                      25 Feb 2023
                    </span>
                    <a href="#" className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              {/*=== Single Place Item Three ===*/}
              <div className="single-place-item-three mb-30 wow fadeInUp">
                <div className="place-img">
                  <img
                    src="assets/images/place/place-21.jpg"
                    alt="Place Image"
                  />
                </div>
                <div className="place-content">
                  <h4 className="title">
                    <Link legacyBehavior href="/tour-details">
                      Surfer Riding Wave
                    </Link>
                  </h4>
                  <p className="location">
                    <i className="far fa-map-marker-alt" />
                    Arefu, AG, Romania
                  </p>
                  <div className="meta">
                    <span>
                      <i className="far fa-calendar-alt" />
                      25 Feb 2023
                    </span>
                    <a href="#" className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              {/*=== Single Place Item Three ===*/}
              <div className="single-place-item-three mb-30 wow fadeInUp">
                <div className="place-img">
                  <img
                    src="assets/images/place/place-22.jpg"
                    alt="Place Image"
                  />
                </div>
                <div className="place-content">
                  <h4 className="title">
                    <Link legacyBehavior href="/tour-details">
                      Tracing Hill On Cloud
                    </Link>
                  </h4>
                  <p className="location">
                    <i className="far fa-map-marker-alt" />
                    Arefu, AG, Romania
                  </p>
                  <div className="meta">
                    <span>
                      <i className="far fa-calendar-alt" />
                      25 Feb 2023
                    </span>
                    <a href="#" className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              {/*=== Single Place Item Three ===*/}
              <div className="single-place-item-three mb-30 wow fadeInUp">
                <div className="place-img">
                  <img
                    src="assets/images/place/place-23.jpg"
                    alt="Place Image"
                  />
                </div>
                <div className="place-content">
                  <h4 className="title">
                    <Link legacyBehavior href="/tour-details">
                      Hill House On Sea
                    </Link>
                  </h4>
                  <p className="location">
                    <i className="far fa-map-marker-alt" />
                    Gulf of Thailand, Thailand
                  </p>
                  <div className="meta">
                    <span>
                      <i className="far fa-calendar-alt" />
                      25 Feb 2023
                    </span>
                    <a href="#" className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              {/*=== Single Place Item Three ===*/}
              <div className="single-place-item-three mb-30 wow fadeInUp">
                <div className="place-img">
                  <img
                    src="assets/images/place/place-24.jpg"
                    alt="Place Image"
                  />
                </div>
                <div className="place-content">
                  <h4 className="title">
                    <Link legacyBehavior href="/tour-details">
                      Tent Camping
                    </Link>
                  </h4>
                  <p className="location">
                    <i className="far fa-map-marker-alt" />
                    Wilderness, United States
                  </p>
                  <div className="meta">
                    <span>
                      <i className="far fa-calendar-alt" />
                      25 Feb 2023
                    </span>
                    <a href="#" className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              {/*=== Single Place Item Three ===*/}
              <div className="single-place-item-three mb-30 wow fadeInUp">
                <div className="place-img">
                  <img
                    src="assets/images/place/place-25.jpg"
                    alt="Place Image"
                  />
                </div>
                <div className="place-content">
                  <h4 className="title">
                    <Link legacyBehavior href="/tour-details">
                      Hiking Mountains
                    </Link>
                  </h4>
                  <p className="location">
                    <i className="far fa-map-marker-alt" />
                    Arefu, AG, Romania
                  </p>
                  <div className="meta">
                    <span>
                      <i className="far fa-calendar-alt" />
                      25 Feb 2023
                    </span>
                    <a href="#" className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              {/*=== Single Place Item Three ===*/}
              <div className="single-place-item-three mb-30 wow fadeInUp">
                <div className="place-img">
                  <img
                    src="assets/images/place/place-26.jpg"
                    alt="Place Image"
                  />
                </div>
                <div className="place-content">
                  <h4 className="title">
                    <Link legacyBehavior href="/tour-details">
                      Climbing Up The Hills
                    </Link>
                  </h4>
                  <p className="location">
                    <i className="far fa-map-marker-alt" />
                    Arefu, AG, Romania
                  </p>
                  <div className="meta">
                    <span>
                      <i className="far fa-calendar-alt" />
                      25 Feb 2023
                    </span>
                    <a href="#" className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              {/*=== Single Place Item Three ===*/}
              <div className="single-place-item-three mb-30 wow fadeInUp">
                <div className="place-img">
                  <img
                    src="assets/images/place/place-27.jpg"
                    alt="Place Image"
                  />
                </div>
                <div className="place-content">
                  <h4 className="title">
                    <Link legacyBehavior href="/tour-details">
                      Tracing Hill On Cloud
                    </Link>
                  </h4>
                  <p className="location">
                    <i className="far fa-map-marker-alt" />
                    Nordegg, Canada
                  </p>
                  <div className="meta">
                    <span>
                      <i className="far fa-calendar-alt" />
                      25 Feb 2023
                    </span>
                    <a href="#" className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Places Section ======*/}
      {/*====== Start Why Choose Section ======*/}
      <section className="why-choose-section gray-bg pt-100 pb-50">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-xl-7">
              {/*=== Choose Content Box ===*/}
              <div className="choose-content-box pr-lg-70">
                {/*=== Section Title ===*/}
                <div className="section-title mb-45 wow fadeInDown">                  
                  <h2>Kenapa memilih Kita</h2>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    {/*=== Fancy Icon Box ===*/}
                    <div className="fancy-icon-box-four mb-45 wow fadeInUp">
                      <div className="icon">
                        <img src="assets/images/icon/shipped.png" />
                      </div>
                      <div className="text">
                        <h4 className="title">Keamanan Pengiriman</h4>
                        <p>
                          We denounce with righteous indignation and dislike
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/*=== Fancy Icon Box ===*/}
                    <div className="fancy-icon-box-four mb-45 wow fadeInUp">
                      <div className="icon">
                      <img src="assets/images/icon/delivery-truck.png" />
                      </div>
                      <div className="text">
                        <h4 className="title">Gratis Pengiriman</h4>
                        <p>
                          We denounce with righteous indignation and dislike
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/*=== Fancy Icon Box ===*/}
                    <div className="fancy-icon-box-four mb-45 wow fadeInUp">
                      <div className="icon">
                      <img src="assets/images/icon/coupon.png" />
                      </div>
                      <div className="text">
                        <h4 className="title">Banyak Diskon</h4>
                        <p>
                          We denounce with righteous indignation and dislike
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/*=== Fancy Icon Box ===*/}
                    <div className="fancy-icon-box-four mb-45 wow fadeInUp">
                      <div className="icon">
                      <img src="assets/images/icon/products.png" />
                      </div>
                      <div className="text">
                        <h4 className="title">Produk Lengkap</h4>
                        <p>
                          We denounce with righteous indignation and dislike
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              {/*=== Experience Box ===*/}
              <div className="experience-box text-center text-xl-right mb-50 wow fadeInRight">
                <img src="assets/images/features/years.png" alt />
              </div>
            </div>
          </div>
          <div className="pt-80 pb-20">
          <div className="row">
            <div className="col-lg-6">
              {/*=== Single CTA Item ===*/}
              <div className="single-cta-item pr-lg-60 mb-40">
                <div className="icon">
                  <img src="assets/images/icon/support.png" alt="Icon" />
                </div>
                <div className="content">
                  <h3 className="title">
                    Butuh bantuan untuk kerjasama?
                  </h3>
                  <a href="#" className="icon-btn">
                    <i className="far fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== Single CTA Item ===*/}
              <div className="single-cta-item pl-lg-60 mb-40">
                <div className="icon">
                  <img src="assets/images/icon/travel.png" alt="Icon" />
                </div>
                <div className="content">
                  <h3 className="title">
                    Pengiriman Ke Area Tegal Slawi
                  </h3>
                  <a href="#" className="icon-btn">
                    <i className="far fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      {/*====== End Why Choose Section ======*/}
      {/*====== Start Testimonial Section ======*/}
      <section className="testimonial-section-two pt-100">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-xl-5 order-2 order-xl-1">
              <div className="testimonial-image-box text-xl-left text-center wow fadeInLeft">
                <img
                  src="assets/images/testimonial/testimonial-2.png"
                  alt="Icon Image"
                />
              </div>
            </div>
            <div className="col-xl-7 order-1 order-xl-2">
              {/*=== Testimonial Slider ===*/}
              <Slider
                {...testimonialSliderOne}
                className="testimonial-slider-one pl-lg-55 mb-40 wow fadeInRight"
              >
                {/*=== Testimonial Item ===*/}
                <div className="gw-testimonial-item">
                  <div className="testimonial-inner-content">
                    <div className="quote-rating-box">
                      <div className="icon">
                        <img
                          src="assets/images/testimonial/quote.png"
                          alt="quote icon"
                        />
                      </div>
                      <div className="ratings-box">
                        <h4>Apa Kata Juragan kita</h4>
                        <ul className="ratings">
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p>
                    Enak Banget pake aplikasi Yuhe, murah dan pengirimannya cepet banget sampe kiosku. Keren deh pokoknya
                    </p>
                    <div className="author-thumb-title">
                      <div className="author-thumb">
                        <img
                          src="assets/images/testimonial/author-1.jpg"
                          alt="Author Image"
                        />
                      </div>
                      <div className="author-title">
                        <h3 className="title">Douglas D. Hall</h3>
                        <p className="position">CEO &amp; Founder</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*=== Testimonial Item ===*/}
                <div className="gw-testimonial-item">
                  <div className="testimonial-inner-content">
                    <div className="quote-rating-box">
                      <div className="icon">
                        <img
                          src="assets/images/testimonial/quote.png"
                          alt="quote icon"
                        />
                      </div>
                      <div className="ratings-box">
                        <h4>Apa kata juragan yuhe</h4>
                        <ul className="ratings">
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p>
                    Aplikasi yuhe murah dan pengirimannya aman dan cepet banget. harganya juga murah banget.
                    </p>
                    <div className="author-thumb-title">
                      <div className="author-thumb">
                        <img
                          src="assets/images/testimonial/author-1.jpg"
                          alt="Author Image"
                        />
                      </div>
                      <div className="author-title">
                        <h3 className="title">Douglas D. Hall</h3>
                        <p className="position">CEO &amp; Founder</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*=== Testimonial Item ===*/}
                <div className="gw-testimonial-item">
                  <div className="testimonial-inner-content">
                    <div className="quote-rating-box">
                      <div className="icon">
                        <img
                          src="assets/images/testimonial/quote.png"
                          alt="quote icon"
                        />
                      </div>
                      <div className="ratings-box">
                        <h4>Apa kata juragan yuhe</h4>
                        <ul className="ratings">
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p>
                      Aplikasi belanja buat para pedagang paling oke.
                    </p>
                    <div className="author-thumb-title">
                      <div className="author-thumb">
                        <img
                          src="assets/images/testimonial/author-1.jpg"
                          alt="Author Image"
                        />
                      </div>
                      <div className="author-title">
                        <h3 className="title">Douglas D. Hall</h3>
                        <p className="position">CEO &amp; Founder</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          {/*=== Blog Area ===*/}
          <div className="blog-area pt-60 pb-60">
            <div className="row justify-content-center">
              <div className="col-xl-7">
                <div className="section-title text-center mb-45 wow fadeInDown">
                  
                  <h2>Informasi terikini dari <br/>Juragan kita</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-12">
                {/*=== Single Blog Post ===*/}
                <div className="single-blog-post-three mb-40 wow fadeInUp">
                  <div className="post-thumbnail">
                    <img src="assets/images/blog/blog-7.jpg" alt="Blog Image" />
                  </div>
                  <div className="entry-content">
                    <div className="post-meta">
                      <span>
                        <i className="far fa-calendar-alt" />
                        <a href="#">November 15, 2022</a>
                      </span>
                      <h3 className="title">
                        <Link legacyBehavior href="/blog-details">
                          <a>
                            Meet Skeleton Svelte Taile Sind For Reactive UIs
                          </a>
                        </Link>
                      </h3>
                      <Link legacyBehavior href="/blog-details">
                        <a className="main-btn filled-btn">
                          Read More
                          <i className="far fa-paper-plane" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                {/*=== Single Blog Post ===*/}
                <div className="single-blog-post-three mb-40 wow fadeInDown">
                  <div className="post-thumbnail">
                    <img src="assets/images/blog/blog-8.jpg" alt="Blog Image" />
                  </div>
                  <div className="entry-content">
                    <div className="post-meta">
                      <span>
                        <i className="far fa-calendar-alt" />
                        <a href="#">November 15, 2022</a>
                      </span>
                      <h3 className="title">
                        <Link legacyBehavior href="/blog-details">
                          <a>
                            Meet Skeleton Svelte Taile Sind For Reactive UIs
                          </a>
                        </Link>
                      </h3>
                      <Link legacyBehavior href="/blog-details">
                        <a className="main-btn filled-btn">
                          Read More
                          <i className="far fa-paper-plane" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                {/*=== Single Blog Post ===*/}
                <div className="single-blog-post-three mb-40 wow fadeInUp">
                  <div className="post-thumbnail">
                    <img src="assets/images/blog/blog-9.jpg" alt="Blog Image" />
                  </div>
                  <div className="entry-content">
                    <div className="post-meta">
                      <span>
                        <i className="far fa-calendar-alt" />
                        <a href="#">November 15, 2022</a>
                      </span>
                      <h3 className="title">
                        <Link legacyBehavior href="/blog-details">
                          <a>
                            Meet Skeleton Svelte Taile Sind For Reactive UIs
                          </a>
                        </Link>
                      </h3>
                      <Link legacyBehavior href="/blog-details">
                        <a className="main-btn filled-btn">
                          Read More
                          <i className="far fa-paper-plane" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Testimonial Section ======*/}
      {/*====== Start Partners Section ======*/}
      <section style={{background:'#1b1743'}} className="partners-section black-dark-bg">
        <div className="container">
          {/*=== Partners Slider ===*/}
          <Slider
            {...partnerSliderOne}
            className="partner-slider-one pt-80 pb-50 wow fadeInUp"
          >
            {/*=== Partner Item ===*/}
            <div className="single-partner-item">
              <div className="partner-img">
                <a href="#">
                  <img
                    src="assets/images/partner/partner-6.png"
                    alt="Partner Image"
                  />
                </a>
              </div>
            </div>
            {/*=== Partner Item ===*/}
            <div className="single-partner-item">
              <div className="partner-img">
                <a href="#">
                  <img
                    src="assets/images/partner/partner-7.png"
                    alt="Partner Image"
                  />
                </a>
              </div>
            </div>
            {/*=== Partner Item ===*/}
            <div className="single-partner-item">
              <div className="partner-img">
                <a href="#">
                  <img
                    src="assets/images/partner/partner-8.png"
                    alt="Partner Image"
                  />
                </a>
              </div>
            </div>
            {/*=== Partner Item ===*/}
            <div className="single-partner-item">
              <div className="partner-img">
                <a href="#">
                  <img
                    src="assets/images/partner/partner-9.png"
                    alt="Partner Image"
                  />
                </a>
              </div>
            </div>
            {/*=== Partner Item ===*/}
            <div className="single-partner-item">
              <div className="partner-img">
                <a href="#">
                  <img
                    src="assets/images/partner/partner-10.png"
                    alt="Partner Image"
                  />
                </a>
              </div>
            </div>
            {/*=== Partner Item ===*/}
            <div className="single-partner-item">
              <div className="partner-img">
                <a href="#">
                  <img
                    src="assets/images/partner/partner-7.png"
                    alt="Partner Image"
                  />
                </a>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Partners Section ======*/}
    </Layout>
  );
};
export default Index;
