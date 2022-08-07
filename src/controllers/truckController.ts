import type TruckRepository from '../repos/truckRepository';
import type { Request, Response } from 'express';

export default class TruckController {
    truckRepository: TruckRepository;

    constructor(truckRepository: TruckRepository) {
        this.truckRepository = truckRepository;
    }

    async create(request: Request, response: Response): Promise<Response> {
        const { truck } = request.body;

        const truckEntity = await this.truckRepository.create({
            ...truck,
        });
        
        const r = await this.truckRepository.save(truckEntity);
        return response.send(r).status(200);
    }
}