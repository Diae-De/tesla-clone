import React from 'react'
import styled from 'styled-components'
import Section from './Section'


function Home() {
    return (
        <Container className="container">
                    <Section
                        title="Model S" description="Oder Online for Touchless Delivery" backgroundImg="model-s.jpg"
                        leftbtntext="Custom Order" rightbtntext="Existing Inventory" arrow="/images/down-arrow.svg"
                        id="models"
                    />
                    <Section 
                        title="Model Y" description="Oder Online for Touchless Delivery" 
                        backgroundImg="model-y.jpg"
                        leftbtntext="Custom Order" rightbtntext="Existing Inventory" 
                        id="modely"
                    />
                    <Section 
                        title="Model 3" description="Oder Online for Touchless Delivery" 
                        backgroundImg="model-3.jpg"
                        leftbtntext="Custom Order" rightbtntext="Existing Inventory" 
                        id="model3"
                    />
                    <Section
                        title="Model X" description="Oder Online for Touchless Delivery" 
                        backgroundImg="model-x.jpg"
                        leftbtntext="Custom Order" rightbtntext="Existing Inventory" 
                        id="modelx"
                    />
                    <Section
                        title="Solar Panels" description="Lowest Cost Solar Panels in America" 
                        backgroundImg="solar-panel.jpg"
                        leftbtntext="Order Now" rightbtntext="Learn More" 
                        id="solarp"
                    />
                    <Section
                        title="Solar Roof" description="Produce Clean Energy From Your Roof" 
                        backgroundImg="solar-roof.jpg"
                        leftbtntext="Order Now" rightbtntext="Learn More" 
                        id="solarr"
                    />
                    <Section
                        title="Accessories" 
                        backgroundImg="accessories.jpg"
                        leftbtntext="Shop Now"
                        id="acc"
                    />
            
        </Container>
    )
}


export default Home

const Container = styled.div`
    height:100vh;
`
