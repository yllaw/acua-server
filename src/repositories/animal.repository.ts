import { DefaultCrudRepository } from '@loopback/repository';
import { Animal } from '../models';
import { MongoDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class AnimalRepository extends DefaultCrudRepository <Animal, typeof Animal.prototype.animal_id > {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Animal, dataSource);
  }
}
