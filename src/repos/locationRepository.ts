import type { Repository } from "typeorm";

import TemplateRepository from "./templateRepository";
import type Cursor from "../database/cursor";

import { Location } from "../models";

export default class LocationRepository extends TemplateRepository<Location> {
  repository: Repository<Location>;
  constructor(cursor: Cursor) {
    super(cursor, Location);
  }
}
