import * as React from "react";

import { Grid, IconButton, Typography, Box } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";

import Modal from "@mui/material/Modal";

import faqs from "../assets/faqs.json";
import QuestionAnswer from "@mui/icons-material/QuestionAnswer";
import Close from "@mui/icons-material/Close";

import { config } from "../../config";
import solIcon from "../assets/solscan.png";
import tgIcon from "../assets/telegram.png";
import twIcon from "../assets/Twitter.png";
import auditIcon from "../assets/Audit.png";
import dappRadarIcon from "../assets/Dappradder.png";
import gitbookIcon from "../assets/gitbook.png";

const FAQButton = styled(Button)({
  backgroundColor: "#e3e3e3 !important",
  border: "3px solid #e3e3e3",
  boxShadow: "none !important",
  borderRadius: "10px !important",
  width: "350px !important",
  color: "black !important",
  fontSize: "23px !important",
  fontWeight: "bold !important",
  fontFamily: "Museo !important"
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "90%",
  maxHeight: "90%",
  bgcolor: "background.paper",
  boxShadow: 24,
  px: 4,
  py: 6,
  borderRadius: 8,
  overflow: "auto !important",
  paddingTop: "48px !important"
};

export default function Footer() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Grid container justifyContent="center" >
        <FAQButton
          variant="contained"
          onClick={handleOpen}
        >
          FAQS
        </FAQButton>
      </Grid>
      <Grid container justifyContent="center" spacing={2} marginTop={4}>
        <Grid item>
          <a href="https://solscan.io/address/557BPiUp8WSumh7PcLpXE12VZppRhiezdHRdfhKAVANn?cluster=devnet" target="__blank">
            <img src={solIcon} alt="" width={48} height={48} />
          </a>
        </Grid>
        <Grid item>
          <a href="https://t.me/headdev" target="__blank">
            <img src={tgIcon} alt="" width={48} height={48} />
          </a>
        </Grid>
        <Grid item>
          <a href="https://t.me/headdev" target="__blank">
            <img src={twIcon} alt="" width={48} height={48} />
          </a>
        </Grid>
        <Grid item>
          <a href="https://t.me/headdev" target="__blank">
            <img src={dappRadarIcon} alt="" width={48} height={48} />
          </a>
        </Grid>
        <Grid item>
          <a href="https://t.me/headdev" target="__blank">
            <img src={auditIcon} alt="" width={48} height={48} />
          </a>
        </Grid>
        <Grid item>
          <a href="https://t.me/headdev" target="__blank">
            <img src={gitbookIcon} alt="" width={48} height={48} />
          </a>
        </Grid>
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="scrollbox">
          <Grid container spacing={2} direction="column" position="relative">
            {faqs.map((faq, index) => (
              <Grid item key={faq.q}>
                <Typography variant="body2" gutterBottom className="museo-font">
                  <b>{index + 1}: {faq.q}</b>
                </Typography>
                <Typography variant="body2" className="museo-font">{faq.a}</Typography>
              </Grid>
            ))}
            <IconButton
              color="primary"
              style={{ position: "absolute", right: -20, top: -24 }}
              onClick={handleClose}
            >
              <Close />
            </IconButton>
          </Grid>
        </Box>
      </Modal>

    </div>
  );
}
