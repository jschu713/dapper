import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import './Filters.css';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@mui/material/Button';

// Images are 278 x 420 per card
// {this.props.season}


// function Results() {
class Results extends React.Component {


    render() {

        const occasion = this.props.occasion;
        const season = this.props.season;
        const topColor = this.props.topColor;
        let resultsDisplayed = this.props.resultsDisplayed;

        let image1;
        let image2;
        let image3;

        if (occasion == 'formal' && season == 'fall' && topColor == 'red') {
            image1 = '../../testImages\\Red\\Resized\\redblue.jpg'
            image2 = '../../testImages\\Red\\Resized\\redkhaki.jpg'
            image3 = '../../testImages\\Red\\Resized\\redred.jpg'
        }

        else if (occasion == 'casual' && season == 'spring' && topColor == 'blue') {
            image1 = '../../testImages\\Blue\\Resized\\lightbluedenim.jpg'
            image2 = '../../testImages\\Blue\\Resized\\blueblack.jpg'
            image3 = '../../testImages\\Blue\\Resized\\navywhite.jpg'
        }

        return (
            <>
                <main class="col-md-9">

                    <div class="row">
                        <div class="col-md-4">
                            <figure class="card card-product-grid">
                                <div class="img-wrap">
                                    <img src={image1} />
                                </div>

                            </figure>
                        </div>

                        <div class="col-md-4">
                            <figure class="card card-product-grid">
                                <div class="img-wrap">
                                    <img src={image2} />
                                </div>
                            </figure>
                        </div>

                        <div class="col-md-4">
                            <figure class="card card-product-grid">
                                <div class="img-wrap">
                                    <img src={image3} />
                                </div>
                            </figure>
                        </div>

                        {/* <div class="col-md-4">
                        <figure class="card card-product-grid">
                            <div class="img-wrap">
                                <img src="assets/images/items/4.jpg" />
                                <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                            </div>
                            <figcaption class="info-wrap">
                                <div class="fix-height">
                                    <a href="#" class="title">Product name goes here just for demo item</a>
                                    <div class="price-wrap mt-2">
                                        <span class="price">$1280</span>
                                    </div>
                                </div>
                                <a href="#" class="btn btn-block btn-primary">Add to cart </a>
                            </figcaption>
                        </figure>
                    </div>

                    <div class="col-md-4">
                        <figure class="card card-product-grid">
                            <div class="img-wrap">
                                <img src="assets/images/items/5.jpg" />
                                <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                            </div>
                            <figcaption class="info-wrap">
                                <div class="fix-height">
                                    <a href="#" class="title">Product name goes here just for demo item</a>
                                    <div class="price-wrap mt-2">
                                        <span class="price">$1280</span>
                                    </div>
                                </div>
                                <a href="#" class="btn btn-block btn-primary">Add to cart </a>
                            </figcaption>
                        </figure>
                    </div>

                    <div class="col-md-4">
                        <figure class="card card-product-grid">
                            <div class="img-wrap">
                                <img src="assets/images/items/6.jpg" />
                                <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                            </div>
                            <figcaption class="info-wrap">
                                <div class="fix-height">
                                    <a href="#" class="title">Product name goes here just for demo item</a>
                                    <div class="price-wrap mt-2">
                                        <span class="price">$1280</span>
                                    </div>
                                </div>
                                <a href="#" class="btn btn-block btn-primary">Add to cart </a>
                            </figcaption>
                        </figure>
                    </div>

                    <div class="col-md-4">
                        <figure class="card card-product-grid">
                            <div class="img-wrap">
                                <img src="assets/images/items/7.jpg" />
                                <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                            </div>
                            <figcaption class="info-wrap">
                                <div class="fix-height">
                                    <a href="#" class="title">Product name goes here just for demo item</a>
                                    <div class="price-wrap mt-2">
                                        <span class="price">$1280</span>
                                    </div>
                                </div>
                                <a href="#" class="btn btn-block btn-primary">Add to cart </a>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="col-md-4">
                        <figure class="card card-product-grid">
                            <div class="img-wrap">
                                <img src="assets/images/items/1.jpg" />
                                <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                            </div>
                            <figcaption class="info-wrap">
                                <div class="fix-height">
                                    <a href="#" class="title">Product name goes here just for demo item</a>
                                    <div class="price-wrap mt-2">
                                        <span class="price">$1280</span>
                                    </div>
                                </div>
                                <a href="#" class="btn btn-block btn-primary">Add to cart </a>
                            </figcaption>
                        </figure>
                    </div> */}
                    </div>


                    {/* <nav class="mt-4" aria-label="Page navigation sample">
                    <ul class="pagination">
                        <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </nav> */}

                </main>
                {/* </div> */}

                {/* </div>  */}
                {/* </section> */}
            </>
        )
    }
}

export default React.memo(Results)
