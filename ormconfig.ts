import { DataSourceOptions } from 'typeorm';

export default {
  "type": "sqlite",
  "database": "./db.sql",
  "synchronize": true,
  "entities": ["dist/**/*.entity.js"]
} as DataSourceOptions;

