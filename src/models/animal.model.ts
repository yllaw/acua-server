import { Entity, model, property } from '@loopback/repository';

@model()
export class Animal extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  animal_id?: string;

  @property({
    type: 'string',
    required: true
  })
  animal_name: string;

  @property({
    type: 'string',
    required: true
  })
  animal_type: string;

  @property({
    type: 'string',
    required: true,
  })
  sex: string;

  @property({
    type: 'number',
  })
  years_old: number;

  @property({
    type: 'number',
  })
  months_old: number;

  @property({
    type: 'date',
    required: true,
  })
  dob: Date;

  @property({
    type: 'string',
  })
  color_group: string;

  @property({
    type: 'string',
  })
  primary_color: number;

  @property({
    type: 'string',
  })
  secondary_color: string;

  @property({
    type: 'string',
  })
  markings: string;

  @property({
    type: 'string',
  })
  animal_cond: string;

  @property({
    type: 'string',
  })
  animal_stat: string;

  @property({
    type: 'string',
  })
  status_date: string;

  @property({
    type: 'string',
  })
  bites: string;

  @property({
    animal_size: 'string',
  })
  coat: string;

  @property({
    type: 'string',
  })
  ears: string;

  @property({
    type: 'string',
  })
  tail: string;

  @property({
    type: 'string',
  })
  legs: string;

  @property({
    type: 'string',
  })
  collar_type: string;

  @property({
    type: 'string',
  })
  vet_id: string;

  @property({
    type: 'string',
  })
  s_n_due_date: string;

  @property({
    type: 'string',
  })
  s_n_comp_date: string;

  @property({
    type: 'string',
  })
  voucher_no: string;

  @property({
    type: 'string',
  })
  cntract_exp_date: string;

  @property({
    type: 'string',
  })
  location: string;

  @property({
    type: 'string',
  })
    
  userid: string;
    @property({
    type: 'string',
  })
  stamp: string;




  constructor(data?: Partial<Animal>) {
    super(data);
  }
}
