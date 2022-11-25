import { Body, Controller, Delete, Get, Inject, Param, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { TicketFullService } from '../../domain/services/ticketfull.service';

import { TicketFull } from '../../domain/models/ticketfull.model';
import { TicketFullController } from './ticketfull.controller';

import { AuthGuard } from '@nestjs/passport';

const errReturn = (e: Error, message: string) => {
  return {
    message: message,
    error: e
  }
}

@Controller()
export class TicketFullControllerImpl implements TicketFullController {
  constructor(@Inject('TicketFullService') private readonly tiketeService: TicketFullService) { }

  @Get()
  listTicketsFull() {
    try{
      return this.tiketeService.list();
    }
    catch(e){
      return errReturn(e, "Error al listar tiketes");
    }
  }

  @UseGuards(AuthGuard('local'))
  @Post()
  create(@Body() datos: TicketFull) {
    try{
      return this.tiketeService.create(datos);
    }
    catch(e){
      return errReturn(e, "Error al crear tikete");
    }
  }

  @Put(":id")
  update(@Body() datos: TicketFull, @Param('id') id: number) {
    try{
      return this.tiketeService.update(id, datos);
    }
    catch(e){
      return errReturn(e, "Error al modificar tikete");
    }
  }

  @Delete(":id")
  delete(@Param('id') id: number) {
    try{
      return this.tiketeService.delete(id);
    }
    catch(e){
      return errReturn(e, "Error al eliminar fecha de regreso del tikete");
    }
  }

  @Patch(":id/regreso/:regreso")
  updateReturn(@Param('id') id: number, @Param('regreso') regreso: Date) {
    try{
      return this.tiketeService.updateReturn(id, regreso);
    }
    catch(e){
      return errReturn(e, "Error al modificar fecha de regreso del tikete");
    }
  }
}