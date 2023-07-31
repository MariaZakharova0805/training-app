import { styled } from '@mui/material/styles';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    textIndent: 30
  }));