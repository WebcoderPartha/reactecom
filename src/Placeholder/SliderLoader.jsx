import React, {Component} from 'react';

class SliderLoader extends Component {
    render() {
        return (
            <div className={this.props.loadingDiv}>
                <div className="ph-item">
                    <div className="ph-col-12">
                        <div className="ph-picture"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SliderLoader;