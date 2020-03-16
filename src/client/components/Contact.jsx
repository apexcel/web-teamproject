import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

import Footer from './Footer.jsx'

import '../styles/contact.scss'

const Contact = () => {

    const mapStyles = {
        position: 'relative',
        width: '100%',
        height: '100%'
    }

    return(
        <div>
            <div className='contact-container'>
                <div className='contact-map-wrapper'>
                    <Map
                        google={google}
                        zoom={17}
                        style={mapStyles}
                        initialCenter={{lat: 37.192740, lng: 127.027417}}
                        >
                        <Marker position={{lat: 37.192740, lng: 127.027417}} />
                    </Map>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default GoogleApiWrapper({
        apiKey: 'AIzaSyANA9wizBmnFPPqbHGdEuH1MiEffPJVyyE'
    })(Contact);