import winston, { format } from "winston";
const { combine, timestamp, json } = format;

const logger = winston.createLogger({
  level: "info",
  format: combine(timestamp(), json()),
  // defaultMeta: { service: "user-service" },
  transports: [
    // Crea un archivo ".log" para almacenar los logs, en este caso de nivel "error".
    new winston.transports.File({ filename: "error.log", level: "error" }),
    // Crea un archivo ".log" con todos todos los logs ejecutados.
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

// Muestra en la consola el log.
logger.add(
  new winston.transports.Console({
    format: winston.format.simple(),
  })
);

export function buildLogger(service: string) {
  return {
    log: (message: string) => {
      logger.log("info", { message, service });
    },
    error: (message: string) => {
      logger.error("error", { message, service });
    },
  };
}
