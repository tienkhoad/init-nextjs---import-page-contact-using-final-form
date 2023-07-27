import './styles.maincontent.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/globals.css';
import Image from "next/image";
import Background from '../../img/pc1.jpg';
import LogoFull from '../../img/logo/logo_full.png';
import QualityImg from '../../img/Quality 75x75.png'

const MainContent = () => {
    return (
        <div id="main-content">
            <div className="container">
                <div id="background">
                    <Image id="img_background" src={Background} alt='Background' />
                </div>
                <div id="logo">
                    <Image src={LogoFull} alt='Logo' />
                </div>
                <nav id="menu" className="container">
                    <ul>
                        <li className="menu-content">
                            <a className='font-montserrat' href="#">TRANG CHỦ</a>
                        </li>
                        <li className="menu-content">
                            <a className='font-montserrat' href="#">GIỚI THIỆU</a>
                        </li>
                        <li className="menu-content sub-menu">
                            <a className='font-montserrat' href="#">SẢN PHẨM</a>
                            <ul className="submenu-content">
                                <li><a href="#">Sản phẩm A</a></li>
                                <li><a href="#">Sản phẩm B</a></li>
                                <li><a href="#">Sản phẩm C</a></li>
                            </ul>
                        </li>
                        <li className="menu-content">
                            <a className='font-montserrat' href="#">LIÊN HỆ</a>
                        </li>
                        <li className="menu-content">
                            <a href="#">
                                <i className="bi bi-search" style={{ fontSize: '300%' }}></i>
                            </a>
                        </li>
                    </ul>
                </nav>

                <div id="title" className='font-montserrat'>
                    TẬN TÂM BẢO VỆ NGÔI NHÀ BẠN
                </div>
                <div id="slogan" className="wrapper">
                    <div className="typing-demo">
                        <span id="typed-text">FIREGUARD</span>
                        <span id="cursor"></span>
                    </div>
                </div>
                <button id="btn-buynow" type="button" className="btn btn-warning font-montserrat">MUA HÀNG</button>
                <div className="wrap-box">
                    <div className="size-box-detail box-1"></div>
                    <div className="title title-1 title-all-3">SẢN PHẨM CHẤT LƯỢNG</div>
                    <a className="watch_more watch_more-1 font-montserrat" href="#">Xem thêm {'>'} </a>
                    <div className="size-box-detail box-2 font-montserrat"></div>
                    <div className="title title-2 title-all-3">BẢO HÀNH CHÍNH HÃNG</div>
                    <a className="watch_more watch_more-2 font-montserrat" href="#"> Xem thêm {'>'}  </a>
                    <div className="size-box-detail box-3 font-montserrat"></div>
                    <div className="title title-3 title-all-3">CHÍNH SÁCH ƯU <br /> ĐÃI </div>
                    <a className="watch_more watch_more-3 font-montserrat" href="#">Xem thêm {'>'}  </a>
                </div>
                <Image alt='Quality' className="quality quality-img-1" src={QualityImg} />
                <Image alt='Quality' className="quality quality-img-2" src={QualityImg} />
                <Image alt='Quality' className="quality quality-img-3" src={QualityImg} />
            </div>
        </div>

    );
};

export default MainContent;