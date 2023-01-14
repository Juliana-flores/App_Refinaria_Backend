import type { Repository } from "typeorm";

import TemplateRepository from "./templateRepository";
import type Cursor from "../database/cursor";

import { Profile } from "../models";

export default class ProfileRepository extends TemplateRepository<Profile> {
  repository: Repository<Profile>;
  constructor(cursor: Cursor) {
    super(cursor, Profile);
  }

  async findByDocument(document: string): Promise<Profile> {
    try {
      const profile = await this.repository.findOne({ where: { document } });

      return profile;
    } catch (error) {
      return null;
    }
  }
}
