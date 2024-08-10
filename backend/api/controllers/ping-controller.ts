import express, { Request, Response, Router } from "express"

import PingService from "api/services/ping-service"

export default class PingController {
  constructor(private pingService: PingService) { }

  async ping(req: Request, res: Response) {
    const response = await this.pingService.ping()
    return res.status(200).json({ message: response })
  }

  createEndpoints() {
    const router: Router = express.Router()

    router.get("/", (req: Request, res: Response) => this.ping(req, res))

    return router
  }
}