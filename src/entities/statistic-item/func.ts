export const countWeigthChart = (num:number) => {
    let nums = []
    for (let i = 0; i <= num; i++) {
      nums.push(i * 10)
      i++;
    }
    return nums;
}