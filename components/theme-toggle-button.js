import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {
    const { toggleColorMode } = useColorMode()
    const gradientColors = 'linear(to-r, blue.400, purple.500)'; // Keeping your gradient colors

    return (
        
        <AnimatePresence mode="wait" initial={false}>
            <motion.div
                style={{ display: 'inline-block' }}
                key={useColorModeValue('light', 'dark')}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ x: -30, opacity: 0 }}
                transition={{ duration: 0.15 }}
            >
                <IconButton
                    aria-label="Toggle theme"
                    bgGradient={gradientColors}
                    // colorScheme={useColorModeValue('blue', 'purple')}
                    color="white"
                    icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
                    onClick={toggleColorMode}
                    transition="background 1s ease"  // Smooth transition for background change
                    _hover={{
                        bgGradient: 'linear(to-r, blue.500, purple.600)',  // Slightly different gradient for hover effect
                        filter: 'brightness(1.25)',  // Smooth transition for background change on hover
                    }}
                    _focus={{
                        bgGradient: gradientColors,  // Maintain the gradient on focus
                    }}
                ></IconButton>
            </motion.div>
        </AnimatePresence>
    )
}

export default ThemeToggleButton
