import { ViewEntity, ViewColumn } from "typeorm";

@ViewEntity({
  name: "SAT_APP_VIEW_VEICULO",
  expression: `
SELECT
  "SAT_VEICULO"."COD_VEICULO"       AS "plateCarriage",
  "SAT_VEICULO"."PLACA_CAVALO"      AS "plateHorse",
  "SAT_VEICULO_COMP"."NUM_COMP"     AS "numberOfCompartments",
  "SAT_PERFIL"."DESCRICAO"          AS "description",
  "SAT_VEICULO_MOT"."COD_MOTORISTA" AS "driverCode"
FROM
      "SAT_VEICULO"
  INNER JOIN "SAT_VEICULO_COMP" ON "SAT_VEICULO"."COD_VEICULO" = "SAT_VEICULO_COMP"."COD_VEICULO"
  INNER JOIN "SAT_VEICULO_TIPO" ON "SAT_VEICULO"."COD_VEIC_TIPO" = "SAT_VEICULO_TIPO"."COD_VEIC_TIPO"
  INNER JOIN "SAT_VEICULO_MOT" ON "SAT_VEICULO"."COD_VEICULO" = "SAT_VEICULO_MOT"."COD_VEICULO"
  INNER JOIN "SAT_PERFIL" ON "SAT_VEICULO"."COD_PERFIL" = "SAT_PERFIL"."COD_PERFIL"
  `,
})
export default class Vehicle {
  @ViewColumn()
  numberOfCompartments: number;

  @ViewColumn()
  plateCarriage: string;

  @ViewColumn()
  description: string;

  @ViewColumn()
  plateHorse: string;

  @ViewColumn()
  driverCode: string;
}
