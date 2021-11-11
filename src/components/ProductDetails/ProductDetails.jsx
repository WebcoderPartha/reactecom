import React, {Component, Fragment} from 'react';
import {Breadcrumb, Col, Container, Row} from "react-bootstrap";
import parse from 'html-react-parser';
import axios from "axios";
import AppUrl from "../../api/AppUrl";
import {Link, Redirect} from "react-router-dom";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import ReletedProducts from "./ReletedProducts";
import Reviews from "../common/Reviews";
import Notify from "../../Noty/Notify";


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
            suggestSlug: '',
            suggestProducts:[],
            reviews:[],
            color:'',
            size:'',
            user_id:props.user.id,
            redirectUrl: false,
            favItemReload: false
        }
    }

    componentDidMount() {
        axios.get(AppUrl.singleProductPage(this.state.productSlug)).then(response => {
            if (response.status === 200){
                this.setState({
                    prodId:response.data.id,
                    product:response.data,
                    short:response.data.short_desc,
                    long:response.data.long_desc,
                    category:response.data.category,
                    subcategory: response.data.subcategory,
                    previewImg:response.data.product_image,
                    suggestSlug: response.data.subcategory.slug,
                    addToCart: 'Add To Cart'
                });

                // Suggested APIS
                axios.get(AppUrl.getSuggestProduct(this.state.suggestSlug)).then(response => {
                    if (response.status === 200){
                        this.setState({suggestProducts:response.data[0].products})
                    }

                }).catch(error => {
                    if (error.response){
                        console.log(error)
                    }
                });

                // Reviews APIs
                axios.get(AppUrl.getReviewByProduct(this.state.product.id)).then(response => {
                    if (response.status === 200){
                        this.setState({reviews:response.data})
                    }
                }).catch(error => {
                    if (error.response){
                        console.log(error)
                    }
                })
            }
        }).catch(error => {
            console.log(error)
        });
        // console.log(this.state.p)


    }

    pageRefresh = () => {
        let url = window.location;
        if (this.state.redirectUrl === true){
            return <Redirect to={url} />
        }
    }
    favItemReload = () => {
        let url = window.location;
        if (this.state.favItemReload === true){
            return <Redirect to={url} />
        }
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
    colorOnChange = (e) => {
        this.setState({
            color:e.target.value
        })
    }
    sizeOnChange = (e) => {
        this.setState({
            size:e.target.value
        })
    }
    FavouriteHandler = (e) => {
        e.preventDefault();
        let favButton = document.getElementById('favButton');
        favButton.innerHTML = 'Adding...';

        if (!localStorage.getItem('token')){
            Notify.error("Please login first!");
        }else{

            let MyFormData = new FormData();
            MyFormData.append('user_id', this.props.user.id);
            MyFormData.append('product_id', this.state.product.id);
            axios.post(AppUrl.FavouriteAdd, MyFormData).then(response => {
                if (response.status === 200){
                    Notify.success(response.data.success);
                    favButton.innerHTML = 'Favourite';
                    this.setState({
                        favItemReload:true
                    })
                }
            }).catch(error => {
                if (error.response){
                    console.log(error)
                }
            })
        }

    }
    addToCartHandler = (event) => {

        event.preventDefault();
        let product_id = this.state.product.id
        let color = this.state.color;
        let size = this.state.size;
        let qty = this.state.quantity;
        let user_id = this.state.user_id
		if(!(this.state.product.color === 'NA') && color.length === 0){
            Notify.warning("Please select color!")
        }else if(!(this.state.product.size === 'NA') && size.length === 0){
            Notify.warning("Please select Size!")
        }else if(!localStorage.getItem('token')){
            Notify.warning("Please login first!")
        }else{

            this.setState({
                addToCart:'Adding..'
            });

            let data = new FormData();
            data.append('product_id', product_id);
            data.append('user_id', user_id);
            data.append('color', color);
            data.append('size', size);
            data.append('qty', qty);

            axios.post(AppUrl.AddToCart, data).then(response => {
                if (response.status === 200){
                    Notify.success(response.data.success);
					document.getElementById('clearData').reset();
                    this.setState({
                        addToCart:'Add To Cart',
						quantity: 1,
						color: '',
						size: '',
                        redirectUrl:true
                    })
                }
            }).catch(error => {
                if (error.response){
                    console.log(error)
                }
            })

        }

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


        // now
        let colorShow = color?.split(',').map((color, idx)=>{
           return <option key={idx.toString()} value={color}>{color}</option>
        });

        // Size
        // Same working Split
        // let sizeShow = (this.state.product.size)?.split(',').map((size, idx)=>{
        //     return <option value={size}>{size}</option>
        // })

        // now
        let sizeShow = size?.split(',').map((size, idx) => {
           return <option key={idx.toString()} value={size}>{size}</option>
        });

        let price;
        if (discount_price === null){
            price = (
                <div>
                    <div className="Product-price-card d-inline ">Reguler Price: Tk- {regular_price}</div>
                </div>
            )
        }else{
            price = (
                <div>
                    <div className="Product-price-card d-inline ">Reguler Price: <del>Tk- {regular_price}</del></div>
                    <div className="Product-price-card d-inline ">New Price: Tk- <b>{discount_price}</b></div>
                </div>
            )

        }


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
                
                                        {/*{this.discountPrice(regular_price,discount_price)}*/}

                                        {price}
                
                                    </div>
                                    <div className="input-group mt-3 mb-3">
                                        <Link to={"/category/"+this.state.category.slug}><i className="fa fa-tag mt-1"></i> {category}</Link> &nbsp; &nbsp; <Link to={"/category/"+this.state.category.slug+"/"+this.state.subcategory.slug} ><i className="fa fa-tag mt-1"></i> {subcategory}</Link>
                                    </div>
                                    <form id="clearData" onSubmit={this.addToCartHandler}>
                                        <div className="row">
                                            {color === 'NA' ? '' : (
                                                <div className="form-group col-6">
                                                    <h6 className="mt-2">Color {this.state.colorClass}</h6>
                                                    <select onChange={this.colorOnChange} className="form-control">
                                                        <option>Choose Color</option>
                                                        {colorShow}
                                                    </select>
                                                </div>
                                            )}
                
                                            {size === 'NA' ? '' : (
                                                <div className="form-group col-6">
                                                    <h6 className="mt-2">Size</h6>
                                                    <select onChange={this.sizeOnChange} className="form-control">
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
                                    </form>
                                        <div className="input-group mt-3">
                                            <button form="clearData" type="submit" className="btn site-btn m-1 "> <i className="fa fa-shopping-cart"></i>  {this.state.addToCart}</button>
                                            <button className="btn btn-primary m-1"> <i className="fa fa-car"></i> Order Now</button>
                                            <button onClick={this.FavouriteHandler} id="favButton" className="btn btn-primary m-1"> <i className="fa fa-heart"></i> Favourite</button>
                                        </div>

                                </Col>
                            </Row>
                
                            <Row>
                                <Col className="" md={6} lg={6} sm={12} xs={12}>
                                    <h6 className="mt-2">DETAILS</h6>
                                    {this.state.long ? parse(this.state.long) : ''}
                                </Col>
                
                                <Reviews reviews={this.state.reviews} />
                            </Row>
                
                        </Col>
                    </Row>
                </Container>
                <ReletedProducts suggestProducts={this.state.suggestProducts} />
                {this.pageRefresh()}
                {this.favItemReload()}
            </Fragment>
        );
    }
}

export default ProductDetails;