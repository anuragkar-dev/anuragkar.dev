import React, { useRef, useState, useEffect } from 'react'
import { SlideFade, Box } from '@chakra-ui/react'
import { useInView } from 'framer-motion'

const AnimatedSection = ({
    children,
    index,
    initialDelay = 0.1,
    reAnimationDelay = 0.1
}) => {
    const ref = useRef(null)
    const [initialLoad, setInitialLoad] = useState(true)
    const isInView = useInView(ref, { once: false })

    useEffect(() => {
        if (initialLoad) {
            const timeoutId = setTimeout(() => setInitialLoad(false), 500)
            return () => clearTimeout(timeoutId)
        }
    }, [initialLoad])

    return (
        <Box ref={ref}>
            <SlideFade
                initialScale={0.9}
                in={isInView}
                delay={
                    initialLoad
                        ? initialDelay + index * 0.05
                        : isInView
                          ? reAnimationDelay
                          : 0
                }
            >
                {children}
            </SlideFade>
        </Box>
    )
}

export default AnimatedSection
