import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/system";

const CardWrapper = styled(Card)({
  marginTop: 30,
  background: "transparent",
  border: "3px solid #e3e3e3",
  boxShadow: "none !important",
  borderRadius: "8px !important",
  minHeight: "150px"
});
const Input = styled("input")(({ theme }) => ({
  fontSize: 14,
  fontWeight: 300,
  padding: "10px 12px",
  borderRadius: "10px",
  border: "1px solid black",
  background: "white",
  width: "100%",
  outline: "none",
  color: theme.palette.primary.main,
}));

export default function ReferralLink({ address }) {
  const link = `${window.origin}?ref=${address}`;

  return (
    <CardWrapper>
      <CardContent style={{ paddingLeft: 8, paddingRight: 8 }}>
        <Input value={address ? link : ""} readOnly  className='museo-font'/>
        <Typography
          textAlign="center"
          variant="body2"
          marginTop={2}
          paddingX={3}
          className='museo-font'
        >
          Earn 12% of the SOL deposited to mine by anyone who uses your referral link
        </Typography>
      </CardContent>
    </CardWrapper>
  );
}
