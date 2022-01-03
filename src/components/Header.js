import {
  AppBar,
  Container,
  createTheme,
  makeStyles,
  MenuItem,
  Select,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { CryptoState } from "../CryptoContext";

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const Header = () => {
  const classes = useStyles();

  const history = useHistory();

  const { currency, setCurrency } = CryptoState();

  // console.log(currency);

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "rgba(0,0,0,0.5)",
      },
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="primary" position="static">
        <Container>
          {/* container to make page responsive */}
          <Toolbar>
            <Typography
              onClick={() => history.push("/")}
              className={classes.title}
              variant="h6"
            >
              Milky Way
            </Typography>
            <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              style={{
                width: 100,
                height: 40,
                marginRight: 15,
              }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"MYR"}>MYR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
