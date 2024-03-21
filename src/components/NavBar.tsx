import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
    return (
        <HStack justifyContent="space-between" padding="10px">
            <Image
                style={{ margin: "5px", borderRadius: "10px" }}
                src={logo}
                boxSize="50px"
            ></Image>
            <ColorModeSwitch />
        </HStack>
    );
};

export default NavBar;
