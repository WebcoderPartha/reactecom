import React, {Component} from 'react';
import {Link} from "react-router-dom";

class MegaMenuMobile extends Component {
    // constructor(props) {
    //     super();
    //     // this.MegaMenu = this.MegaMenu.bind(this);
    // }
    // componentDidMount() {
    //     this.MegaMenu()
    // }
    
    // MegaMenu(){
    //     var acc = document.getElementsByClassName("accordionMobile");
    //     var accNum = acc.length;
    //     var i;
    //     for(i=0;i<accNum;i++){
    //         acc[i].addEventListener("click",function (){
    //             this.classList.toggle("active");
    //             var panel = this.nextElementSibling;
    //             if(panel.style.maxHeight){
    //                 panel.style.maxHeight = null;
    //             }else{
    //                 panel.style.maxHeight= panel.scrollHeight+ "px"
    //             }
    //         })
    //     }
    // }
    mobileMenuHandler = (event) => {
        event.target.classList.toggle("active");
        let panel = event.target.nextElementSibling;
        if(panel.style.maxHeight){
            panel.style.maxHeight = null;
        }else{
            panel.style.maxHeight= panel.scrollHeight+ "px"
        }
    }

    render() {
        const CatList = this.props.data;
        const MyView = CatList.map((category, idx) => {
            return (
                <div key={idx.toString()}>
                    <button className="accordionMobile" onClick={this.mobileMenuHandler}>
                        <img className="accordionMenuIconMobile" src={category.category_image} alt=""/> {category.category_name}
                    </button>
                    <div className="panelMobile">
                        <ul>
                            {(category.subcategory).map((subcat,idx) => {
                                return (
                                    <li key={idx.toString()}><Link to={'/category/'+category.slug+'/'+subcat.slug} className="accordionItemMobile"> {subcat.subcategory_name}</Link></li>
                                )
                            })}

                        </ul>
                    </div>
                </div>
            )
        })
        return (
            <div className="accordionMenuDiv">
                <div className="accordionMenuDivInside">
                    {MyView}
                </div>
            </div>
        );
    }
}

export default MegaMenuMobile;