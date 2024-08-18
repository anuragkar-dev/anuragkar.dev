import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    &:hover > img {
        transition: transform 0.2s;
        transform: scale(1.5);
    }

    & > img {
        transition: transform 0.2s;
        transform: scale(1);
    }
`

const Logo = () => {
    const navLogoImage = `/images/logo${useColorModeValue('', '-dark')}.png`
    return (
        <Link href="/">
            <LogoBox>
                <Image
                    src={navLogoImage}
                    alt="Anurag Kar"
                    width={20}
                    height={20}
                />
                <Text
                    ml={2}
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    fontFamily="M PLUS Rounded 1c"
                    fontWeight="bold"
                >
                    Anurag Kar
                </Text>
            </LogoBox>
        </Link>
    )
}

export default Logo
