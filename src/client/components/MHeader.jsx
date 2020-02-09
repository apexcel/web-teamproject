import React from 'react'

import '../css/mobile/mheader.scss'

const MHeader = () => {
    return(
        <header>
            <div className='mheader-menu'>
            <a className='float-left link' href='/'>DBNET</a>
            <a className='float-right link'>link</a>
            </div>
        </header>
    )
}

export default MHeader;