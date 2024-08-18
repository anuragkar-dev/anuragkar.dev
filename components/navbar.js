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

const LinkItem = ({ href, path, target, children, ...props }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    const navbarActiveColor = useColorModeValue('#7989d7', '#42fff8')
    return (
        <NextLink href={href} passHref scroll={false}>
            <Link
                as="span"
                p={2}
                bg={active ? 'grassTeal' : undefined}
                color={active ? navbarActiveColor : inactiveColor}
                target={target}
                {...props}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const StyledLogo = styled.span`
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
                    <StyledLogo>
                        <LinkItem
                            href="/projects"
                            path={path}
                            display="inline-flex"
                            alignItems="center"
                            style={{ gap: 4, textDecoration: 'none' }}
                            pl={2}
                        >
                            <IoCodeSlash />
                            Projects
                        </LinkItem>
                    </StyledLogo>
                    <StyledLogo>
                        <LinkItem
                            href="/Anurag_Kar_resume.pdf"
                            path={path}
                            display="inline-flex"
                            alignItems="center"
                            style={{ gap: 4, textDecoration: 'none' }}
                            pl={2}
                        >
                            <IoNewspaper />
                            Resume
                        </LinkItem>
                    </StyledLogo>
                    <StyledLogo>
                        <LinkItem
                            target="_blank"
                            href="https://github.com/anuragcar"
                            path={path}
                            display="inline-flex"
                            alignItems="center"
                            style={{ gap: 4, textDecoration: 'none' }}
                            pl={2}
                        >
                            <IoLogoGithub />
                            GitHub
                        </LinkItem>
                    </StyledLogo>
                    <StyledLogo>
                        <LinkItem
                            target="_blank"
                            href="https://linkedin.com/in/anuragcar"
                            path={path}
                            display="inline-flex"
                            alignItems="center"
                            style={{ gap: 4, textDecoration: 'none' }}
                            pl={2}
                        >
                            <IoLogoLinkedin />
                            LinkedIn
                        </LinkItem>
                    </StyledLogo>
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
                            {/* edit these tags (MenuList and MenuItem) for colors 
                                backgroundColor={useColorModeValue(
                                    'blue',
                                    'orange'
                                )}
                             */}
                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem
                                        as={Link}
                                        style={{
                                            gap: 4,
                                            textDecoration: 'none'
                                        }}
                                    >
                                        <IoHome />
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
                                        <IoCodeSlash />
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
                                        <IoNewspaper />
                                        <span style={{ marginLeft: '0.5rem' }}>
                                            Resume
                                        </span>
                                    </MenuItem>
                                </NextLink>

                                <NextLink
                                    href="https://github.com/anuragcar"
                                    passHref
                                >
                                    <MenuItem
                                        as={Link}
                                        style={{
                                            gap: 4,
                                            textDecoration: 'none'
                                        }}
                                    >
                                        <IoLogoGithub />
                                        <span style={{ marginLeft: '0.5rem' }}>
                                            GitHub
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
