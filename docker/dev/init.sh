#!/bin/bash
npm install
npm run prisma:generate --schema=database/schema.prisma
npm run start:dev