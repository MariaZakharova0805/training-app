import { Grid, IconButton, Link, Typography, Tooltip } from "@mui/material"
import { contacts } from "./conts";
import { headerStyles } from './styles';

export const Contacts = () => {
  return (
    <div>
      <Typography variant='h5' sx={headerStyles}>Надеюсь, вам понравилось это приложение</Typography>
      <Typography sx={{ mb: 4 }}>Если у вас появились вопросы или предложения, можете связаться со мной любым удобным для вас способом</Typography>
      <Grid container maxWidth="sm" rowSpacing={1} columnSpacing={{ xs: 1 }}>
        {contacts.map(item =>
          <Grid key={item.id} item data-text={item.text}>
            <Tooltip title={item.text}>
              <IconButton>
                <Link href={item.link} target="_blank">{item.icon}</Link>
              </IconButton>
            </Tooltip>
          </Grid>
        )}
      </Grid>
    </div>
  )
}

