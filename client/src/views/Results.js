import React from 'react'
import ResultMeter from '../components/ResultMeter'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Results = () => {
    return (
        <>
            <Header info={false}/>
            <ResultMeter />
            <Footer/>
        </>
    )
}

export default Results