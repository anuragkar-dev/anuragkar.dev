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
    Flex
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/animatedsection';
import { IoBriefcaseOutline, IoDocumentTextOutline, IoDesktopOutline, IoInformationCircleOutline, IoPencilOutline } from "react-icons/io5";
import { PiLinkBold } from 'react-icons/pi'

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
);

const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 }
};

const Page = () => {
    const gradientColors = 'linear(to-r, blue.400, purple.500)'; // Keeping your gradient colors

    return (
        <Container>
            <style>
                {`
                    @keyframes lavaLampEffect {
                        0% {
                            background-position: 0% 0%;
                        }
                        50% {
                            background-position: 100% 100%;
                        }
                        100% {
                            background-position: 0% 0%;
                        }
                    }
                `}
            </style>

            <Box h="30" />
            <Box
                as={motion.div}
                initial="initial"
                animate="animate"
                variants={fadeInUp}
                transition={{ duration: 0.8, ease: "easeOut" }}
                borderRadius="10px"
                bgGradient={gradientColors}
                bgSize="200% 200%"
                animation="lavaLampEffect 7s ease infinite"
                p={6}
                mb={3}
                textAlign="center"
                color={useColorModeValue('white', 'white')}
                fontWeight="normal"
                boxShadow="none"
            >
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <Heading fontSize="3xl">anuragkar.dev</Heading>
                </motion.div>
            </Box>

            <Box>
                <AnimatedSection index={0}>
                    <Box mb={3}>
                        <Section>
                            <Box display={{ md: 'flex' }}>
                                <Box flexGrow={1}>
                                    <Heading
                                        as="h2"
                                        variant="page-title"
                                        position="relative"
                                        pb={2}
                                        fontSize="2xl"
                                        color={useColorModeValue('black', 'white')}
                                        display="inline-block"
                                    >
                                        <Flex align="center">
                                        About Me&nbsp;
                                        <IoInformationCircleOutline />
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
                                    <Text transition="color 0.3s ease" color={useColorModeValue('black', 'white')}>
                                        <br />
                                        I&apos;m Anurag Kar, 
                                        a backend-focused developer and data analyst, with a specialization in
                                        Python and Python frameworks.
                                        <br />
                                        <br />
                                        <strong>Looking to hire me? </strong> 
                                        <Link
                                            href="mailto:anurag@anuragkar.dev"
                                            bgGradient={gradientColors}
                                            bgClip="text"
                                            transition="color 0.3s ease"
                                            _hover={{
                                                textDecoration: 'underline',
                                                filter: 'brightness(1.25)',
                                            }}
                                        >
                                            Email me at anurag@anuragkar.dev
                                        </Link>
                                    </Text>
                                </Box>
                            </Box>
                        </Section>
                    </Box>
                </AnimatedSection>

                <AnimatedSection index={1}>
                    <Box mb={3}>
                        <Section>
                            <Heading
                                as="h3"
                                variant="section-title"
                                fontSize="lg"
                                position="relative"
                                pb={2}
                                color={useColorModeValue('black', 'white')}
                                display="inline-block"
                            >
                                <Flex align="center">
                                    Resume &nbsp;
                                    <IoDocumentTextOutline />
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
                                    filter: 'brightness(1.25)',
                                }}
                            >
                                View my full resume here
                            </Link>
                        </Section>
                    </Box>
                </AnimatedSection>

                <AnimatedSection index={2}>
                    <Box mb={-1}>
                        <Section>
                            <Heading
                                as="h3"
                                variant="section-title"
                                fontSize="lg"
                                position="relative"
                                pb={2}
                                color={useColorModeValue('black', 'white')}
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
                                            fontWeight="bold"
                                            fontFamily="'Roboto', sans-serif"
                                            color={useColorModeValue('black', 'white')}
                                            whiteSpace="nowrap"
                                        >
                                            Apr 2025 – Present
                                        </Text>
                                    </GridItem>
                                    <GridItem>
                                        <Text fontWeight="bold">
                                        Systematic Fixed Income Trader
                                        </Text>
                                        <Text
                                            fontSize="sm"
                                            color={useColorModeValue('black', 'white')}
                                        >
                                            BlackRock
                                        </Text>
                                    </GridItem>
                                </Grid>
                                <Grid templateColumns="auto 1fr" gap={4}>
                                    <GridItem width="10em">
                                        <Text
                                            fontSize="sm"
                                            fontWeight="bold"
                                            fontFamily="'Roboto', sans-serif"
                                            color={useColorModeValue('black', 'white')}
                                            whiteSpace="nowrap"
                                        >
                                            May 2024 – Aug 2024
                                        </Text>
                                    </GridItem>
                                    <GridItem>
                                        <Text fontWeight="bold">
                                            Data Automation Intern
                                        </Text>
                                        <Text
                                            fontSize="sm"
                                            color={useColorModeValue('black', 'white')}
                                        >
                                            Smurfit Westrock
                                        </Text>
                                    </GridItem>
                                </Grid>
                                <Grid templateColumns="auto 1fr" gap={4}>
                                    <GridItem width="10em">
                                        <Text
                                            fontSize="sm"
                                            fontWeight="bold"
                                            fontFamily="'Roboto', sans-serif"
                                            color={useColorModeValue('black', 'white')}
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
                                            color={useColorModeValue('black', 'white')}
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
                    <Box mb={3}>
                        <Section>
                            <Heading
                                as="h3"
                                variant="section-title"
                                fontSize="lg"
                                position="relative"
                                pb={2}
                                color={useColorModeValue('black', 'white')}
                                display="inline-block"
                            >
                                <Flex align="center">
                                    Projects &nbsp;
                                    <IoDesktopOutline />
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
                                            fontWeight="bold"
                                            fontFamily="'Roboto', sans-serif"
                                            color={useColorModeValue('black', 'white')}
                                            whiteSpace="nowrap"
                                        >
                                            Feb 2023 - Present
                                        </Text>
                                    </GridItem>
                                    <GridItem>
                                        <Link
                                            href="https://github.com/F1-Buddy/f1buddy-python"
                                            fontWeight="bold"
                                            color={useColorModeValue('black', 'white')}
                                            textDecoration="none"  // Remove underline
                                            _hover={{
                                                bgGradient: gradientColors,
                                                bgClip: 'text',
                                                textDecoration: 'none',
                                                transition: 'all 0.3s ease',
                                            }}
                                            display="flex"           // Use flexbox for alignment
                                            alignItems="center"      // Align items vertically
                                        >
                                            <PiLinkBold color={useColorModeValue('black', 'white')} />
                                            <Text ml={2}>F1Buddy</Text>
                                        </Link>
                                    </GridItem>
                                </Grid>
                                
                            <Grid templateColumns="auto 1fr" gap={4}>
                                    <GridItem width="10em">
                                        <Text
                                            fontSize="sm"
                                            fontWeight="bold"
                                            fontFamily="'Roboto', sans-serif"
                                            color={useColorModeValue('black', 'white')}
                                            whiteSpace="nowrap"
                                        >
                                            Jan 2025 - Feb 2025
                                        </Text>
                                    </GridItem>
                                    <GridItem>
                                        <Link
                                            href="https://github.com/anuragkar-dev/Movie-React-Project"
                                            fontWeight="bold"
                                            color={useColorModeValue('black', 'white')}
                                            textDecoration="none"  // Remove underline
                                            _hover={{
                                                bgGradient: gradientColors,
                                                bgClip: 'text',
                                                textDecoration: 'none',
                                                transition: 'all 0.3s ease',
                                            }}
                                            display="flex"           // Use flexbox for alignment
                                            alignItems="center"      // Align items vertically
                                        >
                                            <PiLinkBold color={useColorModeValue('black', 'white')} />
                                            <Text ml={2}>Movie Discovery Web App</Text>
                                        </Link>
                                    </GridItem>
                                </Grid>
                                
                                
                                <Grid templateColumns="auto 1fr" gap={4}>
                                    <GridItem width="10em">
                                        <Text
                                            fontSize="sm"
                                            fontWeight="bold"
                                            fontFamily="'Roboto', sans-serif"
                                            color={useColorModeValue('black', 'white')}
                                            whiteSpace="nowrap"
                                        >
                                            Jan 2024 - Dec 2024
                                        </Text>
                                    </GridItem>
                                    <GridItem>
                                        <Link
                                            href="https://github.com/anuragkar-dev/Sentiment-Analysis"
                                            fontWeight="bold"
                                            color={useColorModeValue('black', 'white')}
                                            textDecoration="none"  // Remove underline
                                            _hover={{
                                                bgGradient: gradientColors,
                                                bgClip: 'text',
                                                textDecoration: 'none',
                                                transition: 'all 0.3s ease',
                                            }}
                                            display="flex"           // Use flexbox for alignment
                                            alignItems="center"      // Align items vertically
                                        >
                                            <PiLinkBold color={useColorModeValue('black', 'white')} />
                                            <Text ml={2}>Sentiment Analysis Web App</Text>
                                        </Link>
                                    </GridItem>
                                </Grid>
                                <Grid templateColumns="auto 1fr" gap={4}>
                                    <GridItem width="10em">
                                        <Text
                                            fontSize="sm"
                                            fontWeight="bold"
                                            fontFamily="'Roboto', sans-serif"
                                            color={useColorModeValue('black', 'white')}
                                            whiteSpace="nowrap"
                                        >
                                            Sep 2023 - Dec 2023
                                        </Text>
                                    </GridItem>
                                    <GridItem>
                                        <Link
                                            href="https://github.com/anuragkar-dev/WanderSync"
                                            fontWeight="bold"
                                            color={useColorModeValue('black', 'white')}
                                            textDecoration="none"  // Remove underline
                                            _hover={{
                                                bgGradient: gradientColors,
                                                bgClip: 'text',
                                                textDecoration: 'none',
                                                transition: 'all 0.3s ease',
                                            }}
                                            display="flex"           // Use flexbox for alignment
                                            alignItems="center"      // Align items vertically
                                        >
                                            <PiLinkBold color={useColorModeValue('black', 'white')} />
                                            <Text ml={2}>WanderSync</Text>
                                        </Link>
                                    </GridItem>
                                </Grid>
                            </VStack>
                        </Section>
                    </Box>
                </AnimatedSection>

                <AnimatedSection index={4}>
                    <Box mb={3}>
                        <Section>
                            <Heading
                                as="h3"
                                variant="section-title"
                                fontSize="lg"
                                position="relative"
                                pb={2}
                                color={useColorModeValue('black', 'white')}
                                display="inline-block"
                            >
                                <Flex align="center">
                                Education &nbsp;
                                <IoPencilOutline />
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
                                            fontWeight="bold"
                                            fontFamily="'Roboto', sans-serif"
                                            color={useColorModeValue('black', 'white')}
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
                                            color={useColorModeValue('black', 'white')}
                                        >
                                            Bachelor of Science in Computer Science
                                        </Text>
                                    </Box>
                                </Grid>
                            </VStack>
                        </Section>
                    </Box>
                </AnimatedSection>
            </Box>
        </Container>
    );
};

export default Page;
