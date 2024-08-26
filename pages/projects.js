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
                                            F1 Buddy
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
                    </SimpleGrid>
                </Box>
            </Container>
        </Box>
    );
};

export default Projects;
