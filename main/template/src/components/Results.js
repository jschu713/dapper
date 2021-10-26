import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import './Filters.css';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@mui/material/Button';


function Results() {
    return (
        <>

            <main class="col-md-9">

                <div class="row">
                    <div class="col-md-4">
                        <figure class="card card-product-grid">
                            <div class="img-wrap">
                                <span class="badge badge-danger"> NEW </span>
                                <img src="assets/images/items/1.jpg" />
                                <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                            </div>
                            <figcaption class="info-wrap">
                                <div class="fix-height">
                                    <a href="#" class="title">Great item name goes here</a>
                                    <div class="price-wrap mt-2">
                                        <span class="price">$1280</span>
                                        <del class="price-old">$1980</del>
                                    </div>
                                </div>
                                <a href="#" class="btn btn-block btn-primary">Add to cart </a>
                            </figcaption>
                        </figure>
                    </div>

                    <div class="col-md-4">
                        <figure class="card card-product-grid">
                            <div class="img-wrap">
                                <img src="assets/images/items/2.jpg" />
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
                                <img src="assets/images/items/3.jpg" />
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
                    </div>
                </div>


                <nav class="mt-4" aria-label="Page navigation sample">
                    <ul class="pagination">
                        <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </nav>

            </main>
            {/* </div> */}

            {/* </div>  */}
            {/* </section> */}
        </>
    )
}

export default Results
