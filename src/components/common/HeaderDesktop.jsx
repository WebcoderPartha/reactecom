import React, {Component, Fragment} from 'react';
import {Navbar, Container, Row, Col, Button,Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import Logo from '../../assets/images/logo.png'
import axios from "axios";
import AppUrl from "../../api/AppUrl";
import SearchLoader from "../../assets/images/searchLoader.svg";

class HeaderDesktop extends Component {
    constructor() {
        super();
        this.state= {
            searchTerm: '',
            productResults: [],
            category: '',
            subcategory: '',
            searchBox: 'd-none',
            loaderDiv: 'd-none',
            cartItem: '',
            favItem: ''
        }
    }
    searchOnChange = () => {
        console.log(this.state.searchTerm);
        if (this.state.searchTerm === ''){
            this.setState({
                searchBox:'d-none'
            })
        }else{
            this.setState({
                searchBox:'',
                loaderDiv: ''
            })
        }
        axios.get(AppUrl.getProductSearch(this.state.searchTerm)).then(res => {
            if (res.status === 200){
                this.setState({
                    productResults:res.data,
                    category: res.category,
                    subcategory:res.subcategory,
                    loaderDiv:'d-none'
                })
            }
            console.log(res)
        }).catch(error => {
            console.log(error)
        })

    }
    componentDidMount() {
        axios.get(AppUrl.getCartItemCount(this.props.user.id)).then(response => {
            if (response.status === 200){
                this.setState({
                    cartItem:response.data
                })
            }
        }).catch(error => {
            if (error.response){
                console.log(error)
            }
        });

        axios.get(AppUrl.countFavourite(this.props.user.id)).then(response => {
            if (response.status === 200){
                this.setState({
                    favItem:response.data
                });
            }
        }).catch(error => {
            if (error.response){
                console.log(error)
            }
        });
    }

    render() {
        const productResults = this.state.productResults;
        const myView =  productResults.map((product, idx) => {
            return (
                <div key={idx.toString()} className="row border">
                    <div className="col-4">
                        <img className="searchImage" src={product.product_image} alt=""/>
                    </div>
                    <div className="col-8">
                        <p className="product-name-on-card mb-0">{product.product_name}</p>
                        <p><i className="fa fa-tag"></i> {product.category.category_name} &nbsp; &nbsp; <i className="fa fa-tag"></i> {product.subcategory.subcategory_name}</p>
                        <p className="product-price-on-card card-text"><span
                            className="text-primary"><del><small>$ 34222</small></del></span>
                            &nbsp; &nbsp;$23424</p>
                    </div>
                </div>
            )
        });

        let myLink;

        if (localStorage.getItem('token')){
             myLink =  (
                <span>
                      &nbsp;&nbsp; <Link to="/favourite">
                          <i className="text-black fa h4 fa-heart"></i>
                            <sup>
                                <span className="badge text-white bg-danger">{this.state.favItem}</span>
                            </sup>
                      </Link>
                    <Link to="/logout" className="btn h4">Logout</Link>
                    <Link to="/cart" className="cart-btn">
                        <i className="fa fa-shopping-cart"></i> {this.state.cartItem} Items
                    </Link>
                </span>
            )

        }else{
             myLink = (
                <span>
                    &nbsp;&nbsp;
                     <Link to="/favourite">
                         <i className="text-black fa h4 fa-heart"></i> <sup><span className="badge text-white bg-danger"> 0</span></sup>
                                    </Link>
                    <Link to="/login" className="btn h4">Login</Link>
                    <Link to="/register" className="h4 btn">REGISTER</Link>
                    <Link to="/cart" className="cart-btn">
                        <i className="fa fa-shopping-cart"></i> 0 Items
                    </Link>
                </span>
            )
        }
        return (
            <Fragment>
                <div className="TopSectionDown">
                    <Navbar fixed={"top"} className="navbar" bg="light">

                        <Container fluid={"true"} className="fixed-top shadow-sm p-2 mb-0 bg-white">
                            <Row>
                                <Col lg={4} md={4} sm={12} xs={12}>

                                    <Link to={'/'}> <img className="nav-logo" src={Logo} alt=""/> </Link>
                                </Col>

                                <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                                    <div className="input-group w-100">
                                        <input onKeyUp={this.searchOnChange} onChange={(e) => {this.setState({searchTerm:e.target.value})}} type="text" className="form-control" />

                                        <Button type="button" className="btn site-btn"><i className="fa fa-search"> </i>
                                        </Button>
                                    </div>
                                    {/*<Card className={this.state.searchBox} id="searchResult">*/}
                                    <Card id="searchResult" className={this.state.searchBox}>
                                        <Card.Body>
                                            {myView}
                                        </Card.Body>
                                    </Card>
                                    <Card id="searchResult" className={this.state.loaderDiv}>
                                        <Card.Body className={'text-center'}>
                                            <img src={SearchLoader} width={60} alt=""/>
                                        </Card.Body>
                                    </Card>

                                </Col>

                                <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                                    <Link to="/notifications">
                                        <i className="text-black fa h4 fa-bell"></i> <sup><span className="badge text-white bg-danger">4</span></sup>
                                    </Link>
                                    {myLink}


                                </Col>

                            </Row>

                        </Container>

                    </Navbar>
                </div>
            </Fragment>
        );
    }
}

export default HeaderDesktop;