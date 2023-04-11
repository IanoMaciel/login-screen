import React from "react"
import { Icon, IInputProps, Input } from 'native-base'

// icons
import { Feather } from '@expo/vector-icons'

type InputFormProps = {
    icon: string;
} & IInputProps;

export default function InputForm({ icon, ...rest }: InputFormProps ) {
    return(
        <Input
            InputLeftElement={<Icon as={Feather} name={icon} size="lg" marginLeft={4} color="gray.400"/>}
            backgroundColor="primary.400"
            borderWidth="0"
            height="12"
            fontSize="lg"
            placeholderTextColor="gray.500"
            color="gray.200"
            {...rest}
        />
    )
}