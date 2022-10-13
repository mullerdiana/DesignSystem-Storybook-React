import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputProps } from './TextInput'

export default {
    title: 'Components/TextInput',
    component: TextInput,
    args: {
        placeholder: 'Type your e-mail adress',
    },
    argTypes: {}
} as Meta<TextInputProps>

export const Default: StoryObj<TextInputProps> = {}

// export const CustomComponent: StoryObj<ButtonProps> = {
// }
