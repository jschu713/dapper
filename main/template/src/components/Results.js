import React, { useState } from 'react';
import { usePromiseTracker } from "react-promise-tracker";
import Loader from "./Loader";

class Results extends React.Component {
    // Component that displays the filter results

    render() {
        // Tracks color
        let loading;
        const color = this.props.topColor;

        // Display loading spinner if not all URLs are received yet
        if (!this.props.isLoaded) {
            loading = <Loader
                promiseTracker={usePromiseTracker}
                color={color}
            />
        }

        // Creates results display cards
        // Images are 278 x 420 per card
        let results = this.props.urls;
        let resultsList = []

        // loops through urls to create each card
        Array.from(results).forEach((item, index) => {
            resultsList.push(<div class="col-md-4">
                <figure class="card card-product-grid">
                    <div class="img-wrap">
                        <img key={index} src={item} />
                    </div>
                </figure>
            </div>)

        })

        return (
            <>
                <main class="col-md-9">
                    {loading}
                    <div class="row">
                        {resultsList}
                    </div>
                </main>
            </>
        )
    }
}

export default React.memo(Results)
