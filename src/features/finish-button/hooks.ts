export const CountPoitns = (trainingMinutes: number, trainingHours: number) => {

    let newPoints = 0;
    const totaltime = trainingHours * 60 + trainingMinutes
    if (totaltime <= 5 || totaltime > 90) {
        newPoints = 0;
        //Короткая тренировка 4-40 минут
    } else if (totaltime > 5 && totaltime < 40) {
        newPoints = 1;
    }
    //Идеальная тренировка 40-60 минут
    else if (totaltime >= 40 && totaltime <= 60) {
        newPoints = 3;
    }
    //Длинная тренировка 60-180 минут
    else if (totaltime > 60 && totaltime <= 90) {
        newPoints = 2;
    }
    console.log(newPoints)
    return newPoints*10
}