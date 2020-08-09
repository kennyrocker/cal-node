import winston from 'winston';

const { combine, splat, simple, timestamp, prettyPrint } = winston && winston.format;
const level = process.env.environment === 'prod' || process.env.environment === 'staging' ? 'info' : 'debug';

const logger = winston.createLogger({
	transports: [
	  new winston.transports.Console({
		level,
		format:combine(
            splat(),
            simple(),
            timestamp(),
            prettyPrint()
			)
	  }),
	]
  });

  export default logger;
