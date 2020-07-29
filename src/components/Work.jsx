import React from 'react'
import '../public/css/work.css'
import Text from './Text'
import PlomeriaBA from '../public/img/plomeriaba.png'
import Recipies from '../public/img/recipies.png'

const Work = () => {
    return (
        <section id="work-content">
            <span id="work" className="position"></span>
            <div className="title-section">
                <h3><Text text="work" section="work" /></h3>
            </div>
            <div className="content-section">
                <div className="justify-content-center row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                    <div class="card">
                            <img src={PlomeriaBA} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">
                                    <Text text="plumberDescription" section="work" />
                                </p>
                                <a href="https://plomeriaba.web.app/" class="btn btn-primary float-right"><Text text="visit" section="work" /></a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                        <div class="card">
                            <img src={Recipies} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">
                                    <Text text="recipiesDescription" section="work" />
                                </p>
                                <a href="https://recipies-91cf8.web.app/" class="btn btn-primary float-right"><Text text="visit" section="work" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work
