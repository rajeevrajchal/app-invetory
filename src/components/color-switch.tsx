import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { FaRegMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";

const ColorSwitch = () => {
  const { setColorScheme, colorScheme } = useMantineColorScheme();

  const handleColorSwitch = () => {
    setColorScheme(colorScheme === "light" ? "dark" : "light");
  };

  return (
    <ActionIcon
      variant="transparent"
      aria-label="Color Swatch"
      onClick={() => handleColorSwitch()}
    >
      {colorScheme === "light" ? (
        <FaRegMoon size={18} color="black" />
      ) : (
        <IoIosSunny size={20} color="white" />
      )}
    </ActionIcon>
  );
};

export default ColorSwitch;
