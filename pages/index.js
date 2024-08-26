import {
    Container,
    Box,
    Heading,
    Text,
    Link,
    useColorModeValue,
    Grid,
    GridItem,
    VStack,
    useTheme,
    Flex
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/animatedsection'
import { IoBriefcaseOutline, IoNewspaper } from "react-icons/io5";

// Define a basic Section component
const Section = ({ children, ...props }) => (
    <Box
        position="relative"
        p={4}
        borderRadius="md"
        {...props}
    >
        {children}
    </Box>
)

const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 }
}

const Page = () => {
    const gradientColors = 'linear(to-r, blue.400, purple.500)';

    // Define background color for text visibility
    const textColor = useColorModeValue('gray.800', 'white');

    return (
        <Container>
            <Box h="30" />
            <Box
                as={motion.div}
                initial="initial"
                animate="animate"
                variants={fadeInUp}
                transition={{ duration: 0.8, ease: "easeOut" }}
                borderRadius="lg"
                bgGradient={gradientColors}
                p={6}
                mb={3} // Adjust spacing here
                textAlign="center"
                color="white"
                fontWeight="normal" // Ensure normal font weight
                boxShadow="none" // Remove card-like shadow
            >
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.25, ease: "easeOut" }}
                >
                    <Heading fontSize="3xl">anuragkar.dev</Heading>
                </motion.div>
            </Box>

            <Box>
                <AnimatedSection index={0}>
                    <Box mb={1}> {/* Adjust the spacing here */}
                        <Section>
                            <Box display={{ md: 'flex' }}>
                                <Box flexGrow={1}>
                                    <Heading
                                        as="h2"
                                        variant="page-title"
                                        position="relative"
                                        pb={2}
                                        fontSize="2xl"
                                        color={textColor}
                                        display="inline-block"
                                    >
                                        About Me &nbsp;ⓘ
                                        <Box
                                            position="absolute"
                                            bottom={0}
                                            left={0}
                                            width="100%"
                                            height="2px"
                                            bgGradient={gradientColors}
                                            borderRadius="md"
                                        />
                                    </Heading>
                                    <Text transition="color 0.3s ease" color={textColor}>
                                        <br />
                                        I&apos;m Anurag Kar, a backend-focused developer specializing in Python and Python frameworks.
                                        <br />
                                        <br />
                                        <strong>Looking to hire me? </strong> 
                                        <Link
                                            href="mailto:anuragkar970@gmail.com"
                                            bgGradient={gradientColors}
                                            bgClip="text"
                                            transition="color 0.3s ease"
                                            _hover={{
                                                textDecoration: 'underline',
                                                filter: 'brightness(1.2)',
                                            }}
                                        >
                                            Email me at anuragkar970@gmail.com
                                        </Link>
                                    </Text>
                                </Box>
                            </Box>
                        </Section>
                    </Box>
                </AnimatedSection>

                <AnimatedSection index={1}>
                    <Box mb={1}> {/* Adjust the spacing here */}
                        <Section>
                            <Heading
                                as="h3"
                                variant="section-title"
                                fontSize="lg"
                                position="relative"
                                pb={2}
                                color={textColor}
                                display="inline-block"
                            >
                                Education &nbsp;✎
                                <Box
                                    position="absolute"
                                    bottom={0}
                                    left={0}
                                    width="100%"
                                    height="2px"
                                    bgGradient={gradientColors}
                                    borderRadius="md"
                                />
                            </Heading>
                            <VStack spacing={4} align="stretch" mt={4}>
                                <Grid templateColumns="auto 1fr" gap={4}>
                                    <GridItem width="10em">
                                        <Text
                                            fontSize="sm"
                                            fontWeight="bold" // Make dates bold
                                            fontFamily="'Roboto', sans-serif"
                                            color={textColor}
                                        >
                                            Sep 2021 - Dec 2024
                                        </Text>
                                    </GridItem>
                                    <Box textAlign="left">
                                        <Text fontWeight="bold">
                                            New York Institute of Technology
                                        </Text>
                                        <Text
                                            fontSize="sm"
                                            color={textColor}
                                        >
                                            Bachelor of Science in Computer Science
                                        </Text>
                                    </Box>
                                </Grid>
                            </VStack>
                        </Section>
                    </Box>
                </AnimatedSection>

                <AnimatedSection index={2}>
                    <Box mb={1}> {/* Adjust the spacing here */}
                        <Section>
                            <Heading
                                as="h3"
                                variant="section-title"
                                fontSize="lg"
                                position="relative"
                                pb={2}
                                color={textColor}
                                display="inline-block"
                            >
                                <Flex align="center">
                                    Experience &nbsp;
                                    <IoBriefcaseOutline />
                                </Flex>

                                <Box
                                    position="absolute"
                                    bottom={0}
                                    left={0}
                                    width="100%"
                                    height="2px"
                                    bgGradient={gradientColors}
                                    borderRadius="md"
                                />
                            </Heading>
                            <VStack spacing={4} align="stretch" mt={4}>
                                <Grid templateColumns="auto 1fr" gap={4}>
                                    <GridItem width="10em">
                                        <Text
                                            fontSize="sm"
                                            fontWeight="bold" // Make dates bold
                                            fontFamily="'Roboto', sans-serif"
                                            color={textColor}
                                            whiteSpace="nowrap"
                                        >
                                            May 2024 – Aug 2024
                                        </Text>
                                    </GridItem>
                                    <GridItem>
                                        <Text fontWeight="bold">
                                            Platforms Operations Intern
                                        </Text>
                                        <Text
                                            fontSize="sm"
                                            color={textColor}
                                        >
                                            Smurfit Westrock
                                        </Text>
                                    </GridItem>
                                </Grid>
                                <Grid templateColumns="auto 1fr" gap={4}>
                                    <GridItem width="10em">
                                        <Text
                                            fontSize="sm"
                                            fontWeight="bold" // Make dates bold
                                            fontFamily="'Roboto', sans-serif"
                                            color={textColor}
                                            whiteSpace="nowrap"
                                        >
                                            April 2024 – May 2024
                                        </Text>
                                    </GridItem>
                                    <GridItem>
                                        <Text fontWeight="bold">
                                            IT Student Assistant
                                        </Text>
                                        <Text
                                            fontSize="sm"
                                            color={textColor}
                                        >
                                            New York Institute of Technology
                                        </Text>
                                    </GridItem>
                                </Grid>
                            </VStack>
                        </Section>
                    </Box>
                </AnimatedSection>

                <AnimatedSection index={3}>
                    <Box mb={1}> {/* Adjust the spacing here */}
                        <Section>
                            <Heading
                                as="h3"
                                variant="section-title"
                                fontSize="lg"
                                position="relative"
                                pb={2}
                                color={textColor}
                                display="inline-block"
                            >
                                <Flex align="center">
                                    Resume &nbsp;
                                    <IoNewspaper />
                                </Flex>

                                <Box
                                    position="absolute"
                                    bottom={0}
                                    left={0}
                                    width="100%"
                                    height="2px"
                                    bgGradient={gradientColors}
                                    borderRadius="md"
                                />
                            </Heading>
                            <Box h="4" />
                            <Link
                                href="/Anurag_Kar_resume.pdf"
                                bgGradient={gradientColors}
                                bgClip="text"
                                transition="color 0.3s ease"
                                _hover={{
                                    textDecoration: 'underline',
                                    filter: 'brightness(1.2)',
                                }}
                            >
                                View my full resume here
                            </Link>
                        </Section>
                    </Box>
                </AnimatedSection>
            </Box>
        </Container>
    )
}

export default Page
