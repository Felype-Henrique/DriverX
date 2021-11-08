import React from 'react';
import Pulse from "react-native-pulse";

import { Container, Title, SubTitle, Spacer, Map, Avatar, Input, Button, ButtonText , VerticalSeparator, Bullet, PulseCircle} from '../../styles';
import { TouchableOpacity} from 'react-native';

const Home = () => {

    const tipo = 'M';
    const status = 'C'; // S - Sem corrida, I - Informações, P - Pesquisa, C - Corrida

    return (
        <Container>
             <Map
                initialRegion={{
                    latitude: -30.011364,
                    longitude: -51.1637373,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                disabled={status === 'P'}
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
                {status === "S" || tipo === "M" &&<TouchableOpacity>
                    <Avatar source={{uri:'https://st.depositphotos.com/1032561/3960/i/950/depositphotos_39604317-stock-photo-handsome-latin-man-thumbs-up.jpg'}}/>
                </TouchableOpacity>}
                {status !== "S" && tipo === "P" && 
                    <Container elevetion={50} justify="flex-end" color="light">
                        <Container padding={15}>
                            <Container justify="flex-start" row>
                                <Bullet/>
                                <SubTitle>{'  '}Endereço de embarque completo</SubTitle>
                            </Container>
                            <Spacer height={3}/>
                            <Container justify="flex-start" row>
                                <Bullet destination/>
                                <SubTitle>{'  '}Endereço de destino completo</SubTitle>
                            </Container>
                        </Container>
                        <Button type="dark" compact>
                            <ButtonText color="light">Toque para editar</ButtonText>
                        </Button>
                    </Container>}
            </Container>
                
            {/*PASSAGEIRO PROCURANDO CORRIDA*/}
            {status === "P" && tipo === "P" && <Container
                padding={20}
                zIndex={-1}
            >
                <Pulse
                numPulses={3}
                diameter={400}
                speed={20}
                duration={2000}
                color= 'orange'
                />
            </Container>}

            <Container elevetion={50} height={150} color="light">

                {/*Passageiro sem corrida*/}
            {tipo === "P" && status === "S"  && <Container justify="flex-start" padding={20} align="flex-start" >
                    <SubTitle>Olá, Silvio Sampaio</SubTitle>
                    <Title>Pra onde você quer ir ?</Title>
                    <Spacer/>
                    <Input placeholder="Procure um destino..."/> 
                </Container>}

                {/* Passageiro informações da corrida*/}
            {tipo === "P" && status === "I" || status === 'P' && <Container justify="flex-end"align="flex-start" >
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
                <Button type={status === "P" ? "muted" : "primary"}>
                    <ButtonText>{status === "P" ? "Cancelar DriverX" : "Chamar DriverX"}</ButtonText>
                </Button>
            </Container>}
                
            {/*Passageiro em corrida*/}
            {tipo === "P" && status === "C" &&<Container border="primary" justify="flex-end" align="flex-start">
                <Container row padding={20} >
                    <Container align="flex-start" row>
                        <Avatar
                        small
                        source={{uri:'https://st.depositphotos.com/1032561/3960/i/950/depositphotos_39604317-stock-photo-handsome-latin-man-thumbs-up.jpg'}}
                        />
                        <Spacer width="10px"/>
                        <Container align="flex-start">
                            <SubTitle bold>Juliana Righi</SubTitle>
                            <SubTitle small>ABC-123, BMW X6, Preta</SubTitle>
                        </Container>
                        </Container>
                        <VerticalSeparator/>
                        <Container padding={5} width={120 + 'px'}>
                            <Title>R$ 12,90 </Title>
                            <SubTitle bold color="primary">Aprox. 5mins</SubTitle>
                        </Container>
                </Container>
                <Button type="muted">
                    <ButtonText>Cancelar corrida</ButtonText>
                </Button>
            </Container>}

                {/*Motorista sem corrida*/}
            {tipo === "M" && status === "S" &&<Container>
                <SubTitle>Olá, Juliana</SubTitle>
                <Title>Nenhuma corrida encontrada.</Title>
            </Container> }
            {/*MOTORISTA ESTA EM CORRIDA*/}
            
            {tipo === "M" && status === "C" && <Container border="primary" justify="flex-end" align="flex-start">
                <Container row padding={16} >
                    <Container align="flex-start" row >
                        <Avatar
                        
                        source={{uri:'https://st.depositphotos.com/1032561/3960/i/950/depositphotos_39604317-stock-photo-handsome-latin-man-thumbs-up.jpg'}}
                        />
                        <Container align="flex-start" padding={1}>            
                            <Container justify="flex-start" row row height={22}>
                                <Bullet/>
                                <SubTitle small numberOfLines={1} >{'  '}Endereço de embarque</SubTitle>
                            </Container>
                            <Container justify="flex-start" row height={22}>
                                <Bullet destination/>
                                <SubTitle small numberOfLines={1}>{'  '}Endereço de destino</SubTitle>
                            </Container>
                        </Container>
                        </Container>
                        <VerticalSeparator/>
                        <Container padding={5} width={90 + 'px'}>
                            <Title small>R$ 12,90 </Title>
                            <SubTitle bold color="primary" small>Aprox. 5mins</SubTitle>
                        </Container>
                </Container>
                <Button type="primary">
                    <ButtonText>Aceitar corrida</ButtonText>
                </Button>
            </Container>}
            
                </Container>
            </Container>
        </Container>
    )
};

export default Home;