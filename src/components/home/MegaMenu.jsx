import React, {Component} from 'react';

class MegaMenu extends Component {
    constructor() {
        super();
        this.megaMenu = this.megaMenu.bind(this);
    }

    componentDidMount() {
        this.megaMenu();
    }
    megaMenu = () => {
        var acc = document.getElementsByClassName('accordion');
        var accNum = acc.length;
        var i;
        for (i=0;i < accNum; i++){
            acc[i].addEventListener('click', function (){
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight){
                    panel.style.maxHeight = null;
                }else{
                    panel.style.maxHeight = panel.scrollHeight+"px"
                }
            })
        }
    }

    render() {
        return (
            <div className="accordionMenuDiv">
                <div className="accordionMenuDivInside">
                    <button className="accordion">
                        <img className="accordionMenuIcon" src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/2x/external-image-multimedia-kiranshastry-lineal-color-kiranshastry-1.png" alt=""/> Men's Clothing
                    </button>
                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem"> Mens Tshirts</a></li>
                            <li><a href="#" className="accordionItem"> Mens Tshirts</a></li>
                        </ul>
                    </div>
                    <button className="accordion">
                        <img className="accordionMenuIcon" src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/2x/external-image-multimedia-kiranshastry-lineal-color-kiranshastry-1.png" alt=""/> Men's Clothing
                    </button>
                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem"> Mens Tshirts</a></li>
                            <li><a href="#" className="accordionItem"> Mens Tshirts</a></li>
                        </ul>
                    </div>
                    <button className="accordion">
                        <img className="accordionMenuIcon" src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/2x/external-image-multimedia-kiranshastry-lineal-color-kiranshastry-1.png" alt=""/> Men's Clothing
                    </button>
                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem"> Mens Tshirts</a></li>
                            <li><a href="#" className="accordionItem"> Mens Tshirts</a></li>
                        </ul>
                    </div>
                    <button className="accordion">
                        <img className="accordionMenuIcon" src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/2x/external-image-multimedia-kiranshastry-lineal-color-kiranshastry-1.png" alt=""/> Men's Clothing
                    </button>
                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem"> Mens Tshirts</a></li>
                            <li><a href="#" className="accordionItem"> Mens Tshirts</a></li>
                        </ul>
                    </div>
                    <button className="accordion">
                        <img className="accordionMenuIcon" src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/2x/external-image-multimedia-kiranshastry-lineal-color-kiranshastry-1.png" alt=""/> Men's Clothing
                    </button>
                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem"> Mens Tshirts</a></li>
                            <li><a href="#" className="accordionItem"> Mens Tshirts</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default MegaMenu;