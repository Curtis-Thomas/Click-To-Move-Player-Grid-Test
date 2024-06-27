import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import Cell from "./components/Cell";
import backgroundImg from "./assets/adventurer.png";

function App() {
  const [playerPositionX, setPlayerPositionX] = useState(null);
  const [playerPositionY, setPlayerPositionY] = useState(null);

  const [borderState, setBorderState] = useState("1px solid #F6F7F8");

  const [backgroundColorState11, setBackgroundColorState11] =
    useState("#ffffff");
  const [backgroundImgState11, setBackgroundImgState11] = useState(
    `url(${backgroundImg})`
  );

  const [backgroundColorState12, setBackgroundColorState12] =
    useState("#0F1214");
  const [backgroundImgState12, setBackgroundImgState12] = useState(null);

  const [backgroundColorState13, setBackgroundColorState13] =
    useState("#0F1214");
  const [backgroundImgState13, setBackgroundImgState13] = useState(null);

  const [backgroundColorState21, setBackgroundColorState21] =
    useState("#0F1214");

  const [backgroundImgState21, setBackgroundImgState21] = useState(null);

  const [backgroundColorState22, setBackgroundColorState22] =
    useState("#0F1214");

  const [backgroundImgState22, setBackgroundImgState22] = useState(null);

  const [backgroundColorState23, setBackgroundColorState23] =
    useState("#0F1214");

  const [backgroundImgState23, setBackgroundImgState23] = useState(null);

  const [backgroundColorState31, setBackgroundColorState31] =
    useState("#0F1214");

  const [backgroundImgState31, setBackgroundImgState31] = useState(null);

  const [backgroundColorState32, setBackgroundColorState32] =
    useState("#0F1214");

  const [backgroundImgState32, setBackgroundImgState32] = useState(null);
  const [backgroundColorState33, setBackgroundColorState33] =
    useState("#0F1214");

  const [backgroundImgState33, setBackgroundImgState33] = useState(null);

  function resetColors() {
    setBackgroundColorState11("#0F1214");
    setBackgroundColorState12("#0F1214");
    setBackgroundColorState13("#0F1214");

    setBackgroundColorState21("#0F1214");
    setBackgroundColorState22("#0F1214");
    setBackgroundColorState23("#0F1214");

    setBackgroundColorState31("#0F1214");
    setBackgroundColorState32("#0F1214");
    setBackgroundColorState33("#0F1214");
  }

  function resetBackgroundImg() {
    setBackgroundImgState11(null);
    setBackgroundImgState12(null);
    setBackgroundImgState13(null);

    setBackgroundImgState21(null);
    setBackgroundImgState22(null);
    setBackgroundImgState23(null);

    setBackgroundImgState31(null);
    setBackgroundImgState32(null);
    setBackgroundImgState33(null);
  }

  function handleButton11Click() {
    resetColors();
    resetBackgroundImg();
    setBackgroundColorState11("#ffffff");
    setBackgroundImgState11(`url(${backgroundImg})`);
  }
  function handleButton12Click() {
    resetColors();
    resetBackgroundImg();
    setBackgroundColorState12("#ffffff");
    setBackgroundImgState12(`url(${backgroundImg})`);
  }
  function handleButton13Click() {
    resetColors();
    resetBackgroundImg();
    setBackgroundColorState13("#ffffff");
    setBackgroundImgState13(`url(${backgroundImg})`);
  }

  function handleButton21Click() {
    resetColors();
    resetBackgroundImg();
    setBackgroundColorState21("#ffffff");
    setBackgroundImgState21(`url(${backgroundImg})`);
  }
  function handleButton22Click() {
    resetColors();
    resetBackgroundImg();
    setBackgroundColorState22("#ffffff");
    setBackgroundImgState22(`url(${backgroundImg})`);
  }
  function handleButton23Click() {
    resetColors();
    resetBackgroundImg();
    setBackgroundColorState23("#ffffff");
    setBackgroundImgState23(`url(${backgroundImg})`);
  }

  function handleButton31Click() {
    resetColors();
    resetBackgroundImg();
    setBackgroundColorState31("#ffffff");
    setBackgroundImgState31(`url(${backgroundImg})`);
  }
  function handleButton32Click() {
    resetColors();
    resetBackgroundImg();
    setBackgroundColorState32("#ffffff");
    setBackgroundImgState32(`url(${backgroundImg})`);
  }
  function handleButton33Click() {
    resetColors();
    resetBackgroundImg();
    setBackgroundColorState33("#ffffff");
    setBackgroundImgState33(`url(${backgroundImg})`);
  }

  function setPlayerPosition(x, y) {
    setPlayerPositionX(x);
    setPlayerPositionY(y);
  }

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#0F1214",
        color: "#F6F7F8",
      }}
    >
      <Box
        sx={{
          height: "10%",
          width: "100%",
        }}
      >
        <Box
          sx={{
            height: "80%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="body1">
            Player Movement Grid Test - 9x9
          </Typography>
        </Box>
        <Box
          sx={{
            height: "20%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="body2">
            Player position: {playerPositionX}, {playerPositionY}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ height: "90%", width: "100%", p: 5 }}>
        <Box sx={{ height: "33.33%", width: "100%", display: "flex" }}>
          <Cell
            borderState={borderState}
            backgroundColor={backgroundColorState11}
            click={handleButton11Click}
            setPlayerPosition={setPlayerPosition}
            boxPositionX={1}
            boxPositionY={1}
            backgroundImgState={backgroundImgState11}
          />

          <Cell
            borderState={borderState}
            backgroundColor={backgroundColorState12}
            click={handleButton12Click}
            setPlayerPosition={setPlayerPosition}
            boxPositionX={1}
            boxPositionY={2}
            backgroundImgState={backgroundImgState12}
          />

          <Cell
            borderState={borderState}
            backgroundColor={backgroundColorState13}
            click={handleButton13Click}
            setPlayerPosition={setPlayerPosition}
            boxPositionX={1}
            boxPositionY={3}
            backgroundImgState={backgroundImgState13}
          />
        </Box>
        <Box sx={{ height: "33.33%", width: "100%", display: "flex" }}>
          <Cell
            borderState={borderState}
            backgroundColor={backgroundColorState21}
            click={handleButton21Click}
            setPlayerPosition={setPlayerPosition}
            boxPositionX={2}
            boxPositionY={1}
            backgroundImgState={backgroundImgState21}
          />

          <Cell
            borderState={borderState}
            backgroundColor={backgroundColorState22}
            click={handleButton22Click}
            setPlayerPosition={setPlayerPosition}
            boxPositionX={2}
            boxPositionY={2}
            backgroundImgState={backgroundImgState22}
          />

          <Cell
            borderState={borderState}
            backgroundColor={backgroundColorState23}
            click={handleButton23Click}
            setPlayerPosition={setPlayerPosition}
            boxPositionX={2}
            boxPositionY={3}
            backgroundImgState={backgroundImgState23}
          />
        </Box>
        <Box sx={{ height: "33.33%", width: "100%", display: "flex" }}>
          <Cell
            borderState={borderState}
            backgroundColor={backgroundColorState31}
            click={handleButton31Click}
            setPlayerPosition={setPlayerPosition}
            boxPositionX={3}
            boxPositionY={1}
            backgroundImgState={backgroundImgState31}
          />

          <Cell
            borderState={borderState}
            backgroundColor={backgroundColorState32}
            click={handleButton32Click}
            setPlayerPosition={setPlayerPosition}
            boxPositionX={3}
            boxPositionY={2}
            backgroundImgState={backgroundImgState32}
          />

          <Cell
            borderState={borderState}
            backgroundColor={backgroundColorState33}
            click={handleButton33Click}
            setPlayerPosition={setPlayerPosition}
            boxPositionX={3}
            boxPositionY={3}
            backgroundImgState={backgroundImgState33}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
