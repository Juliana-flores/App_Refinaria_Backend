import type Cursor from "../database/cursor";
import type { Repository } from "typeorm";

import { TimeRange } from "../models";
import { MoreThan } from "typeorm";
import { parse } from "date-fns";

import TemplateRepository from "./templateRepository";

export default class TimeRangeRepository extends TemplateRepository<TimeRange> {
  repository: Repository<TimeRange>;
  constructor(cursor: Cursor) {
    super(cursor, TimeRange);
  }

  /**
   * @async
   * @function intervals
   * @returns {Interval[]}
   */
  async intervals() {
    const intervals = await this.repository.find({
      where: { id: MoreThan(1) },
    });

    return intervals.map((interval) => ({
      start: parse(interval.start, "HHmm", new Date()),
      end: parse(interval.end, "HHmm", new Date()),
      rawInterval: interval,
    }));
  }
}
