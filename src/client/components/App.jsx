import React from 'react'

import Works from './Works.jsx'
import Home from './Home.jsx'
import Footer from './Footer.jsx'

import '../styles/layout.scss'
import '../styles/app.scss'

import ImgsArr from '../images/images'

const App = ({hide, onClicked}) => {

    const wdImgs = [ImgsArr[0], ImgsArr[1], ImgsArr[2]]
    const lsImgs = [ImgsArr[3], ImgsArr[4], ImgsArr[5]]
    const mtImgs = [ImgsArr[6], ImgsArr[7], ImgsArr[8]]

return(
        <div>
            <div className='container' style={hide}>
                <Home />
                <div className={`works ${onClicked ? 'unclickable' : ''}`}>
                    <Works 
                        title={'Web Development'} 
                        desc={'React Project'} 
                        year={'2020'}
                        imgs={wdImgs}
                        descText={
                            `React, Webpack, Babel 및 기타 라이브러리를 사용하여 제작.`
                                }/>
                    <Works 
                        title={'Lab Study'} 
                        desc={'Study with the Lab members'} 
                        year={'2019'} 
                        imgs={lsImgs}
                        descText={`랩 지도 교수님 및 구성원이 모여 회의 및 스터디`}/>
                    <Works 
                        title={'MT'} 
                        desc={'Membership Training'} 
                        year={'2019'} 
                        imgs={mtImgs}
                        descText={`랩 구성원들의 유대 증진을 위한 MT 활동`}/>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default App;