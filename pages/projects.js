import {
    Container,
    Heading,
    SimpleGrid,
    Divider,
    Box,
    Link
} from '@chakra-ui/react'
// import Layout from '../components/layouts/main'
// import Section from '../components/section'
import { Carousel } from '../components/carousel'
import { SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'

import { IoCloud, IoLogoDiscord, IoLogoJavascript, IoLogoPython, IoFlask, IoFlaskOutline, IoFlaskSharp } from 'react-icons/io5'
import { TbApi } from 'react-icons/tb'
import { PiLinkBold } from 'react-icons/pi'
import AnimatedSection from '../components/animatedsection.js'
import dynamic from 'next/dynamic';

const VideoPlayer = dynamic(() => import('../components/videoplayer'), { ssr: false });

const Projects = () => {
    // const [currentBlurb, setCurrentBlurb] = useState('')
    // const blurbs = [
    //     'Telemetry data visualization for F1 races.',
    //     'Position changes during the race.',
    //     'Track dominance analysis.',
    //     'Head-to-head comparisons.',
    //     'Qualifying gap analysis.',
    //     'Constructor Championship standings.',
    //     'Driver Championship standings.'
    // ]

    // const handleSlideChange = swiper => {
    //     setCurrentBlurb(blurbs[swiper.activeIndex])
    // }

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
                                    >
                                        <PiLinkBold />
                                        F1 Buddy
                                        <IoLogoPython />
                                        <IoLogoDiscord />
                                        <TbApi />
                                        <IoCloud />
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
                                    >
                                        <PiLinkBold />
                                        WanderSync
                                        <IoLogoPython />
                                        <IoLogoJavascript />
                                        <TbApi />
                                        <IoCloud />
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