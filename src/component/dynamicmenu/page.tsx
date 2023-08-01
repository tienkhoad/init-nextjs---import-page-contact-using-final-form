import './styles.dynamicmenu.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/globals.css';

const DynamicMenu = () => {
    return (
        <div className="tamducphat-fixed-header show-fixed-header container">
            <div className="tamducphat-fixed-header-inner-wrapper">
                <div className="tamducphat-fixed-header-col col-logo">
                    <img src="logo/logo nam ngang ko background.png" />
                </div>
                <div className="tamducphat-fixed-header-col col-contact">
                    <a href="tel:+0908035270"> 0908035270 </a>
                </div>
                <div className="tamducphat-fixed-header-col col-nav">
                    <ul>
                        <li>
                            <a href="#">TRANG CHỦ</a>
                        </li>
                        <li>
                            <a href="#">GIỚI THIỆU</a>
                        </li>
                        <li>
                            <a href="#">SẢN PHẨM</a>
                        </li>
                        <li>
                            <a href="#">LIÊN HỆ</a>
                        </li>
                        {/* <li>
                            <a href="#">
                                <i className="bi bi-search" style="font-size: 300%;"></i>
                            </a>
                        </li>  */}
                    </ul>
                </div>

                <div className="tamducphat-fixed-header-col col-search">

                </div>
            </div>
        </div>
    );
};

export default DynamicMenu;