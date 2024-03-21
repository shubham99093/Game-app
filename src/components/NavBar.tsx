import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";

const NavBar = () => {
    return (
        <HStack>
            <Image
                style={{ margin: "5px", borderRadius: "10px" }}
                src={logo}
                boxSize="50px"
            ></Image>
            <Text>NavBar</Text>
        </HStack>
    );
};

export default NavBar;
