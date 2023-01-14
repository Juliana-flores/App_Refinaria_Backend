import { ViewEntity, ViewColumn } from "typeorm";

@ViewEntity({
  name: "SAT_APP_VIEW_PERFIL",
  expression: `
SELECT
    "SAT_USUARIO"."NOME" as "name",
    "SAT_MOTORISTA"."CPF" as "document",
    "SAT_AGENDA"."COD_MOTORISTA" as "driverCode"
FROM
    "SAT_USUARIO"
  INNER JOIN "SAT_MOTORISTA" ON  "SAT_USUARIO"."COD_MOTORISTA" = "SAT_MOTORISTA"."COD_MOTORISTA"
  INNER JOIN "SAT_AGENDA" ON "SAT_USUARIO"."COD_MOTORISTA" = "SAT_AGENDA"."COD_MOTORISTA"
`,
})
export default class Profile {
  @ViewColumn()
  driverCode: string;

  @ViewColumn()
  document: string;

  @ViewColumn()
  name: string;
}
