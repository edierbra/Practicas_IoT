import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity('tikectfull')
export class TicketFullEntity {
   @ObjectIdColumn()
   id: string;

   @Column()
   passenger_name: string;

   @Column()
   source: string;

   @Column()
   destination: string;

   @Column()
   goingdate: Date;

   @Column()
   flight: string;

   @Column()
   returndate: Date;
}