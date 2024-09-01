import { Request, Response } from 'express';

export class TestController {
    public async test(_req: Request, res: Response) {
        res.status(200).json({ message: 'Success' });
    }
}
