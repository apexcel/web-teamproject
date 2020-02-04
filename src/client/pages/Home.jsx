import React from 'react'

import '../css/home.css'

import img1 from '../imgs/laptop-keyboard.jpg'

const Home = () => {
    return(
        <div className='container'>
            <section className='section-container'>
                <article className='article-container home-center'>
                    <div className='home-index'>
                        <div className='home-text font-baskerville'>
                            <div className='bold'>D</div>
                            <div className='bold'>B</div>
                            <div className='bold'>N</div>
                            <div className='bold'>E</div>
                            <div className='bold'>T</div>
                        </div>
                        <div className='home-text font-baskerville'>
                            <div className='small'>d</div>
                            <div className='small'>a</div>
                            <div className='small'>t</div>
                            <div className='small'>a</div>
                            <div className='small'>b</div>
                            <div className='small'>a</div>
                            <div className='small'>s</div>
                            <div className='small'>e</div>

                            <div className='small'>n</div>
                            <div className='small'>e</div>
                            <div className='small'>t</div>
                            <div className='small'>w</div>
                            <div className='small'>o</div>
                            <div className='small'>r</div>
                            <div className='small'>k</div>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default Home;