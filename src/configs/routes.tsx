import routers from "../routes/index"

const routes = (app: any) => {
    app.use("/api/v1/parking-space", routers.parking_space)
}

export default routes