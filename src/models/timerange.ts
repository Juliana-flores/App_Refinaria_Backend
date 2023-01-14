import { ViewEntity, ViewColumn } from "typeorm";

@ViewEntity({
  name: "SAT_APP_VIEW_INTERVALO",
  expression: `
  SELECT 
    "SAT_FAIXA"."COD_FAIXA" as "id",
    "SAT_FAIXA"."INICIO" as "start",
    "SAT_FAIXA"."FIM" as "end"
  FROM "SAT_FAIXA"
  `,
})
export default class TimeRange {
  @ViewColumn()
  id: number;

  @ViewColumn()
  start: string;

  @ViewColumn()
  end: string;
}
