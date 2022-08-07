import { ViewEntity, ViewColumn } from 'typeorm';

export const availableProducts = [11, 17, 52];
export const availableStatus = [7];

export const statusName = new Map([
  [1, 'Agendado'],
  [2, 'Passou toten'],
  [3, 'Passou Drivein'],
  [4, 'Saída Drivein'],
  [5, 'Cancelado'],
  [6, 'Checklist'],
  [7, 'Pátio externo'],
  [8, 'Retirado da fila'],
  [9, 'Carregado'],
  [10, 'Checklist concluído'],
  [11, 'Liberado lacres'],
]);

// 11 => DIS10-T
// 17 => GA
// 52 => GC
export const productName = new Map([
  [11, 'DIS10-T'],
  [17, 'GA'],
  [52, 'GC'],
]);

@ViewEntity({
  name: 'SAT_APP_VIEW_AGENDA',
  expression: `
SELECT
  "SAT_AGENDA"."NUM_AGENDA"       AS "id",
  "SAT_AGENDA"."COD_VEICULO"      AS "plateCarriage",
  "SAT_AGENDA"."COD_MOTORISTA"    AS "driverCode",
  "SAT_AGENDA"."DATA"             AS "eventAt",
  "SAT_AGENDA"."COD_STATUS"       AS "status",
  "SAT_AGENDA_COMP"."COD_PRODUTO" AS "product"
FROM
       "SAT_AGENDA"
  INNER JOIN "SAT_AGENDA_COMP" ON "SAT_AGENDA"."NUM_AGENDA" = "SAT_AGENDA_COMP"."NUM_AGENDA"
`,
})
export default class Schedule {
  @ViewColumn()
  id: number;

  @ViewColumn()
  driverCode: number;

  @ViewColumn()
  plateCarriage: string;

  @ViewColumn()
  eventAt: Date;

  @ViewColumn()
  status: number;

  @ViewColumn()
  product: number;
}
