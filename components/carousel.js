import { Swiper } from 'swiper/react'
import { React, useEffect, useState } from 'react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules'

const Carousel = ({ children }) => {
    const [isDesktop, setIsDesktop] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 768)
        }

        // Run on mount
        handleResize()

        // Run during resize
        window.addEventListener('resize', handleResize)

        // Cleanup on unmount
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const margins = isDesktop ? '-10em' : '0'

    return (
        <div
            className="carousel-fade-container"
            style={{
                marginLeft: margins,
                marginRight: margins
            }}
            align="center"
        >
            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false
                }}
                slidesPerView={'1.5'}
                coverflowEffect={{
                    rotate: -10,
                    stretch: 0,
                    depth: 300,
                    modifier: 2.5
                }}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination'
                }}
                modules={[EffectCoverflow, Autoplay, Pagination]}
                style={{
                    marginRight: margins,
                    marginLeft: margins
                }}
                className="carousel-fade"
            >
                {children}
            </Swiper>
        </div>
    )
}

export { Carousel }
