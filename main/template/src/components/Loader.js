import React from 'react';
import { render } from 'react-dom';
import Loader from 'react-loader-spinner';
import './Loader.css';

function ShowDetail(color) {
    let colorDict = {
        "red": "#a80000",
        "orange": "#fb6400",
        "yellow": "#ffc400",
        "green": "#62ba27",
        "blue": "#3342c4",
        "purple": "#9362c4",
        "white": "#f4f0db",
        "pink": "#fbe6e8",
        "gray": "#cfcfc5",
        "khaki": "#c8af84",
        "charcoal": "#565656",
        "black": "#000000"
    }

    return (
        <div className="loadingDiv">
            <div className="loadingHeader">
                <h1>Please wait for images to load</h1>
            </div>
            <div className="loaderDots">
                <Loader type="ThreeDots" color={colorDict[color.color]} height="100" width="100" />
            </div>
        </div>
    );
}

export default ShowDetail;