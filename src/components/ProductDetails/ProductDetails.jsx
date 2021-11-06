import React, {Component, Fragment} from 'react';
import {Breadcrumb, Col, Container, Row} from "react-bootstrap";
import parse from 'html-react-parser';
import axios from "axios";
import AppUrl from "../../api/AppUrl";
import {Link} from "react-router-dom";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';

class ProductDetails extends Component {
    constructor(props) {
        super();
        this.state = {
            product: '',
            category:'',
            subcategory: '',
            short: '',
            long: '',
            sizeClass: '',
            productSlug: props.productSlug,
            quantity: 1,
            previewImg: '0',
        }
    }
    componentDidMount() {
        axios.get(AppUrl.singleProductPage(this.state.productSlug)).then(res => {
            if (res.status === 200){
                this.setState({
                    product:res.data,
                    short:res.data.short_desc,
                    long:res.data.long_desc,
                    category:res.data.category,
                    subcategory: res.data.subcategory,
                    previewImg:res.data.product_image
                })
            }
        }).catch(error => {
            console.log(error)
        });
    }


    imgOnClick = (event) => {
        // document.getElementById('bigImage').src = event.target.src
        let imgSrc = event.target.getAttribute('src');
        // let previewImg = document.getElementById('bigImage');
        // ReactDOM.findDOMNode(previewImg).setAttribute('src', imgSrc);
        this.setState({
            previewImg:imgSrc
        })
    }
    discountPrice(regular, discount){
        if (discount){
            return (
                <div>
                    <div className="Product-price-card d-inline ">Reguler Price <del>Tk- {regular}</del></div>
                    <div className="Product-price-card d-inline ">New Price Tk- <b>{discount}</b>
                </div>
                </div>

            )
        }
    }

    incrementQty = () =>{
        let qty = this.state.quantity + 1;
        this.setState({
            quantity:qty
        })
    }
    decrementQty = () => {
        let qty = this.state.quantity - 1;
        this.setState({
            quantity: qty
        })
    }

    render() {

        let product1 = this.state.product.product_image;
        let product2 = this.state.product.product_image2;
        let product3 = this.state.product.product_image3;
        let product4 = this.state.product.product_image4;
        let discount_price = this.state.product.discount_price;
        let regular_price = this.state.product.regular_price;
        let color = this.state.product.color;
        let size = this.state.product.size;
        let subcategory = this.state.subcategory.subcategory_name;
        let category = this.state.category.category_name;



        // Same working Split
        // let colorShow = (this.state.product.color)?.split(',').map((color, idx)=>{
        //     return <option value={color}>{color}</option>
        // });
        // Same working Split
        let colorShow = color?.split(',').map((color, idx)=>{
           return <option key={idx.toString()} value={color}>{color}</option>
        });

        // Size
        // Same working Split
        // let sizeShow = (this.state.product.size)?.split(',').map((size, idx)=>{
        //     return <option value={size}>{size}</option>
        // })
        let sizeShow = size?.split(',').map((size, idx) => {
           return <option key={idx.toString()} value={size}>{size}</option>
        });



        return (
            <Fragment>
                <Container  className="BetweenTwoSection">
                    <div className="breadbody">
                        <Breadcrumb>
                            <Link className="breadcrumb-item" to="/"> Home </Link>
                            <Link className="breadcrumb-item" to={"/products/"+this.state.product.slug}> {this.state.product.product_name} </Link>
                        </Breadcrumb>
                    </div>
                    <Row className="p-2">
                        <Col className="shadow-sm bg-white pb-3 mt-4" md={12} lg={12} sm={12} xs={12}>
                            <Row>
                                <Col className="p-3 text-center" md={6} lg={6} sm={12} xs={12}>
                                    <InnerImageZoom zoomType={"hover"} zoomScale={1.8} src={this.state.previewImg} zoomSrc={this.state.previewImg} />
                                    <Container  className="my-3">
                                        <Row>
                                            <Col className="p-0 m-0 text-center"  md={3} lg={3} sm={3} xs={3}>
                                                <img onClick={this.imgOnClick} alt="" className="w-100 imageCursor" src={product1} />
                                            </Col>
                                            <Col className="p-0 m-0 text-center" md={3} lg={3} sm={3} xs={3}>
                                                <img onClick={this.imgOnClick}  alt="" className="w-100 imageCursor" src={product2} />
                                            </Col>
                                            <Col className="p-0 m-0 text-center" md={3} lg={3} sm={3} xs={3}>
                                                <img onClick={this.imgOnClick}  alt="" className="w-100 imageCursor" src={product3} />
                                            </Col>
                                            <Col className="p-0 m-0 text-center" md={3} lg={3} sm={3} xs={3}>
                                                <img onClick={this.imgOnClick}  alt="" className="w-100 imageCursor" src={product4} />
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                                <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
                                    <h5 className="Product-Name">{this.state.product.product_name}</h5>
                                    <div className="section-sub-title">{this.state.short ? parse(this.state.short) : ''}</div>
                                    <div className="input-group mt-3 mb-3">

                                        {this.discountPrice(regular_price,discount_price)}


                                    </div>
                                    <div className="input-group mt-3 mb-3">
                                        <Link to={"/category/"+this.state.category.slug}><i className="fa fa-tag mt-1"></i> {category}</Link> &nbsp; &nbsp; <Link to={"/category/"+this.state.category.slug+"/"+this.state.subcategory.slug} ><i className="fa fa-tag mt-1"></i> {subcategory}</Link>
                                    </div>
                                    <form>
                                        <div className="row">
                                            {color === 'NA' ? '' : (
                                                <div className="form-group col-6">
                                                    <h6 className="mt-2">Color {this.state.colorClass}</h6>
                                                    <select className="form-control">
                                                        <option>Choose Color</option>
                                                        {colorShow}
                                                    </select>
                                                </div>
                                            )}

                                            {size === 'NA' ? '' : (
                                                <div className="form-group col-6">
                                                    <h6 className="mt-2">Size</h6>
                                                    <select className="form-control">
                                                        <option >Choose Size</option>
                                                        {sizeShow}
                                                    </select>
                                                </div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <h6 className="mt-2">Quantity</h6>
                                            <div className="row quantity">
                                                <div className="col-4">
                                                    {this.state.quantity === 1 ? (
                                                        <div onClick={this.decrementQty} className="btn btn-danger disabled">-</div>
                                                    ) : (
                                                        <div onClick={this.decrementQty} className="btn btn-danger">-</div>
                                                    )}

                                                </div>
                                                <div className="col-4">
                                                    <input value={this.state.quantity} onChange={(e) => {this.setState({quantity:e.target.value})}} className="form-control" type="text"/>
                                                </div>
                                                <div className="col-4">
                                                    <div onClick={this.incrementQty} className="btn-primary btn">+</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="input-group mt-3">
                                            <button className="btn site-btn m-1 "> <i className="fa fa-shopping-cart"></i>  Add To Cart</button>
                                            <button className="btn btn-primary m-1"> <i className="fa fa-car"></i> Order Now</button>
                                            <button className="btn btn-primary m-1"> <i className="fa fa-heart"></i> Favourite</button>
                                        </div>
                                    </form>
                                </Col>
                            </Row>

                            <Row>
                                <Col className="" md={6} lg={6} sm={12} xs={12}>
                                    <h6 className="mt-2">DETAILS</h6>
                                    {this.state.long ? parse(this.state.long) : ''}
                                </Col>

                                <Col className="" md={6} lg={6} sm={12} xs={12}>
                                    <h6 className="mt-2">REVIEWS</h6>
                                    <p className=" p-0 m-0"><span className="Review-Title">Kazi Ariyan</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                                    <p className=" p-0 m-0"><span className="Review-Title">Kazi Ariyan</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                                    <p className=" p-0 m-0"><span className="Review-Title">Kazi Ariyan</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default ProductDetails;