import {Entity, model, property} from '@loopback/repository';

@model()
export class Faq extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'number',
  })
  index?: number;

  @property({
    type: 'string',
    required: true,
  })
  query: string;

  @property({
    type: 'string',
  })
  answer?: string;

  @property({
    type: 'number',
  })
  window?: number;

  @property({
    type: 'boolean',
    default: false,
  })
  isComplete?: boolean;


  constructor(data?: Partial<Faq>) {
    super(data);
  }
}
