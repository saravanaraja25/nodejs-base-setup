import winston from 'winston';

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.json(),
  defaultMeta: { service: 'hr-insights-api' },
  transports: [new winston.transports.Console()],
});

export default logger;
