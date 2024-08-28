import { BaseRouter } from '../shared';
import { TestController } from './test.controller';

export class TestRouter extends BaseRouter<TestController> {
    constructor() {
        super(TestController);
    }

    public routes(): void {
        this.router.get('/test', this.controller.test);
        this.router.get('/test/json', this.controller.testJson);
    }
}
