import React, { useState } from 'react';


// Images are 278 x 420 per card
// {this.props.season}


class Results extends React.Component {

    render() {
        const results = this.props.urls;

        const Card = () => {
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
        const Card2 = () => {
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

        const Card3 = () => {
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

        const Card4 = () => {
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
        const Card5 = () => {
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

        const Card6 = () => {
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

        const Row = () => {
            return (
                <div class="row">
                    <Card> </Card>
                    <Card2> </Card2>
                    <Card3> </Card3>
                </div>
            )
        }

        const Row2 = () => {
            return (
                <div class="row">
                    <Card4> </Card4>
                    <Card5> </Card5>
                    <Card6> </Card6>
                </div>
            )
        }

        return (
            <>
                <main class="col-md-9">
                    <Row></Row>
                    <Row2></Row2>
                </main>
            </>
        )
    }
}

export default React.memo(Results)
