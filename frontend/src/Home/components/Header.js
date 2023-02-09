import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

import {
  WalletDialogProvider as MaterialUIWalletDialogProvider,
  WalletMultiButton as MaterialUIWalletMultiButton,
  WalletConnectButton
} from '@solana/wallet-adapter-material-ui';

import logo from "../../assets/dxminer_logo.png";

const WalletButton = styled("div")(() => ({
  display: 'flex',
  flexDirection: 'row-reverse',
}))
const Wrapper = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingBottom: 0,
  [theme.breakpoints.down("md")]: {
    h5: {
      fontSize: 20,
      margin: 0,
    },
  },
}));
const LogoWrapper = styled("div")(({ theme }) => ({
  textAlign: "center",
  backgroundColor: "transparent",
  paddingTop: "10px",
  paddingBottom: "10px",
  [theme.breakpoints.down("md")]: {
    h5: {
      fontSize: 20,
      margin: 0,
    },
  },
}));
export default function Header() {
  return (
    <Wrapper>
      <WalletButton>
        <MaterialUIWalletMultiButton variant="text" style={{
          border: "1px solid black",
          fontWeight: 900,
          background: "transparent",
          borderRadius: '10px',
          color: 'black',
          marginTop: '30px',
          marginBottom: '0px',
          paddingLeft: "20px",
          paddingRight: "20px"
        }}/>
      </WalletButton>
      <LogoWrapper><img src={logo} alt=""/></LogoWrapper>

      <Typography variant="h6"
        style={{paddingBottom: "40px", paddingTop: "40px"}}>
        <b className="museo-font">The SOL reward pool with the best daily return and lowest dev fees</b>
      </Typography>
    </Wrapper>
  );
}
