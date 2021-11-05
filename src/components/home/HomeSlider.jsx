import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import AppUrl from "../../api/AppUrl";

class HomeSlider extends Component {
    constructor() {
        super();
        this.state = {
            sliders: []
        }
    }
    componentDidMount() {
        axios.get(AppUrl.Slider).then(res => {
            if (res.status === 200){
                this.setState({
                    sliders:res.data
                })
            }
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            initialSlide: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        const getSliders = this.state.sliders;
        const MyView = getSliders.map((slider, idx) => {
            return (
                <div key={idx.toString()}>
                    <img className="slider-img" src={slider.slider_image} alt=""/>
                </div>
            )
        })

        return (
            <div>
                <Slider {...settings}>
                    {MyView}
                </Slider>
            </div>
        );
    }
}

export default HomeSlider;