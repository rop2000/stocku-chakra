import React from "react"
import { Box, Flex, Text, Button, Stack, PseudoBox } from "@chakra-ui/react"
import Logo from "./Logo"
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
// import { CloseIcon, MenuIcon } from ".../Icons"

const MenuItems = props => {
  const { children, isLast, to = "/", ...rest } = props
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      as="ins"
      {...rest}
    >
      BIGPP
    </Text>
  )
}

const Header = props => {
  const [show, setShow] = React.useState(false)
  const toggleMenu = () => setShow(!show)

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["primary.500", "primary.500"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      <Flex align="center">
        <Logo
          w="100px"
          color={["white", "white", "primary.500", "primary.500"]}
        />
      </Flex>
      
      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {/* {show ? <CloseIcon /> : <MenuIcon />} */}
         |
        \/
      </Box>
      
      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align={["center", "center", "center", "center"]}
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
        <ColorModeSwitcher mr="6"/>
          <MenuItems to="/">Home</MenuItems>
          <MenuItems to="/how">How It works </MenuItems>
          <MenuItems to="/faetures">Features </MenuItems>
          <MenuItems to="/pricing">Pricing </MenuItems>
          <MenuItems to="/signup" isLast>
  
            <Button
              size="sm"
              rounded="md"
              color={["black.500", "primary.500", "red", "red"]}
              bg={["white", "white", "primary.500", "primary.500"]}
              _hover={{
                bg: [
                  "primary.100",
                  "primary.100",
                  "primary.600",
                  "primary.600",
                ],
              }}
            >
           
            </Button>
          </MenuItems>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Header
