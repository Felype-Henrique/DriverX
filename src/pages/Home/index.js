import React from 'react';


import { Container, Title, Map } from '../../styles';

const Home = () => {
    return (
        <Container>
             <Map
                initialRegion={{
                    latitude: -30.011364,
                    longitude: -51.1637373,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
             />
        </Container>
    )
};

export default Home;