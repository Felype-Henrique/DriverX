import React, {useState, useEffect} from 'react';
import {Keyboard} from 'react-native';

import { Container, ButtonText, Button, Title, SubTitle, Input, Spacer} from '../../styles';


const Car = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() =>{
        const KeyboarDidShowListener = Keyboard.addListener(
        'keyboardDidShow',
        () => setVisible(false),
        );

        const KeyboarDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        () => setVisible(true),
        );

        return () => {
            KeyboarDidShowListener.remove();
            KeyboarDidHideListener.remove();
        }
    },[])

    return (
        <Container padding={30} justify="flex-start">
            <Container align="flex-start" height={40} >
            <Spacer height={20}/>
                <Title>Cadastre seu veículo</Title>
                <SubTitle>Preencha os campos a baixo</SubTitle>
            </Container>
            <Container justify="flex-start">
                <Spacer height={50}/>
                <Input placeholder="Placa do veículo"/>
                <Spacer/>
                <Input placeholder="Marca do veículo"/>
                <Spacer/>
                <Input placeholder="Modelo do veículo"/>
                <Spacer/>
                <Input placeholder="Cor do veículo"/>
            </Container>
            {visible &&<Container height={70} justify="flex-end">
                <Button>
                  <ButtonText>Comece a usar</ButtonText>  
                </Button>
            </Container>}
        </Container>
    );
};

export default Car;