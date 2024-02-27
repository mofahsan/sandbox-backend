const winston = require('winston');
require('winston-daily-rotate-file');

// const config = require('../config.json');
// let environment = process.env.NODE_ENV || 'development';
let environment = process.env.env || "development";
environment = environment.trim();

const logger = winston.createLogger({
    level: process.env.log_level,
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.json()
    ),
    defaultMeta: { service: process.env.app_name },
    transports: [
        // - Write to all logs with level `info` and below to `combined.log` 
        // - Write all logs error (and below) to `error.log`.
        new winston.transports.File({ filename: 'Logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'Logs/combined.log' }),
        new winston.transports.DailyRotateFile({
            filename: process.env.app_name + '-%DATE%.log',
            dirname: 'Logs/',
            datePattern: 'YYYY-MM-DD',
            maxFiles: '1d'
        })
    ]
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
// 
if (process.env.env !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.combine(
            winston.format.timestamp({
                format: 'YYYY-MM-DD HH:mm:ss'
            }),
            winston.format.simple()
        )
    }));
}

module.exports = logger;