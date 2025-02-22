import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { LeadsService } from './leads.service';
import { LeadDto } from './dto/lead.dto';

@Controller('leads')
export class LeadsController {
  constructor(private readonly leadsService: LeadsService) {}

  @Post()
  create(@Body() data: LeadDto) {
    return this.leadsService.create(data);
  }

  @Get()
  findAll() {
    return this.leadsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.leadsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: LeadDto) {
    return this.leadsService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.leadsService.delete(id);
  }
}
