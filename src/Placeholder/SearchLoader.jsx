import React, {Component,Fragment} from 'react';
import searchLoader from '../assets/images/searchLoader.svg'
import {Card} from "react-bootstrap";
class SearchLoader extends Component {
    render() {
        return (
            <Fragment>
                <Card id="searchResult">
                    <Card.Body className="text-center d-block">
                        <img width={60} src={searchLoader} alt=""/>
                    </Card.Body>
                </Card>
            </Fragment>
        );
    }
}

export default SearchLoader;