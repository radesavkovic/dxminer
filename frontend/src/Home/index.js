import { flexbox, styled } from "@mui/system";

import Grid from "@mui/material/Grid";
import Header from "./components/Header";
import BakeCard from "./components/BakeCard";
import NutritionFacts from "./components/NutritionFacts";
import ReferralLink from "./components/ReferralLink";
import { useWallet } from "@solana/wallet-adapter-react";
import Footer from "./components/Footer";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import backgroundImg from '../assets/background.png';

const Wrapper = styled("div")(({ theme }) => ({
  position: 'relative',
  maxWidth: 1000,
  margin: "0 auto",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
  },
}));

export default function Home() {
  //const { address } = useAuthContext();
  const wallet = useWallet();

  return (
    <div>
      <Wrapper>
          <Header />
          <BakeCard />
          <Grid container spacing={4} mb={4}>
            <Grid item xs={12} sm={6} md={6}>
              <NutritionFacts />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <ReferralLink address={wallet.publicKey && wallet.publicKey.toBase58()} />
            </Grid>
          </Grid>
          <Footer />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
      </Wrapper>
    </div>
  );
}
