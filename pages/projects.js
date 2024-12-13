import {
    Container,
    Heading,
    SimpleGrid,
    Divider,
    Box,
    Link,
    useColorModeValue
} from '@chakra-ui/react'
import { Carousel } from '../components/carousel'
import { SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'

import { IoCloud, IoLogoDiscord, IoLogoJavascript, IoLogoPython } from 'react-icons/io5'
import { TbApi } from 'react-icons/tb'
import { PiLinkBold } from 'react-icons/pi'
import AnimatedSection from '../components/animatedsection.js'
import dynamic from 'next/dynamic';

const VideoPlayer = dynamic(() => import('../components/videoplayer'), { ssr: false });

const Projects = () => {
    const gradientColors = 'linear(to-r, blue.400, purple.500)';
    const textColor = useColorModeValue('black', 'white');
    const logoColor = useColorModeValue('black', 'white'); // Adjusted for light mode

    return (
        <Box as="main" pb={8}>
            <Container
                style={{
                    boxSizing: 'border-box'
                }}
            >
                <Box>
                    <Heading
                        as="h3"
                        fontSize={'2em'}
                        mb={4}
                        paddingTop={'1rem'}
                    >
                        Projects
                    </Heading>
                    <Divider />
                    <SimpleGrid columns={1} gap={6} mt={8}>
                        <AnimatedSection index={0}>
                            <Box>
                                <Heading as="h4" fontSize={'1.5em'} mb={4}>
                                    <Link
                                        href="https://github.com/F1-Buddy/f1buddy-python"
                                        display="inline-flex"
                                        alignItems="center"
                                        style={{ gap: 10 }}
                                        pl={2}
                                        color={textColor}
                                        _hover={{
                                            textDecoration: 'none',
                                            bgGradient: gradientColors,
                                            bgClip: 'text',
                                            color: 'transparent'
                                        }}
                                        transition="all 0.3s ease"
                                    >
                                        <PiLinkBold color={textColor} />
                                        <Box
                                            as="span"
                                            _hover={{
                                                bgGradient: gradientColors,
                                                bgClip: 'text',
                                                color: 'transparent'
                                            }}
                                        >
                                            F1Buddy
                                        </Box>
                                        <IoLogoPython color={logoColor} />
                                        <IoLogoDiscord color={logoColor} />
                                        <TbApi color={logoColor} />
                                        <IoCloud color={logoColor} />
                                    </Link>
                                </Heading>
                                <p>
                                    A Discord bot that creates F1 data
                                    visualizations.
                                </p>
                                <br />

                                <Carousel>
                                    <SwiperSlide className="carousel-slide">
                                        <img src="https://raw.githubusercontent.com/F1-Buddy/f1buddy-python/dev-rakib-2/images/telemetry.png" />
                                    </SwiperSlide>
                                    <SwiperSlide className="carousel-slide">
                                        <img src="https://raw.githubusercontent.com/F1-Buddy/f1buddy-python/dev-rakib-2/images/positions.png" />
                                    </SwiperSlide>
                                    <SwiperSlide className="carousel-slide">
                                        <img src="https://raw.githubusercontent.com/F1-Buddy/f1buddy-python/dev-rakib-2/images/trackdominance.png" />
                                    </SwiperSlide>
                                    <SwiperSlide className="carousel-slide">
                                        <img src="https://raw.githubusercontent.com/F1-Buddy/f1buddy-python/dev-rakib-2/images/h2h.png" />
                                    </SwiperSlide>
                                    <SwiperSlide className="carousel-slide">
                                        <img src="https://raw.githubusercontent.com/F1-Buddy/f1buddy-python/dev-rakib-2/images/qualigap.png" />
                                    </SwiperSlide>
                                    <SwiperSlide className="carousel-slide">
                                        <img src="https://raw.githubusercontent.com/F1-Buddy/f1buddy-python/dev-rakib-2/images/wcc.png" />
                                    </SwiperSlide>
                                    <SwiperSlide className="carousel-slide">
                                        <img src="https://raw.githubusercontent.com/F1-Buddy/f1buddy-python/dev-rakib-2/images/wdc.png" />
                                    </SwiperSlide>
                                    <br />
                                </Carousel>
                            </Box>
                        </AnimatedSection>
                        <AnimatedSection index={1}>
                            <Box>
                                <Heading as="h4" fontSize={'1.5em'} mb={4}>
                                    <Link
                                        href="https://github.com/gillgurpinderr/collaborative-travel-planner"
                                        display="inline-flex"
                                        alignItems="center"
                                        style={{ gap: 10 }}
                                        pl={2}
                                        color={textColor}
                                        _hover={{
                                            textDecoration: 'none',
                                            bgGradient: gradientColors,
                                            bgClip: 'text',
                                            color: 'transparent'
                                        }}
                                        transition="all 0.3s ease"
                                    >
                                        <PiLinkBold color={textColor} />
                                        <Box
                                            as="span"
                                            _hover={{
                                                bgGradient: gradientColors,
                                                bgClip: 'text',
                                                color: 'transparent'
                                            }}
                                        >
                                            WanderSync
                                        </Box>
                                        <IoLogoPython color={logoColor} />
                                        <IoLogoJavascript color={logoColor} />
                                        <TbApi color={logoColor} />
                                        <IoCloud color={logoColor} />
                                    </Link>
                                </Heading>
                                <p>WanderSync is a travel planner that uses data science and natural language processing to suggest recommendations.</p>
                                <br />
                                <VideoPlayer />
                            </Box>
                        </AnimatedSection>
                        <AnimatedSection index={2}>
                        <br />
                        <br />
                        <br />
                        <br />
                        <Box>
                            <Heading as="h4" fontSize={'1.5em'} mb={4}>
                                <Link
                                    href="https://github.com/maryeete/Senior-Project"
                                    display="inline-flex"
                                    alignItems="center"
                                    style={{ gap: 10 }}
                                    pl={2}
                                    color={textColor}
                                    _hover={{
                                        textDecoration: 'none',
                                        bgGradient: gradientColors,
                                        bgClip: 'text',
                                        color: 'transparent'
                                    }}
                                    transition="all 0.3s ease"
                                >
                                    <PiLinkBold color={textColor} />
                                    <Box
                                        as="span"
                                        _hover={{
                                            bgGradient: gradientColors,
                                            bgClip: 'text',
                                            color: 'transparent'
                                        }}
                                    >
                                        SentimentAnalyzer
                                    </Box>
                                    <IoLogoPython color={logoColor} />
                                    <IoLogoJavascript color={logoColor} />
                                    <TbApi color={logoColor} />
                                    <IoLogoPython color={logoColor} />
                                </Link>
                            </Heading>
                            <p>SentimentAnalyzer is a multi-modal tool that analyzes sentiment from text, audio, video, and images using machine learning, computer vision, and audio processing techniques.</p>
                            <br />
                            <Box
                                maxW="100%"
                                mx="auto"
                                my={4}
                                position="relative"
                                paddingBottom="56.25%" // 16:9 aspect ratio
                                height={0}
                                overflow="hidden"
                            >
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/vT3rSFLHR5c"
                                    title="Sentiment Analysis Demo"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    style={{ position: 'absolute', top: 0, left: 0 }}
                                />
                            </Box>
                            <br />
                        </Box>
                    </AnimatedSection>

                    </SimpleGrid>
                </Box>
            </Container>
        </Box>
    );
};

export default Projects;
