import { nanoid } from "nanoid";

export const statisticData = [
   { id: nanoid(), header: 'вес(кг)', maxNum: 20, param: 'weightInfo' },
   { id: nanoid(), header: 'объем талии(см)', maxNum: 20, param: 'waistInfo' },
   { id: nanoid(), header: 'объем бедер(см)', maxNum: 20, param: 'hipsInfo' },
   { id: nanoid(), header: 'объем бицепса(см)', maxNum: 10, param: 'bicepsInfo' },
]