import React, {Component} from 'react';

class MegaMenu extends Component {
    constructor(props) {
        super();
        // this.MegaMenu = this.MegaMenu.bind(this);
    }
    // componentDidMount() {
    //     this.MegaMenu()
    // }

    // MegaMenu(){
    //     var acc = document.getElementsByClassName("accordion");
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

    // Category Sub Category Menu Dropdown Dynamic
    MenuClickHandler = (event) => {
        event.target.classList.toggle("active");
        var panel = event.target.nextElementSibling;
        if(panel.style.maxHeight){
            panel.style.maxHeight = null;
        }else{
            panel.style.maxHeight= panel.scrollHeight+ "px"
        }
    }

    render() {
        const CatList = this.props.data;
        const fetchCat = CatList.map((cat, idx) => {
            return (
                <div key={idx.toString()}>
                    <button onClick={this.MenuClickHandler} className="accordion">
                        <img className="accordionMenuIcon" src={cat.category_image} alt=""/> {cat.category_name}
                    </button>
                    <div className="panel">
                        <ul>
                            {cat.subcategory.map(subcat => {
                                return <li key={subcat.id}><a href=" " className="accordionItem"> {subcat.subcategory_name}</a></li>
                            })}

                        </ul>
                    </div>
                </div>
            )
        })
        return (
            <div className="accordionMenuDiv">
                <div className="accordionMenuDivInside">
                    {fetchCat}
                </div>
            </div>
        );
    }
}

export default MegaMenu;