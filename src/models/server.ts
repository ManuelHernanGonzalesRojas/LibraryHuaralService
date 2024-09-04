import express, { Request, Response } from 'express';
import routesBook from '../routes/book';
class Server {
    private app: express.Application;
    private port: string;
    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.middlewares();
        this.routes();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Application Running on Port ${this.port}`)
        })
    }
    routes() {
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                msg: `API Working`
            })
        });
        this.app.use('/api/books', routesBook);
    }
    middlewares() {
        this.app.use(express.json());
    }
}



export default Server;