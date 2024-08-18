import {
    Container,
    Box,
    Heading,
    Text,
    Link,
    useColorModeValue,
    Grid,
    GridItem,
    VStack
} from '@chakra-ui/react'
import Section from '../components/section'
import { fonts } from '../components/fonts'
import { TypeAnimation } from 'react-type-animation'
import AnimatedSection from '../components/animatedsection'

const Page = () => {
    return (
        <Container>
            <Box h="30" />
            <Box
                borderRadius="lg"
                bg={useColorModeValue('gray.900', 'gray.800')}
                p={3}
                mb={6}
                align="center"
                display="flex"
                fontFamily={fonts.sourceCodePro}
                color={useColorModeValue('#99ff9a', '#3bff00')}
                transition="background 0.3s ease, color 0.3s ease"
                width={'100%'}
            >
                <span style={{ fontSize: '2em' }}>
                    {'>'}
                    <span style={{ marginLeft: '0.5rem' }}></span>
                </span>
                <TypeAnimation
                    position="relative"
                    zIndex={1}
                    sequence={[
                        500,
                        "Hi, I'm Anurag!",
                        1500,
                        'Welcome to my website!'
                    ]}
                    speed={50}
                    style={{ fontSize: '2em' }}
                    deletionSpeed={70}
                />
            </Box>

            <Box>
                {/* <Box h="200" /> */}
                <AnimatedSection index={0}>
                    <Section delay="0.1">
                        <Box display={{ md: 'flex' }}>
                            <Box flexGrow={1}>
                                <Heading
                                    as="h2"
                                    variant="page-title"
                                    transition="color 0.3s ease"
                                >
                                    Hello 👋
                                </Heading>
                                <Text transition="color 0.3s ease">
                                    <br />
                                    I&apos;m Anurag Kar, a backend-focused developer specalizing in Python and Python frameworks.
                                    <br />
                                    <br />
                                    <Link
                                        href="mailto:anuragkar970@gmail.com"
                                        color={useColorModeValue('#2ebeec', '#86e1fe')}
                                        transition="color 0.3s ease"
                                    >
                                        Looking to hire me? Email me at anuragkar970@gmail.com
                                    </Link>
                                </Text>
                            </Box>
                        </Box>
                    </Section>
                </AnimatedSection>

                <AnimatedSection index={1}>
                    <Section>
                        <Heading
                            as="h3"
                            variant="section-title"
                            fontSize="lg"
                            borderBottom="2px solid skyblue"
                            display="inline-block"
                            pb={1}
                            transition="color 0.3s ease"
                        >
                            Education
                        </Heading>
                        <VStack spacing={4} align="stretch" mt={4}>
                            <Grid templateColumns="auto 1fr" gap={4}>
                                <GridItem width="10em">
                                    <Text
                                        fontSize="sm"
                                        fontWeight="bold" // Make the date bold
                                        fontFamily="'Roboto', sans-serif" // Use Roboto font
                                        color={useColorModeValue(
                                            'gray.500',
                                            'whiteAlpha.900'
                                        )}
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
                                        color={useColorModeValue(
                                            'gray.600',
                                            'gray.200'
                                        )}
                                    >
                                        Bachelor of Science in Computer Science
                                    </Text>
                                </Box>
                            </Grid>
                        </VStack>
                    </Section>
                </AnimatedSection>

                <AnimatedSection index={2}>
                    <Section>
                        <Heading
                            as="h3"
                            variant="section-title"
                            fontSize="lg"
                            borderBottom="2px solid skyblue"
                            display="inline-block"
                            pb={1}
                            transition="color 0.3s ease"
                        >
                            Experience
                        </Heading>
                        <VStack spacing={4} align="stretch" mt={4}>
                            {/* Experience Entry 1 */}
                            <Grid templateColumns="auto 1fr" gap={4}>
                                <GridItem width="10em">
                                    <Text
                                        fontSize="sm"
                                        fontWeight="bold"
                                        fontFamily="'Roboto', sans-serif"
                                        color={useColorModeValue(
                                            'gray.500',
                                            'whiteAlpha.900'
                                        )}
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
                                        color={useColorModeValue(
                                            'gray.600',
                                            'gray.200'
                                        )}
                                    >
                                        Smurfit Westrock
                                    </Text>
                                </GridItem>
                            </Grid>
                            {/* Experience Entry 2 */}
                            <Grid templateColumns="auto 1fr" gap={4}>
                                <GridItem width="10em">
                                    <Text
                                        fontSize="sm"
                                        fontWeight="bold"
                                        fontFamily="'Roboto', sans-serif"
                                        color={useColorModeValue(
                                            'gray.500',
                                            'whiteAlpha.900'
                                        )}
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
                                        color={useColorModeValue(
                                            'gray.600',
                                            'gray.200'
                                        )}
                                    >
                                        New York Institute of Technology
                                    </Text>
                                </GridItem>
                            </Grid>
                        </VStack>
                    </Section>
                </AnimatedSection>
                <AnimatedSection index={1}>
                    <Section>
                        <Heading
                            as="h3"
                            variant="section-title"
                            fontSize="lg"
                            borderBottom="2px solid skyblue"
                            display="inline-block"
                            pb={1}
                            transition="color 0.3s ease"
                        >
                            Resume
                        </Heading>
                        {/* link my resume in the public folder "public/Anurag_Kar_resume.pdf" */}
                        <Box h="4" />
                        <Link
                            href="/Anurag_Kar_resume.pdf"
                            color={useColorModeValue('#2ebeec', '#86e1fe')}
                            transition="color 0.3s ease"
                        >
                            View my full resume here
                        </Link>
                    </Section>
                </AnimatedSection>
            </Box>
        </Container>
    )
}

export default Page
