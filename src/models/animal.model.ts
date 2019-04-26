import {Entity, model, property} from '@loopback/repository';

@model()
export class Animal extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  ANIMAL_ID: string;

  @property({
    type: 'string',
    id: true,
    required: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  ANIMAL_NAME: string;

  @property({
    type: 'string',
    required: true,
  })
  ANIMAL_TYPE: string;

  @property({
    type: 'string',
    required: true,
  })
  SEX: string;

  @property({
    type: 'number',
  })
  YEARS_OLD?: number;

  @property({
    type: 'number',
  })
  MONTHS_OLD?: number;

  @property({
    type: 'date',
    required: true,
  })
  DOB: string;

  @property({
    type: 'string',
    required: true,
  })
  COLOR_GROUP: string;

  @property({
    type: 'string',
    required: true,
  })
  PRIMARY_COLOR: string;

  @property({
    type: 'string',
  })
  SECONDARY_COLOR?: string;

  @property({
    type: 'string',
    required: true,
  })
  BREED_GROUP: string;

  @property({
    type: 'string',
    required: true,
  })
  PRIMARY_BREED: string;

  @property({
    type: 'string',
  })
  SECONDARY_BREED?: string;

  @property({
    type: 'string',
  })
  MARKINGS?: string;

  @property({
    type: 'string',
    required: true,
  })
  ANIMAL_COND: string;

  @property({
    type: 'string',
    required: true,
  })
  ANIMAL_STAT: string;

  @property({
    type: 'date',
    required: true,
  })
  STATUS_DATE: string;

  @property({
    type: 'string',
  })
  BITES?: string;

  @property({
    type: 'string',
    required: true,
  })
  ANIMAL_SIZE: string;

  @property({
    type: 'string',
  })
  COAT?: string;

  @property({
    type: 'string',
  })
  EARS?: string;

  @property({
    type: 'string',
  })
  TAIL?: string;

  @property({
    type: 'string',
  })
  LEGS?: string;

  @property({
    type: 'string',
  })
  COLLAR_TYPE?: string;

  @property({
    type: 'string',
  })
  VET_ID?: string;

  @property({
    type: 'string',
  })
  S_N_DUE_DATE?: string;

  @property({
    type: 'date',
  })
  S_N_COMP_DATE?: string;

  @property({
    type: 'string',
  })
  VOUCHER_NO?: string;

  @property({
    type: 'date',
  })
  CNTRACT_EXP_DATE?: string;

  @property({
    type: 'string',
    required: true,
  })
  LOCATION: string;

  @property({
    type: 'string',
    required: true,
  })
  USERID: string;

  @property({
    type: 'string',
    required: true,
  })
  STAMP: string;


  constructor(data?: Partial<Animal>) {
    super(data);
  }
}
