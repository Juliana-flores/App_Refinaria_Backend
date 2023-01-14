import type {
  DriverVehicleRepository,
  ProfileRepository,
  VehicleRepository,
  DriverRepository,
  TruckRepository,
} from "../repos";

import type { Profile, Truck, Vehicle } from "../models";

interface UserServiceParams {
  driverVehicleRepository: DriverVehicleRepository;
  profileRepository: ProfileRepository;
  vehicleRepository: VehicleRepository;
  driverRepository: DriverRepository;
  truckRepository: TruckRepository;
}

export class UserService {
  driverVehicleRepository: DriverVehicleRepository;
  profileRepository: ProfileRepository;
  vehicleRepository: VehicleRepository;
  driverRepository: DriverRepository;
  truckRepository: TruckRepository;

  constructor({
    driverVehicleRepository,
    profileRepository,
    vehicleRepository,
    driverRepository,
    truckRepository,
  }: UserServiceParams) {
    this.driverVehicleRepository = driverVehicleRepository;
    this.profileRepository = profileRepository;
    this.vehicleRepository = vehicleRepository;
    this.driverRepository = driverRepository;
    this.truckRepository = truckRepository;
  }

  async findByUsername(username: string) {
    const driver = await this.driverRepository.findByUsername(username);

    if (!driver) {
      const profile = await this.fetchProfile(username);

      if (!profile) {
        return null;
      }

      const vehicles = await this.fetchVehicles(profile);

      const trucks = await this.createTrucksIfNotExists(vehicles);

      return this.createDriverIfNotExists(profile, trucks);
    }

    return driver;
  }

  async createDriverIfNotExists(profile: Profile, trucks: Truck[]) {
    const driver = {
      driverCode: profile.driverCode,
      document: profile.document,
      username: profile.document,
      password: profile.document,
      name: profile.name,
      trucks,
    };

    return this.driverRepository.createAndSave(driver);
  }

  async createTrucksIfNotExists(vehicles: Vehicle[]): Promise<any> {
    if (!vehicles) {
      return null;
    }

    return this.truckRepository.createAndSaveMany(vehicles);
  }

  async fetchVehicles(profile: Profile): Promise<Vehicle[]> {
    const relations = await this.driverVehicleRepository.find({
      where: { driverCode: profile.driverCode },
    });

    if (!relations) {
      return null;
    }

    const plates = relations.map(({ plateCarriage }) => ({ plateCarriage }));
    const vehicles = await this.vehicleRepository.find({ where: plates });

    return vehicles.filter(
      ({ driverCode }) => driverCode === profile.driverCode
    );
  }

  async fetchProfile(document: string): Promise<Profile> {
    return this.profileRepository.findByDocument(document);
  }
}
