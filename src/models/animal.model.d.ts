import { Entity } from '@loopback/repository';
export declare class Animal extends Entity {
    animal_id: string;
    animal_name: string;
    animal_type: string;
    sex: string;
    years_old: number;
    months_old: number;
    dob: Date;
    color_group: string;
    primary_color: number;
    secondary_color: string;
    markings?: string;
    animal_cond: string;
    animal_stat: string;
    status_date: string;
    bites?: string;
    animal_size: 'string';
    coat: string;
    ears: string;
    tail: string;
    legs: string;
    collar_type: string;
    vet_id: string;
    s_n_due_date: string;
    s_n_comp_date: string;
    voucher_no: string;
    cntract_exp_date: string;
    location: string;
    userid: string;
    stamp: string;
    constructor(data?: Partial<Animal>);
}
