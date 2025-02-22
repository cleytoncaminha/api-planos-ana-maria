import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LeadDto } from './dto/lead.dto';

@Injectable()
export class LeadsService {
  constructor(private prisma: PrismaService) {}

  async create(data: LeadDto) {
    return this.prisma.lead.create({ data });
  }

  async findAll() {
    return this.prisma.lead.findMany();
  }

  async findOne(id: string) {
    return this.prisma.lead.findUnique({ where: { id } });
  }

  async update(id: string, data: LeadDto) {
    return this.prisma.lead.update({ where: { id }, data });
  }

  async delete(id: string) {
    return this.prisma.lead.delete({ where: { id } });
  }
}
