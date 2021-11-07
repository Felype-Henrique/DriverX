import React from 'react';


import { Container, Title, SubTitle, Spacer, Map, Avatar, Input, Button, ButtonText , VerticalSeparator, Bullet} from '../../styles';
import { TouchableOpacity} from 'react-native';

const Home = () => {

    const tipo = 'P';
    const status = 'I'; // S - Sem corrida, I - Informações, P - Pesquisa, C - Corrida

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
                {status === "S" &&<TouchableOpacity>
                    <Avatar source={{uri:'https://st.depositphotos.com/1032561/3960/i/950/depositphotos_39604317-stock-photo-handsome-latin-man-thumbs-up.jpg'}}/>
                </TouchableOpacity>}
                {status !== "S" && 
                    <Container elevetion={50} justify="flex-end" color="light">
                        <Container padding={20}>
                            <Container justify="flex-start" row>
                                <Bullet/>
                                <SubTitle>{'  '}Endereço de embarque completo</SubTitle>
                            </Container>
                            <Spacer height={20}/>
                            <Container justify="flex-start" row>
                                <Bullet destiation/>
                                <SubTitle>{'  '}Endereço de destino completo</SubTitle>
                            </Container>
                        </Container>
                        <Button type="dark" compact>
                            <ButtonText color="light">Toque para editar</ButtonText>
                        </Button>
                    </Container>}
            </Container>
                
            <Container elevetion={50} height={150} color="light">

                {/*Passageiro sem corrida*/}
            {tipo === "P" && status === "S"  && <Container justify="flex-start" padding={20} align="flex-start" >
                    <SubTitle>Olá, Silvio Sampaio</SubTitle>
                    <Title>Pra onde você quer ir ?</Title>
                    <Spacer/>
                    <Input placeholder="Procure um destino..."/> 
                </Container>}

                {/* Passageiro informações da corrida*/}
            {tipo === "P" && status === "I" && <Container justify="flex-end"align="flex-start" >
                <Container padding={20}>
                    <SubTitle>DriverX Convecional</SubTitle>
                    <Spacer/>
                    <Container row>
                        <Container>
                            <Title>R$ 13,90</Title>
                        </Container>
                        <VerticalSeparator/>
                        <Container>
                            <Title>5 mins</Title>
                        </Container>
                    </Container>
                </Container>
                <Button>
                    <ButtonText>Chamar DriverX</ButtonText>
                </Button>
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