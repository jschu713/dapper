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

        const results = this.props.urls;

        // Creates results display cards
        // Images are 278 x 420 per card
        const ResultsCard = () => {
            return (
                <div class="col-md-4">
                    <figure class="card card-product-grid">
                        <div class="img-wrap">
                            <img src={results[0]} />
                        </div>
                    </figure>
                </div>
            )
        }
        const ResultsCard2 = () => {
            return (
                <div class="col-md-4">
                    <figure class="card card-product-grid">
                        <div class="img-wrap">
                            <img src={results[1]} />
                        </div>
                    </figure>
                </div>
            )
        }

        const ResultsCard3 = () => {
            return (
                <div class="col-md-4">
                    <figure class="card card-product-grid">
                        <div class="img-wrap">
                            <img src={results[2]} />
                        </div>
                    </figure>
                </div>
            )
        }

        const ResultsCard4 = () => {
            return (
                <div class="col-md-4">
                    <figure class="card card-product-grid">
                        <div class="img-wrap">
                            <img src={results[3]} />
                        </div>
                    </figure>
                </div>
            )
        }
        const ResultsCard5 = () => {
            return (
                <div class="col-md-4">
                    <figure class="card card-product-grid">
                        <div class="img-wrap">
                            <img src={results[4]} />
                        </div>
                    </figure>
                </div>
            )
        }

        const ResultsCard6 = () => {
            return (
                <div class="col-md-4">
                    <figure class="card card-product-grid">
                        <div class="img-wrap">
                            <img src={results[5]} />
                        </div>
                    </figure>
                </div>
            )
        }

        // Creates rows to display the results cards
        const ResultsRow = () => {
            return (
                <div class="row">
                    <ResultsCard> </ResultsCard>
                    <ResultsCard2> </ResultsCard2>
                    <ResultsCard3> </ResultsCard3>
                </div>
            )
        }

        const ResultsRow2 = () => {
            return (
                <div class="row">
                    <ResultsCard4> </ResultsCard4>
                    <ResultsCard5> </ResultsCard5>
                    <ResultsCard6> </ResultsCard6>
                </div>
            )
        }

        return (
            <>
                <main class="col-md-9">
                    {loading}
                    <ResultsRow></ResultsRow>
                    <ResultsRow2></ResultsRow2>
                </main>
            </>
        )
    }
}

export default React.memo(Results)
