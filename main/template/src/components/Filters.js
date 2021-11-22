import React, { useState } from 'react';
import './Filters.css';
import Results from './Results';
import Tooltip from '@material-ui/core/Tooltip';
import { CirclePicker } from 'react-color';
import Button from '@mui/material/Button';

class Circles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedColor: '',
            background: '#fff'
        };

        this.handleChangeComplete = this.handleChangeComplete.bind(this);
    }

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
                    "#F4F0DB", "#FEE9CE", "#CFCFC5", "#C8AF84", "#565656", "#000000"]}
                onChangeComplete={this.handleChangeComplete} />
            // onChangeComplete={color => setSelectedColor(color.hex)} />
        )
    }
}

class FilterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            occasion: '',
            season: '',
            topColor: '',
            btmColor: '',
            isSubmitted: false,
            resultsDisplayed: false,
            urls: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Form submit logic, prevents default page refresh
    handleSubmit(event) {
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

            this.setState({
                urls: imgs
            })
        })

        this.setState({
            [event.target.name]: event.target.value,
            isSubmitted: true,
            resultsDisplayed: true,
        })

        const { occasion, season, topColor, btmColor, isSubmitted, resultsDisplayed, urls } = this.state

        event.preventDefault();


        alert(`
        ____Your Details____\n
        Occasion : ${occasion}
        Season: ${season}
        Top Color: ${topColor}
        Bottom Color: ${btmColor}
        `)
    }

    // Store all values of input fields in react state
    // Single method handles all input changes of hte input field using ES6
    handleChange(event) {
        event.stopPropagation();
        this.setState({
            [event.target.name]: event.target.value,
        });

    };


    handleTopColorChange = (colorData) => {
        let wordColor = ''

        // colors={["#A80000", "#FB6400", "#FFC400", "#62BA27", "#3342C4", "#9362C4",
        //             "#F4F0DB", "#FEE9CE", "#CFCFC5", "#C8AF84", "#565656", "#000000"]}

        if (colorData == "#a80000") {
            wordColor = "red"
        }
        if (colorData == "#fb6400") {
            wordColor = "orange"
        }
        if (colorData == "#ffc400") {
            wordColor = "yellow"
        }
        if (colorData == "#62ba27") {
            wordColor = "green"
        }

        if (colorData == "#3342c4") {
            wordColor = "blue"
        }
        if (colorData == "#9362c4") {
            wordColor = "purple"
        }

        if (colorData == "#f4f0db") {
            wordColor = "white"
        }
        if (colorData == "#fee9ce") {
            wordColor = "beige"
        }
        if (colorData == "#cfcfc5") {
            wordColor = "gray"
        }
        if (colorData == "#c8af84") {
            wordColor = "khaki"
        }

        if (colorData == "#565656") {
            wordColor = "charcoal"
        }
        if (colorData == "#000000") {
            wordColor = "black"
        }


        this.setState({
            topColor: wordColor
        })
    }

    handleBtmColorChange = (colorData) => {
        let wordColor = ''

        // colors={["#A80000", "#FB6400", "#FFC400", "#62BA27", "#3342C4", "#9362C4",
        //             "#F4F0DB", "#FEE9CE", "#CFCFC5", "#C8AF84", "#565656", "#000000"]}

        if (colorData == "#a80000") {
            wordColor = "red"
        }
        if (colorData == "#fb6400") {
            wordColor = "orange"
        }
        if (colorData == "#ffc400") {
            wordColor = "yellow"
        }
        if (colorData == "#62ba27") {
            wordColor = "green"
        }

        if (colorData == "#3342c4") {
            wordColor = "blue"
        }
        if (colorData == "#9362c4") {
            wordColor = "purple"
        }

        if (colorData == "#f4f0db") {
            wordColor = "white"
        }
        if (colorData == "#fee9ce") {
            wordColor = "beige"
        }
        if (colorData == "#cfcfc5") {
            wordColor = "gray"
        }
        if (colorData == "#c8af84") {
            wordColor = "khaki"
        }

        if (colorData == "#565656") {
            wordColor = "charcoal"
        }
        if (colorData == "#000000") {
            wordColor = "black"
        }


        this.setState({
            btmColor: wordColor
        })
    }

    resetForm = (event) => {
        this.setState({
            occasion: '',
            season: '',
            topColor: '',
            btmColor: '',
            isSubmitted: false,
            resultsDisplayed: false,
            urls: ''
        })

    }

    // const [selectedColor, setSelectedColor] = useState()

    render() {
        const isSubmitted = this.state.isSubmitted;
        let grid;

        if (isSubmitted) {
            grid = < Results
                occasion={this.state.occasion}
                season={this.state.season}
                topColor={this.state.topColor}
                btmColor={this.state.btmColor}
                resultsDisplayed={this.state.resultsDisplayed}
                urls={this.state.urls} />

        };

        return (

            <form onSubmit={this.handleSubmit}>
                <section class="section-content padding-y">
                    <div class="container">

                        <div class="row">
                            <aside class="col-md-3">

                                {/* Occasion */}
                                <div class="card">
                                    <article class="filter-group">
                                        <header class="card-header">
                                            <a href="#" data-toggle="collapse" data-target="#collapse_2" aria-expanded="true" class="">
                                                <i class="icon-control fa fa-chevron-down"></i>
                                                <h6 class="title">Occasion </h6>
                                            </a>
                                        </header>
                                        <div class="filter-content collapse show" id="collapse_2">
                                            <div class="card-body">
                                                <div className="radio">
                                                    <label class="custom-control custom-checkbox">
                                                        <input type="radio" name="occasion" class="custom-control-input"
                                                            value="formal"
                                                            checked={this.state.occasion === 'formal'}
                                                            onChange={this.handleChange} />
                                                        <div class="custom-control-label">Formal
                                                        </div>
                                                    </label>
                                                    <label class="custom-control custom-checkbox">
                                                        <input type="radio" name="occasion" class="custom-control-input"
                                                            value="business casual"
                                                            checked={this.state.occasion === 'business casual'}
                                                            onChange={this.handleChange} />
                                                        <div class="custom-control-label">Business Casual
                                                        </div>
                                                    </label>
                                                    <label class="custom-control custom-checkbox">
                                                        <input type="radio" name="occasion" class="custom-control-input"
                                                            value="casual"
                                                            checked={this.state.occasion === 'casual'}
                                                            onChange={this.handleChange} />
                                                        <div class="custom-control-label">Casual
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Season */}
                                        <article class="filter-group">
                                            <header class="card-header">
                                                <a href="#" data-toggle="collapse" data-target="#collapse_4" aria-expanded="true" class="">
                                                    <i class="icon-control fa fa-chevron-down"></i>
                                                    <h6 class="title">Season </h6>
                                                </a>
                                            </header>
                                            <div class="filter-content collapse show" id="collapse_4">
                                                <div class="card-body">

                                                    <label class="checkbox-btn">
                                                        <Tooltip title={<h6>Spring</h6>} placement="bottom">
                                                            <div>
                                                                <input type="radio" name="season"
                                                                    value="spring"
                                                                    checked={this.state.season === 'spring'}
                                                                    onChange={this.handleChange} />

                                                                <span class="btn btn-light">
                                                                    <i class="fas fa-seedling"></i>
                                                                </span>
                                                            </div>
                                                        </Tooltip>

                                                    </label>

                                                    <label class="checkbox-btn">
                                                        <Tooltip title={<h6>Summer</h6>} placement="bottom">
                                                            <div>
                                                                <input type="radio" name="season"
                                                                    value="summer"
                                                                    checked={this.state.season === 'summer'}
                                                                    onChange={this.handleChange} />
                                                                <span class="btn btn-light">
                                                                    <i class="fas fa-sun"></i>
                                                                </span>
                                                            </div>
                                                        </Tooltip>
                                                    </label>

                                                    <label class="checkbox-btn">
                                                        <Tooltip title={<h6>Fall</h6>} placement="bottom">
                                                            <div>
                                                                <input type="radio" name="season"
                                                                    value="fall"
                                                                    checked={this.state.season === 'fall'}
                                                                    onChange={this.handleChange} />
                                                                <span class="btn btn-light">
                                                                    <i class="fab fa-canadian-maple-leaf"></i>
                                                                </span>
                                                            </div>
                                                        </Tooltip>
                                                    </label>

                                                    <label class="checkbox-btn">
                                                        <Tooltip title={<h6>Winter</h6>} placement="bottom">
                                                            <div>
                                                                <input type="radio" name="season"
                                                                    value="winter"
                                                                    checked={this.state.season === 'winter'}
                                                                    onChange={this.handleChange} />
                                                                <span class="btn btn-light">
                                                                    <i class="far fa-snowflake"></i>
                                                                </span>
                                                            </div>
                                                        </Tooltip>
                                                    </label>
                                                </div>
                                            </div>
                                        </article>

                                    </article>

                                    {/* Top Color */}
                                    <article class="filter-group">
                                        <header class="card-header">
                                            <a href="#" data-toggle="collapse" data-target="#collapse_3" aria-expanded="true" class="">
                                                <i class="icon-control fa fa-chevron-down"></i>
                                                <h6 class="title">Top Color</h6>
                                            </a>
                                        </header>
                                        <div class="filter-content collapse show" id="collapse_3">
                                            <div class="card-body">
                                                <Circles
                                                    name='topColor'
                                                    parentCallback={this.handleTopColorChange} />
                                            </div>
                                        </div>
                                    </article>

                                    {/* Bottom Color */}
                                    <article class="filter-group">
                                        <header class="card-header">
                                            <a href="#" data-toggle="collapse" data-target="#collapse_3" aria-expanded="true" class="">
                                                <i class="icon-control fa fa-chevron-down"></i>
                                                <h6 class="title">Bottom Color</h6>
                                            </a>
                                        </header>
                                        <div class="filter-content collapse show" id="collapse_3">
                                            <div class="card-body">
                                                <Circles
                                                    name='btmColor'
                                                    parentCallback={this.handleBtmColorChange} />
                                            </div>
                                        </div>
                                    </article>

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
                            {grid}
                        </div>
                    </div>
                </section>
            </form >


        );
    }

}


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
