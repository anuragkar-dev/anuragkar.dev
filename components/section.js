import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
    shouldForwardProp: prop => shouldForwardProp(prop) || prop === 'transition'
})

const Section = ({ children }) => {
    return <StyledDiv mb={8}>{children}</StyledDiv>
}

export default Section
