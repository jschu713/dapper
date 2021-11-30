import React from 'react';
import { render } from 'react-dom';
import Loader from 'react-loader-spinner';
import './Loader.css';

function ShowDetail(color) {
    return (
        <div className="loadingDiv">
            <div className="loadingHeader">
                <h1>Please wait for images to load</h1>
            </div>
            <div className="loaderDots">
                <Loader type="ThreeDots" color={color.color} height="100" width="100" />
            </div>
        </div>
    );
}

export default ShowDetail;