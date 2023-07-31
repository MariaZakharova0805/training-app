import { FC, useEffect, useState } from "react";
import c from './statistics.module.css'
import { useTypedSelector } from "../../shared/hooks/use-typed-selector";
import { useActions } from "../../shared/hooks/use-actions";
import { countWeigthChart } from "./func";
import { TextField, Grid, Button, Typography } from "@mui/material";
import { nanoid } from "nanoid";

type WeightProps = {
  header: string;
  num: number;
  param: string;
}

export const Statistics: FC<WeightProps> = ({ header, num, param }) => {
  const { trainingData } = useTypedSelector(state => state.users);
  const { addUsersData } = useActions();
  const [data, setData] = useState([0]);
  const [nums, setNums] = useState([0]);
  const [newWData, setNewData] = useState(0);

  useEffect(() => {
    if (param === 'weightInfo') {
      setData(trainingData[0] ? trainingData[0].weightInfo : [0]);
    } else if (param === 'waistInfo') {
      setData(trainingData[0] ? trainingData[0].waistInfo : [0]);
    } else if (param === 'hipsInfo') {
      setData(trainingData[0] ? trainingData[0].hipsInfo : [0]);
    } else if (param === 'bicepsInfo') {
      setData(trainingData[0] ? trainingData[0].bicepsInfo : [0]);
    } 
    setNums(countWeigthChart(num))
  }, [trainingData])


  const updateUserData = () => {
    let newTrainingData = trainingData[0];
    if (param === 'weightInfo' && newWData > 0) {
      newTrainingData.weightInfo.push(Number(newWData));
      setNums(newTrainingData.weightInfo);
    } else if (param === 'waistInfo'&& newWData > 0) {
      newTrainingData.waistInfo.push(Number(newWData));
      setNums(newTrainingData.waistInfo);
    } else if (param === 'hipsInfo'&& newWData > 0) {
      newTrainingData.hipsInfo.push(Number(newWData));
      setNums(newTrainingData.hipsInfo);
    } else if (param === 'bicepsInfo'&& newWData > 0) {
      newTrainingData.bicepsInfo.push(Number(newWData));
      setNums(newTrainingData.bicepsInfo);
    } else if( newWData <= 0) {
      alert('Введите корретное значение')
    }
    addUsersData(newTrainingData);
  }

  return (
    <Grid container spacing={2} sx={{ mb: 10 }}>
      <Grid item xs={12}>
        <Typography variant="h4" component="h4" sx={{ textAlign: 'center' }}>
          {header}
        </Typography>
      </Grid>
      <Grid item xs={12} container spacing={0}>
        <Grid item xs={11}>
          <div className={c.diagram} style={{ height: `${num * 10}px` }}>
            {data.map(value => (
              <div
                key={nanoid()}
                className={c.bar}
                style={{ height: `${value}px` }}
              >
                {value}
              </div>
            ))}
          </div></Grid>
        <Grid item xs={1}>
          <div className={c.diagram_line} style={{ height: `${num * 10}px` }}>
            {nums.map(num =>
              <p key={nanoid()}>{num}</p>)}
          </div></Grid>
      </Grid>
      <Grid item xs={12}>
        <p>Введите текущий {header} в окошко и нажмите сохранить</p>
      </Grid>
      <Grid item xs='auto'>
        <TextField
          type="number"
          value={newWData}
          onChange={(e: any) => setNewData(e.target.value)}
          id="outlined-basic"
          label={header}
          variant="outlined" />
      </Grid>
      <Grid item xs='auto' container sx={{ justify: "flex-end" }}>
        <Button onClick={() => updateUserData()} variant="outlined">сохранить</Button>
      </Grid>
    </Grid>
  )
}
