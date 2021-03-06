import { inject, injectable } from "inversify";
import { Controller, Get, interfaces } from "inversify-restify-utils";
import { Request } from "restify";
import * as HttpStatus from "http-status-codes";
import { IDatabaseProvider } from "../../db/idatabaseprovider";
import { ILoggingProvider } from "../../logging/iLoggingProvider";
import { sqlGenres } from "../../config/constants";

/**
 * controller implementation for our genres endpoint
 */
@Controller("/api/genres")
@injectable()
export class GenreController implements interfaces.Controller {

  constructor(@inject("IDatabaseProvider") private cosmosDb: IDatabaseProvider,
              @inject("ILoggingProvider") private logger: ILoggingProvider) {
    this.cosmosDb = cosmosDb;
    this.logger = logger;
  }

  /**
   * @swagger
   *
   * /api/genres:
   *   get:
   *     description: Retrieve and return all genres.
   *     tags:
   *       - Genres
   *     responses:
   *       '200':
   *         description: List of genres objects
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 type: string
   *       default:
   *         description: Unexpected error
   */
  @Get("/")
  public async getAllGenres(req: Request, res) {
    let resCode: number = HttpStatus.OK;
    let results: string[];
    try {
      results = await this.cosmosDb.queryDocuments(sqlGenres);
    } catch (err) {
      resCode = HttpStatus.INTERNAL_SERVER_ERROR;
    }

    return res.send(resCode, results);
  }
}
