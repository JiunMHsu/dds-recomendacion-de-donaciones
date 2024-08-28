import { Request, Response } from 'express';

export class TestController {
    public async test(_req: Request, res: Response) {
        res.status(200).send('Hello, World!');
    }

    public async testJson(_req: Request, res: Response) {
        res.status(200).json({ message: 'Success' });
    }
}
