import React from 'react';


import { Container, Title, SubTitle, Spacer, Map, Avatar, Input} from '../../styles';
import { TouchableOpacity} from 'react-native';

const Home = () => {

    const tipo = 'P'

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
             <Container
                position="absolute"
                justify="space-between"
                align="flex-start"
                padding={20}
                zIndex={999}
                pointerEvents="box-none"
                style={{height :'100%'}}
             >

                 {/*PARTE SUPERIOR*/}

            <Container height={100} align="flex-start">
                <TouchableOpacity>
                    <Avatar source={{uri:'https://st.depositphotos.com/1032561/3960/i/950/depositphotos_39604317-stock-photo-handsome-latin-man-thumbs-up.jpg'}}/>
                </TouchableOpacity>
            </Container>
                
            <Container elevetion={50} height={150} color="light">

                {/*Passageiro sem corrida*/}
            {tipo === "P" && <Container justify="flex-start" padding={20} align="flex-start" >
                    <SubTitle>Olá, Silvio Sampaio</SubTitle>
                    <Title>Pra onde você quer ir ?</Title>
                    <Spacer/>
                    <Input placeholder="Procure um destino..."/> 
                </Container>}
                
                {/*Motorista sem corrida*/}
            {tipo === "M" && <Container>
                <SubTitle>Olá, Juliana</SubTitle>
                <Title>Nenhuma corrida encontrada.</Title>
            </Container>   }

            </Container>

            </Container>
        </Container>
    )
};

export default Home;