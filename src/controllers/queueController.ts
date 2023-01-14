import type {
  TimeRangeRepository,
  LocationRepository,
  ScheduleRepository,
  QueueRepository,
  TruckRepository,
} from "../repos";

import type { Request, Response } from "express";

import { parse } from "date-fns";

import type { Queue } from "../models";

enum ErrorMessage {
  badRequest = "Parâmetros necessários: latitude, longitude e placa do caminhão.",
  outOfStock = "Impossível realizar carregamento. Favor, diriga-se ao totem.",
  outOfInterval = "Intervalo indisponível para atendimento",
  notFound = "Caminhão não encontrado ou cadastrado.",
}

interface QueueControllersOptions {
  timeRangeRepository: TimeRangeRepository;
  locationRepository: LocationRepository;
  scheduleRepository: ScheduleRepository;
  queueRepository: QueueRepository;
  truckRepository: TruckRepository;
}
export default class QueueController {
  timeRangeRepository: TimeRangeRepository;
  locationRepository: LocationRepository;
  scheduleRepository: ScheduleRepository;
  queueRepository: QueueRepository;
  truckRepository: TruckRepository;

  constructor({
    timeRangeRepository,
    scheduleRepository,
    locationRepository,
    queueRepository,
    truckRepository,
  }: QueueControllersOptions) {
    this.timeRangeRepository = timeRangeRepository;
    this.locationRepository = locationRepository;
    this.scheduleRepository = scheduleRepository;
    this.queueRepository = queueRepository;
    this.truckRepository = truckRepository;
  }

  async schedule(request: Request, response: Response): Promise<Response> {
    const { plateCarriage, lat, lon } = request.body;

    if (!plateCarriage || !lat || !lon) {
      return response.status(400).send({ message: ErrorMessage.badRequest });
    }

    const truck = await this.truckRepository.findOneByLicensePlate(
      plateCarriage
    );

    if (!truck) {
      return response.status(400).send({ message: ErrorMessage.notFound });
    }

    const timestamp = parse("12:00", "HH:mm", new Date());

    //const timestamp = new Date();

    const isWithinAnyInterval = await this.timeRangeRepository.intervals(
      timestamp
    );

    if (!isWithinAnyInterval) {
      return response.status(400).send({ message: ErrorMessage.outOfInterval });
    }

    const currentDay = parse("21/06/2019", "dd/MM/yyyy", new Date());

    const schedule = await this.scheduleRepository.findByPlateCarriage(
      plateCarriage,
      currentDay
    );

    if (!schedule) {
      return response.status(400).json({ message: ErrorMessage.outOfStock });
    }

    const location = await this.locationRepository.createAndSave({
      lon,
      lat,
    });

    const { id: position }: Queue = await this.queueRepository.createAndSave({
      timestamp,
      location,
      truck,
    });

    const output = {
      position,
      ...schedule,
    };

    return response.status(201).send(output);
  }
}
