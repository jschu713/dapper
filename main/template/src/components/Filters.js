import React, { useState } from 'react';
import './Filters.css';
import Results from './Results';
import Tooltip from '@material-ui/core/Tooltip';
import { CirclePicker } from 'react-color';
import Button from '@mui/material/Button';
import { trackPromise } from "react-promise-tracker";

// Color picker circles
class Circles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedColor: '',
            background: '#fff'
        };

        this.handleChangeComplete = this.handleChangeComplete.bind(this);
    }

    // Stores the selected color upon selection
    handleChangeComplete = (color, event) => {
        this.setState({
            selectedColor: color.hex,
            background: color.hex
        });

        const { selectedColor } = this.state;
        this.props.parentCallback(selectedColor)
    };

    render() {
        return (
            <CirclePicker
                colors={["#A80000", "#FB6400", "#FFC400", "#62BA27", "#3342C4", "#9362C4",
                    "#F4F0DB", "#fbe6e8", "#CFCFC5", "#C8AF84", "#565656", "#000000"]}
                onChangeComplete={this.handleChangeComplete} />
        )
    }
}

// Filters that submit as a form to backend to retrieve images from microservices
class FilterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            occasion: '',
            season: '',
            topColor: '',
            isSubmitted: false,
            resultsDisplayed: false,
            isLoaded: false,
            urls: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Form submit logic, prevents default page refresh
    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
            isSubmitted: true,
            isLoaded: false
        })

        const { occasion, season, topColor } = this.state

        // Submit confirmation
        alert(`
        ____Submitted! Please wait for images to load.____\n
        Occasion : ${occasion}
        Season: ${season}
        Top Color: ${topColor}
        `)

        // Sends form information to microservice/backend
        // Tracks promise to know when all URLs are received
        trackPromise(
            fetch("http://127.0.0.1:5000/get_images", {
                method: "POST",
                cache: "no-cache",
                headers: {
                    "Content_type": "application/json",
                },
                body: JSON.stringify(this.state)
            }
            ).then(response => response.json()).then(data => {

                let imgs = []

                for (let i = 0; i < 6; i++) {
                    imgs.push(data['img_urls'][i]['image_url'])
                }

                // Stores retrieved image urls
                this.setState({
                    isLoaded: true,
                    urls: imgs
                })
            }))

    }

    // Store all values of input fields in react state
    // Single method handles all input changes of the input field using ES6
    handleChange(event) {
        event.stopPropagation();
        this.setState({
            [event.target.name]: event.target.value,
        });

    };

    handleTopColorChange = (colorData) => {
        let colorDict = {
            "#a80000": "red",
            "#fb6400": "orange",
            "#ffc400": "yellow",
            "#62ba27": "green",
            "#3342c4": "blue",
            "#9362c4": "purple",
            "#f4f0db": "white",
            "#fbe6e8": "pink",
            "#cfcfc5": "gray",
            "#c8af84": "khaki",
            "#565656": "charcoal",
            "#000000": "black"
        }

        let wordColor = colorDict[colorData]


        this.setState({
            topColor: wordColor
        })
    }

    resetForm = (event) => {
        this.setState({
            occasion: '',
            season: '',
            topColor: '',
            isSubmitted: false,
            resultsDisplayed: false,
            isLoaded: false,
            urls: ''
        })

    }

    render() {
        const isSubmitted = this.state.isSubmitted;
        let grid;

        // Displays results upon form submit
        if (isSubmitted) {
            grid = < Results
                topColor={this.state.topColor}
                isLoaded={this.state.isLoaded}
                urls={this.state.urls} />

        };

        function capFirstLtr(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        // Creates occassion radio buttons
        let filterOcc = ["formal", "business casual", "casual"]
        let occList = []

        Array.from(filterOcc).forEach((item, index) => {
            let caps = capFirstLtr(item)

            occList.push(<label class="custom-control custom-checkbox">
                <input key={index} type="radio" name="occasion" class="custom-control-input"
                    value={item}
                    checked={this.state.occasion === item}
                    onChange={this.handleChange} />
                <div class="custom-control-label">{caps}</div>
            </label>)

        })

        // Creates season radio buttons
        let filterSeasons = ["spring", "summer", "fall", "winter"]
        let seasonIcons = ["fas fa-seedling", "fas fa-sun", "fab fa-canadian-maple-leaf", "far fa-snowflake"]
        let seasonsList = []

        Array.from(filterSeasons).forEach((item, index) => {
            let caps = capFirstLtr(item)

            seasonsList.push(<label class="checkbox-btn">
                <Tooltip title={<h6>{caps}</h6>} placement="bottom">
                    <div>
                        <input key={index} type="radio" name="season"
                            value={item}
                            defaultChecked={this.state.season === { item }}
                            onChange={this.handleChange} />

                        <span class="btn btn-light">
                            <i class={seasonIcons[index]}></i>
                        </span>
                    </div>
                </Tooltip>

            </label>)

        })

        // Creates entire filter list
        let circlePicks = <Circles name='topColor' parentCallback={this.handleTopColorChange} />

        let filterDisplay = ["occassion", "season", "top color"]
        let collapse = ["#collapse_2", "#collapse_4", "#collapse_3"]
        let selection = [occList, seasonsList, circlePicks]
        let filterList = []

        Array.from(filterDisplay).forEach((item, index) => {
            let caps = capFirstLtr(item)

            filterList.push(<article class="filter-group">
                <header class="card-header">
                    <a href="#" data-toggle="collapse" data-target={collapse[index]} aria-expanded="true" class="">
                        <i class="icon-control fa fa-chevron-down"></i>
                        <h6 class="title">{caps} </h6>
                    </a>
                </header>
                <div class="filter-content collapse show" id={collapse[index]}>
                    <div class="card-body">
                        <div className="radio">
                            {selection[index]}
                        </div>
                    </div>
                </div>
            </article>)

        })

        return (

            <form onSubmit={this.handleSubmit}>
                <section class="section-content padding-y">
                    <div class="container">

                        <div class="row">
                            <aside class="col-md-3">

                                <div class="card">
                                    {filterList}

                                    {/* Submit and Reset Buttons */}
                                    <article class="filter-group">
                                        <div class="filter-content collapse show" id="collapse_5">
                                            <div id="submitter" class="card-body">
                                                <Button id='sb' variant="contained" type="submit"> Submit</Button> <br />
                                                <Button id='resetbtn' variant="contained" onClick={this.resetForm}> Reset</Button>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </aside>
                            {/* Displays results */}
                            {grid}
                        </div>
                    </div>
                </section>
            </form >


        );
    }

}

// Displays filters component
function Filters() {

    return (

        <>
            <div classname="App">
                <FilterForm />


                <footer class="section-footer border-top padding-y">
                    <div class="container">
                        <p class="float-md-right">
                            &copy; Copyright 2021 All rights reserved
                        </p>
                        <p>
                            <a href="#">Thanks for visiting!</a>
                        </p>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default React.memo(Filters)
