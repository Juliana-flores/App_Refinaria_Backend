import type DriverRepository from "../repos/driverRepository";
import type TruckRepository from "../repos/truckRepository";
import type { Request, Response } from 'express';

export default class DriverController {
    driverRepository: DriverRepository;
    truckRepository: TruckRepository;


    constructor(driverRepository: DriverRepository, truckRepository: TruckRepository) {
        this.driverRepository = driverRepository;
        this.truckRepository = truckRepository;
    }

    async create(request: Request, response: Response): Promise<Response> {
        const { driver } = request.body;

        const truck = await this.truckRepository.findOneByLicensePlate(driver.licensePlate);
        if(!truck) {
            return response.sendStatus(204)
        }

        const driverEntity = await this.driverRepository.create({
            ...driver,
            trucks: [truck],
        });

        const r = await this.driverRepository.save(driverEntity);
        return response.send(r).status(200);
    }
}