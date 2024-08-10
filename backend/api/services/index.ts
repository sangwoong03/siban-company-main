import { DataSource } from "typeorm";

import * as model from "../models"
import PingService from "./ping-service";
import AuthService from "./auth-service";

class ServiceHandler {
  pingService: PingService
  authService: AuthService

  constructor(database: DataSource) {
    this.pingService = new PingService(new model.PingDao(database))
    this.authService = new AuthService(new model.AuthDao(database))
  }
}

export {
  ServiceHandler,
  PingService,
  AuthService,
}