
export const formTime = (time: number) => {
    if (time < 10) {
      return '0' + time
    }
    else return time
  }

  export const translateTrainingType = (type: string) => {
    if (type === 'cardio') {
      return 'каридо'
    } else if (type === 'strength') {
      return 'силовая'
    } else if (type === 'stretching') {
      return 'растяжка'
    } else return ''
  }