import { Statistics } from "../../entities/statistic-item";
import { statisticData } from "./const";

export const Statistic = () => {
  return (
    <>
      <h2>Здесь ты можешь отслеживать динамику изменения своего тела: вес, объем талии, бедер, бицепса</h2>
      <p>Не стоит производить замеры слишком часто. Врачи и тренеры рекомендуют производить замеры <b>раз в неделю на голодный желудок с утра</b>. Часто показатели зависят не только от усердности тренировок и питания. Например, избыточное потребление соли задерживает жидкость в организме.</p>
      <p>Также существует объективная разница между вашим весом и тем, из чего состоит наше тело. Вес тела — это общая масса тела. Состав тела — это мышцы, кости, вода и жир. В ком-то больше мышц, в ком-то жира. Мышцы весят больше, чем жир. Разница между ними — плотность.
        При одинаковом весе жир и мышцы сильно отличаются по размеру.</p>
      <p>Если ты видишь, что набрал вес, то не расстаривайся. Если ты соблюдаешь режим тренировок, то значит растет твоя мышечная масса. Рекомендую также вести график изменения объемов тела, они являются лучшими показателями твоего физического прогресса.</p>
            {statisticData.map(data =>
              <Statistics key={data.id} header={data.header} num={data.maxNum} param={data.param}/>
        )}
    </>
  );
};
