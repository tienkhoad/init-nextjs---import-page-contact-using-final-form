import './styles.productcatalog.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/globals.css';
import Image from 'next/image';
import 'bootstrap-icons/font/bootstrap-icons.css';

import React, { Component } from 'react';

import sp1 from '../../img/products/Bình cầu chữa cháy tự động 6Kg/Bình cầu chữa cháy tự động 6Kg.jpg';

const ProductCatalog = () => {

    return (
        <div className="container">
            <div className="best-selling-product font-montserrat"> DANH MỤC SẢN PHẨM </div>
            <div className="type-product">
                <div className="name-type-product font-montserrat">
                    <h4>BÁO CHÁY GST </h4>
                </div>
                <div className="slider">
                    <div className="grid-container font-montserrat">
                        <div className="grid-item ">
                            <Image src={sp1} alt="Product Image" width={100} />
                            <h3>Product 1</h3>
                            <p>$10.99</p>
                        </div>
                        <div className="grid-item">
                            <Image src={sp1} alt="Product Image" />
                            <h3>Product 2</h3>
                            <p>$15.99</p>
                        </div>
                        <div className="grid-item">
                            <Image src={sp1} alt="Product Image" />
                            <h3>Product 3</h3>
                            <p>$19.99</p>
                        </div>
                        <div className="grid-item">
                            <Image src={sp1} alt="Product Image" />
                            <h3>Product 4</h3>
                            <p>$12.99</p>
                        </div>
                        <div className="grid-item">
                            <Image src={sp1} alt="Product Image" />
                            <h3>Product 5</h3>
                            <p>$10.99</p>
                        </div>
                        <div className="grid-item">
                            <Image src={sp1} alt="Product Image" />
                            <h3>Product 6</h3>
                            <p>$15.99</p>
                        </div>
                        <div className="grid-item">
                            <Image src={sp1} alt="Product Image" />
                            <h3>Product 7</h3>
                            <p>$19.99</p>
                        </div>
                        <div className="grid-item">
                            <Image src={sp1} alt="Product Image" />
                            <h3>Product 8</h3>
                            <p>$12.99</p>
                        </div>
                    </div>
                    {/* <div className="slider-controls">
                        <button className="prev-arrow"></button>
                        <button className="next-arrow"></button>
                    </div> */}
                </div>
                <div className="see-more-type-product font-montserrat">
                    <a href="">Xem thêm <i className="bi bi-three-dots"></i>
                    </a>
                </div>
            </div>
            <div className="type-product">
                <div className="name-type-product font-montserrat">
                    <h4>BÁO CHÁY HOCHIKI </h4>
                </div>
                <div className="slider">
                    <div className="grid-container font-montserrat">
                        <div className="grid-item">
                            <Image src={sp1} alt="Product Image" />
                                <h3>Product 1</h3>
                                <p>$10.99</p>
                        </div>
                        <div className="grid-item">
                            <Image src={sp1} alt="Product Image" />
                                <h3>Product 2</h3>
                                <p>$15.99</p>
                        </div>
                        <div className="grid-item">
                            <Image src={sp1} alt="Product Image" />
                                <h3>Product 3</h3>
                                <p>$19.99</p>
                        </div>
                        <div className="grid-item">
                            <Image src={sp1} alt="Product Image" />
                                <h3>Product 4</h3>
                                <p>$12.99</p>
                        </div>
                        <div className="grid-item">
                            <Image src={sp1} alt="Product Image" />
                                <h3>Product 5</h3>
                                <p>$10.99</p>
                        </div>
                        <div className="grid-item">
                            <Image src={sp1} alt="Product Image" />
                                <h3>Product 6</h3>
                                <p>$15.99</p>
                        </div>
                        <div className="grid-item">
                            <Image src={sp1} alt="Product Image" />
                                <h3>Product 7</h3>
                                <p>$19.99</p>
                        </div>
                        <div className="grid-item">
                            <Image src={sp1} alt="Product Image" />
                                <h3>Product 8</h3>
                                <p>$12.99</p>
                        </div>
                    </div>
                    {/* <div className="slider-controls">
                        <button className="prev-arrow"></button>
                        <button className="next-arrow"></button>
                    </div> */}
                </div>
                <div className="see-more-type-product font-montserrat">
                    <a href="">Xem thêm <i className="bi bi-three-dots"></i>
                    </a>
                </div>
            </div>
            <div className="type-product">
                <div className="name-type-product font-montserrat">
                    <h4>BÁO CHÁY HORING LIH </h4>
                </div>
                <div className="slider">
                    <div className="grid-container font-montserrat">
                        <div className="grid-item">
                            <Image src={sp1} alt="Product Image" />
                                <h3>Product 1</h3>
                                <p>$10.99</p>
                        </div>
                        <div className="grid-item">
                            <Image src={sp1} alt="Product Image" />
                                <h3>Product 2</h3>
                                <p>$15.99</p>
                        </div>
                        <div className="grid-item">
                            <Image src={sp1} alt="Product Image" />
                                <h3>Product 3</h3>
                                <p>$19.99</p>
                        </div>
                        <div className="grid-item">
                            <Image src={sp1} alt="Product Image" />
                                <h3>Product 4</h3>
                                <p>$12.99</p>
                        </div>
                        <div className="grid-item">
                            <Image src={sp1} alt="Product Image" />
                                <h3>Product 5</h3>
                                <p>$10.99</p>
                        </div>
                        <div className="grid-item">
                            <Image src={sp1} alt="Product Image" />
                                <h3>Product 6</h3>
                                <p>$15.99</p>
                        </div>
                        <div className="grid-item">
                            <Image src={sp1} alt="Product Image" />
                                <h3>Product 7</h3>
                                <p>$19.99</p>
                        </div>
                        <div className="grid-item">
                            <Image src={sp1} alt="Product Image" />
                                <h3>Product 8</h3>
                                <p>$12.99</p>
                        </div>
                    </div>
                    {/* <div className="slider-controls">
                        <button className="prev-arrow"></button>
                        <button className="next-arrow"></button>
                    </div> */}
                </div>
                <div className="see-more-type-product font-montserrat">
                    <a href="">Xem thêm <i className="bi bi-three-dots"></i>
                    </a>
                </div>
            </div>
            <div className="type-product">
                <div className="name-type-product font-montserrat">
                    <h4>BÌNH CHỮA CHÁY </h4>
                </div>
                <div className="slider">
                    <div className="grid-container font-montserrat">
                        <div className="grid-item">
                            <Image src={sp1} alt="Product Image" />
                                <h3>Product 1</h3>
                                <p>$10.99</p>
                        </div>
                        <div className="grid-item">
                            <Image src={sp1} alt="Product Image" />
                                <h3>Product 2</h3>
                                <p>$15.99</p>
                        </div>
                        <div className="grid-item">
                            <Image src={sp1} alt="Product Image" />
                                <h3>Product 3</h3>
                                <p>$19.99</p>
                        </div>
                        <div className="grid-item">
                            <Image src={sp1} alt="Product Image" />
                                <h3>Product 4</h3>
                                <p>$12.99</p>
                        </div>
                        <div className="grid-item">
                            <Image src={sp1} alt="Product Image" />
                                <h3>Product 5</h3>
                                <p>$10.99</p>
                        </div>
                        <div className="grid-item">
                            <Image src={sp1} alt="Product Image" />
                                <h3>Product 6</h3>
                                <p>$15.99</p>
                        </div>
                        <div className="grid-item">
                            <Image src={sp1} alt="Product Image" />
                                <h3>Product 7</h3>
                                <p>$19.99</p>
                        </div>
                        <div className="grid-item">
                            <Image src={sp1} alt="Product Image" />
                                <h3>Product 8</h3>
                                <p>$12.99</p>
                        </div>
                    </div>
                    {/* <div className="slider-controls">
                        <button className="prev-arrow"></button>
                        <button className="next-arrow"></button>
                    </div> */}
                </div>
                <div className="see-more-type-product font-montserrat">
                    <a href="">Xem thêm <i className="bi bi-three-dots"></i>
                    </a>
                </div>
            </div>
            <div className="type-product">
                <div className="name-type-product font-montserrat">
                    <h4>ĐÈN SỰ CỐ & EXIT </h4>
                </div>
                <div className="slider">
                    <div className="grid-container font-montserrat">
                        <div className="grid-item">
                            <Image src={sp1} alt="Product Image" />
                                <h3>Product 1</h3>
                                <p>$10.99</p>
                        </div>
                        <div className="grid-item">
                            <Image src={sp1} alt="Product Image" />
                                <h3>Product 2</h3>
                                <p>$15.99</p>
                        </div>
                        <div className="grid-item">
                            <Image src={sp1} alt="Product Image" />
                                <h3>Product 3</h3>
                                <p>$19.99</p>
                        </div>
                        <div className="grid-item">
                            <Image src={sp1} alt="Product Image" />
                                <h3>Product 4</h3>
                                <p>$12.99</p>
                        </div>
                        <div className="grid-item">
                            <Image src={sp1} alt="Product Image" />
                                <h3>Product 5</h3>
                                <p>$10.99</p>
                        </div>
                        <div className="grid-item">
                            <Image src={sp1} alt="Product Image" />
                                <h3>Product 6</h3>
                                <p>$15.99</p>
                        </div>
                        <div className="grid-item">
                            <Image src={sp1} alt="Product Image" />
                                <h3>Product 7</h3>
                                <p>$19.99</p>
                        </div>
                        <div className="grid-item">
                            <Image src={sp1} alt="Product Image" />
                                <h3>Product 8</h3>
                                <p>$12.99</p>
                        </div>
                    </div>
                    {/* <div className="slider-controls">
                        <button className="prev-arrow"></button>
                        <button className="next-arrow"></button>
                    </div> */}
                </div>
                <div className="see-more-type-product font-montserrat">
                    <a href="">Xem thêm <i className="bi bi-three-dots"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductCatalog;