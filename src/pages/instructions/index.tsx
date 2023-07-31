import { useState, SyntheticEvent } from 'react';
import Typography from '@mui/material/Typography';
import { textData, sourceLink } from './conts';
import { AccordionSummary, Accordion, AccordionDetails } from '../../widgets/accordion';
import { Box, Link } from '@mui/material';

export const Instructions = (_event: any) => {
  const [expanded, setExpanded] = useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (_event: SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Box>
      <Typography variant='h6'
        sx={{ mb: 5, fontWeight: '600' }}>
        Эффективные занятия фитнесом складываются не только из регулярных тренировок, но и из подготовки и восстановления после них. На качество тренировочного процесса сильно влияет ваш рацион и режим питания. Правило  «Не есть за час до и после занятий» — необходимое, но недостаточное. Если вы работаете на результат – следуйте нашим простым рекомендациям, и он не заставит себя ждать!
      </Typography>
      <Box sx={{ mb: 5 }}>
        {textData.map(item =>
          <Accordion expanded={expanded === item.panel} onChange={handleChange(item.panel)} key={item.id}>
            <AccordionSummary aria-controls={item.ariaControls}>
              <Typography style={{ fontWeight: '700' }}>{item.header}</Typography>
            </AccordionSummary>
            <div>
              {item.texts.map((text, i) =>
                <AccordionDetails key={i++}>
                  <Typography >
                    {text}
                  </Typography>
                </AccordionDetails>
              )}
            </div>
          </Accordion>
        )}
      </Box>
      <Typography>Источник текста: <Link href={sourceLink} target="_blank">sport-express.ru</Link></Typography>
    </Box >
  );
}
