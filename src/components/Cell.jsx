import { Box, Button } from "@mui/material";
import backgroundImg from "../assets/adventurer.png";

function Cell({
  borderState,
  backgroundColor,
  click,
  setPlayerPosition,
  boxPositionX,
  boxPositionY,
  backgroundImgState,
}) {
  return (
    <Box sx={{ height: "100%", width: "33.33%" }}>
      <Button
        sx={{
          height: "100%",
          width: "100%",
          border: borderState,
          backgroundColor: backgroundColor,
          backgroundImage: backgroundImgState,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",

          "&:hover": {
            backgroundColor: "#eeeeee",
          },
        }}
        onClick={
          setPlayerPosition
            ? () => {
                click();
                setPlayerPosition(boxPositionX, boxPositionY);
              }
            : click
        }
      ></Button>
    </Box>
  );
}

export default Cell;
