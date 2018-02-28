import log4js from 'log4js';

log4js.configure({
  appenders: {
    error: {
      type: 'dateFile',
      filename: __dirname + '../../logs/log.log',
      pattern: "-yyyy-MM-dd",
      maxLogSize: 1024 * 1024,
      alwaysIncludePattern: true,
      backups: 4,
    },
  },
  categories: { default: { appenders: ['error'], level: 'all' } }
})

var logger = log4js.getLogger('default');

export default logger;