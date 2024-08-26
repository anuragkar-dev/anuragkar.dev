import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import {
    IoLogoGithub,
    IoLogoLinkedin,
    IoCodeSlash,
    IoHome,
    IoNewspaper
} from 'react-icons/io5'
import styled from '@emotion/styled'

const gradientColors = 'linear(to-r, blue.400, purple.500)';

const LinkItem = ({ href, path, target, children, ...props }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('black', 'white')
    const navbarActiveColor = useColorModeValue('black', 'white')

    return (
        <NextLink href={href} passHref scroll={false}>
            <Link
                as="span"
                p={2}
                color={active ? navbarActiveColor : inactiveColor}
                fontWeight={active ? 'bold' : 'normal'}
                _hover={{ 
                    textDecoration: 'underline',
                    bgGradient: gradientColors,
                    bgClip: 'text'
                }}
                
                target={target}
                {...props}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const LogoWrapper = styled.span`
    &:hover {
        transition: transform 0.2s;
        transform: scale(1.1);
    }
    & {
        transition: transform 0.2s;
        transform: scale(1);
    }
`

const Navbar = props => {
    const { path } = props

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            css={{ backdropFilter: 'blur(10px)' }}
            zIndex={2}
            {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
                justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>

                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                    <LogoWrapper>
                        <LinkItem
                            href="/projects"
                            path={path}
                            display="inline-flex"
                            alignItems="center"
                            style={{ gap: 4, textDecoration: 'none' }}
                            pl={2}
                        >
                            <IoCodeSlash style={{ color: useColorModeValue('black', 'white') }} />
                            Projects
                        </LinkItem>
                    </LogoWrapper>
                    <LogoWrapper>
                        <LinkItem
                            href="/Anurag_Kar_resume.pdf"
                            path={path}
                            display="inline-flex"
                            alignItems="center"
                            style={{ gap: 4, textDecoration: 'none' }}
                            pl={2}
                        >
                            <IoNewspaper style={{ color: useColorModeValue('black', 'white') }} />
                            Resume
                        </LinkItem>
                    </LogoWrapper>
                    <LogoWrapper>
                        <LinkItem
                            target="_blank"
                            href="https://github.com/anuragcar"
                            path={path}
                            display="inline-flex"
                            alignItems="center"
                            style={{ gap: 4, textDecoration: 'none' }}
                            pl={2}
                        >
                            <IoLogoGithub style={{ color: useColorModeValue('black', 'white') }} />
                            GitHub
                        </LinkItem>
                    </LogoWrapper>
                    <LogoWrapper>
                        <LinkItem
                            target="_blank"
                            href="https://linkedin.com/in/anuragcar"
                            path={path}
                            display="inline-flex"
                            alignItems="center"
                            style={{ gap: 4, textDecoration: 'none' }}
                            pl={2}
                        >
                            <IoLogoLinkedin style={{ color: useColorModeValue('black', 'white') }} />
                            LinkedIn
                        </LinkItem>
                    </LogoWrapper>
                </Stack>

                <Box flex={1} align="right">
                    <ThemeToggleButton />

                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu
                            isLazy
                            id="navbar-menu"
                            position="fixed"
                            zIndex={1000}
                        >
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options"
                            />
                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem
                                        as={Link}
                                        style={{
                                            gap: 4,
                                            textDecoration: 'none'
                                        }}
                                    >
                                        <IoHome style={{ color: useColorModeValue('black', 'white') }} />
                                        <span style={{ marginLeft: '0.5rem' }}>
                                            About
                                        </span>
                                    </MenuItem>
                                </NextLink>

                                <NextLink href="/projects" passHref>
                                    <MenuItem
                                        as={Link}
                                        style={{
                                            gap: 4,
                                            textDecoration: 'none'
                                        }}
                                    >
                                        <IoCodeSlash style={{ color: useColorModeValue('black', 'white') }} />
                                        <span style={{ marginLeft: '0.5rem' }}>
                                            Projects
                                        </span>
                                    </MenuItem>
                                </NextLink>

                                <NextLink href="/Anurag_Kar_resume.pdf" passHref>
                                    <MenuItem
                                        as={Link}
                                        style={{
                                            gap: 4,
                                            textDecoration: 'none'
                                        }}
                                    >
                                        <IoNewspaper style={{ color: useColorModeValue('black', 'white') }} />
                                        <span style={{ marginLeft: '0.5rem' }}>
                                            Resume
                                        </span>
                                    </MenuItem>
                                </NextLink>

                                <NextLink href="https://github.com/anuragcar" passHref>
                                    <MenuItem
                                        as={Link}
                                        style={{
                                            gap: 4,
                                            textDecoration: 'none'
                                        }}
                                    >
                                        <IoLogoGithub style={{ color: useColorModeValue('black', 'white') }} />
                                        <span style={{ marginLeft: '0.5rem' }}>
                                            GitHub
                                        </span>
                                    </MenuItem>
                                </NextLink>

                                <NextLink href="https://linkedin.com/in/anuragcar" passHref>
                                    <MenuItem
                                        as={Link}
                                        style={{
                                            gap: 4,
                                            textDecoration: 'none'
                                        }}
                                    >
                                        <IoLogoLinkedin style={{ color: useColorModeValue('black', 'white') }} />
                                        <span style={{ marginLeft: '0.5rem' }}>
                                            LinkedIn
                                        </span>
                                    </MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar
