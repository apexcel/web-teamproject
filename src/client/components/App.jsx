import React from 'react'

import Works from './Works.jsx'
import Home from './Home.jsx'
import Footer from './Footer.jsx'

import '../styles/layout.scss'
import '../styles/app.scss'

import ImgsArr from '../images/images'

const App = ({hide, onClicked}) => {

return(
        <div>
            <div className='container' style={hide}>
                <Home />
                <div className={`works ${onClicked ? 'unclickable' : ''}`}>
                    <Works 
                        title={'Web Development'} 
                        desc={'React Project'} 
                        year={'2020'}
                        imgs={ImgsArr}
                        descText={
                            `React, Webpack, Babel 및 기타 라이브러리를 사용하여 제작.`
                                }/>
                    <Works 
                        title={'Lab Study'} 
                        desc={'Study with the Lab members'} 
                        year={'2019'} 
                        imgs={ImgsArr}
                        descText={`랩 지도 교수님 및 구성원이 모여 회의 및 스터디`}/>
                    <Works 
                        title={'MT'} 
                        desc={'Membership Training'} 
                        year={'2019'} 
                        imgs={ImgsArr}
                        descText={`랩 구성원들의 유대 증진을 위한 MT 활동`}/>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default App;