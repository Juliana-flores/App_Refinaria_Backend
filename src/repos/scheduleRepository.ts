import { startOfDay, endOfDay } from "date-fns";
import { Between, Equal, In } from "typeorm";
import type { Repository } from "typeorm";

import TemplateRepository from "./templateRepository";
import type Cursor from "../database/cursor";

import {
  availableProducts,
  availableStatus,
  productName,
  statusName,
} from "../models/schedule";

import { Schedule } from "../models";

const Today =
  /**
   * Operator to search in the current day
   *
   * @function Today
   * @param {Date} date
   * @returns {FindOperator<Date>}
   */
  (date: Date) => Between(startOfDay(date), endOfDay(date));

interface CustomSchedule {
  plateCarriage: string;
  driverCode: number;
  product: string;
  status: string;
  eventAt: Date;
  id: number;
}

export default class ScheduleRepository extends TemplateRepository<Schedule> {
  repository: Repository<Schedule>;

  constructor(cursor: Cursor) {
    super(cursor, Schedule);
  }

  /**
   * @async
   * @function findByPlateCarriage
   * @param {string} plateCarriage
   * @param {Date} date
   * @returns {Promise<CustomSchedule[]>}
   */
  async findByPlateCarriage(
    plateCarriage: string,
    date: Date
  ): Promise<CustomSchedule | undefined> {
    return this.repository
      .findOne({
        where: {
          plateCarriage: Equal(plateCarriage),
          product: In(availableProducts),
          status: In(availableStatus),
          eventAt: Today(date),
        },
      })
      .then((schedule) => {
        if (!schedule) {
          return;
        }
        return {
          ...schedule,
          product: productName.get(schedule.product) || "",
          status: statusName.get(schedule.status) || "",
        };
      });
  }
}
