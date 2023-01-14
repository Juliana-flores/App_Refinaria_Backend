import { ViewEntity, ViewColumn } from "typeorm";

@ViewEntity({
  name: "SAT_APP_VIEW_MOTORISTA_VEICULO",
  expression: `
SELECT
  "SAT_VEICULO_MOT"."COD_VEICULO" AS "plateCarriage",
  "SAT_MOTORISTA"."COD_MOTORISTA" AS "driverCode"
FROM
       "SAT_MOTORISTA"
  INNER JOIN "SAT_VEICULO_MOT" ON "SAT_VEICULO_MOT"."COD_MOTORISTA" = "SAT_MOTORISTA"."COD_MOTORISTA"
`,
})
export default class DriverVehicle {
  @ViewColumn()
  plateCarriage: string;

  @ViewColumn()
  driverCode: string;
}
