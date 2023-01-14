import { isWithinInterval } from "date-fns";
import type { Repository } from "typeorm";
import { MoreThan } from "typeorm";
import { parse } from "date-fns";

import TemplateRepository from "./templateRepository";
import type Cursor from "../database/cursor";

import { TimeRange } from "../models";

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
  async intervals(timestamp: Date): Promise<boolean> {
    const rawIntervals = await this.repository.find({
      where: { id: MoreThan(1) },
    });

    const intervals = rawIntervals.map((interval) => ({
      start: parse(interval.start, "HHmm", new Date()),
      end: parse(interval.end, "HHmm", new Date()),
      rawInterval: interval,
    }));

    return intervals.some((interval) => isWithinInterval(timestamp, interval));
  }
}
