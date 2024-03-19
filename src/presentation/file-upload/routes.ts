import { Router } from "express";
import { AuthMiddlewares } from "../middlewares/auth.middlewares";
import { FileUploadController } from "../file-upload/controller";
import { FileUploadService } from "../services";
import { FileUploadMiddleware } from "../middlewares/file-upload.middleware";
import { TypeMiddleware } from "../middlewares/type.middleware";

export class FileUploadRoutes {
  static get routes(): Router {
    const router = Router();

    const fileUploadService = new FileUploadService();
    const controller = new FileUploadController(fileUploadService);

    //* Middleware
    router.use(FileUploadMiddleware.containFiles);
    router.use(TypeMiddleware.validTypes(["users", "products", "categories"]));

    //* Definir las rutas
    //* api/upload/single/<user|category|product>/
    //* api/upload/multiple/<user|category|product>/
    router.post("/single/:type", controller.uploadFile);
    router.post("/multiple/:type", controller.uploadMultileFiles);

    return router;
  }
}
