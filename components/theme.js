import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false
    },
    styles: {
        global: props => ({
            body: {
                color: props.colorMode === 'dark' ? 'white' : 'black',
                bg: props.colorMode === 'dark' ? 'black' : 'white'
            }
        })
    }
})

export default theme
