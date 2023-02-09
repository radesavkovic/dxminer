import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/system";

const CardWrapper = styled(Card)({
  background: "transparent",
  marginTop: 30,
  border: "3px solid #e3e3e3",
  boxShadow: "none !important",
  borderRadius: "8px !important",
  minHeight: "150px"
});
const nutritionFacts = [
  {
    label: "Daily Return",
    value: 8,
  },
  {
    label: "APR",
    value: "2,920",
  },
  {
    label: "Deposit Fees",
    value: 5,
  },
];

export default function NutritionFacts() {
  return (
    <CardWrapper>
      <CardContent className="fact">
        <Box paddingTop={4} paddingLeft={3} paddingRight={3}>
          {nutritionFacts.map((f) => (
            <Grid container key={f.label} justifyContent="space-between">
              <Typography variant="body1" gutterBottom className='museo-font'>
                {f.label}
              </Typography>
              <Typography gutterBottom className='museo-font'>{f.value}%</Typography>
            </Grid>
          ))}
        </Box>
      </CardContent>
    </CardWrapper>
  );
}
