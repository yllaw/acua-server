import { Entity, model, property } from '@loopback/repository';

@model()
export class Ticket extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'number'
  })
  number: number;

  @property({
    type: 'number'
  })
  index: number;

  @property({
    type: 'string',
    required: true,
  })
  phone: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  query: string;

  @property({
    type: 'string',
    required: true,
  })
  location: string;

  @property({
    type: 'number',
  })
  window: number;

  @property({
    type: 'number',
    default: 0,
  })
  strikes: number;

  @property({
    type: 'boolean',
    default: false,
  })
  isComplete: boolean;


  constructor(data?: Partial<Ticket>) {
    super(data);
  }
}
