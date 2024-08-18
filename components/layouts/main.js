import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <link rel="icon" href="/images/logo-dark.png" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>Anurag Kar</title>
            </Head>
            <span>
                <Navbar path={router.asPath} />

                <Container maxW="container.dg" pt={14}>
                    {children}
                </Container>
            </span>
        </Box>
    )
}

export default Main
