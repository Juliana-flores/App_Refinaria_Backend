import type { Repository } from "typeorm";

import TemplateRepository from "./templateRepository";
import type Cursor from "../database/cursor";

import { Queue } from "../models";

export default class QueueRepository extends TemplateRepository<Queue> {
  repository: Repository<Queue>;
  constructor(cursor: Cursor) {
    super(cursor, Queue);
  }
}
