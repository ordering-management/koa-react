import log4js from 'log4js';

log4js.configure({
  appenders: {
    error: {
      type: 'dateFile',
      filename: __dirname + '../../logs/log.log',
      //filename: "blah.log",
      pattern: "-yyyy-MM-dd",
      maxLogSize: 1024 * 1024,
      // "pattern": "-yyyy-MM-dd",
      alwaysIncludePattern: true,

      backups: 4,
    },
  },
  categories: { default: { appenders: ['error'], level: 'error' } }
})

var loggerError = log4js.getLogger();

export default loggerError;