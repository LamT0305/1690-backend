import dbconect from "./db.config"
import routes from "./routes"
import eventEmitters from "./eventEmitters";

export default {
    dbconect: dbconect,
    router: routes,
    eventsEmitter: eventEmitters
}