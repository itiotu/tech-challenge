import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import endpoints from './routes';

export async function getApp() {
    const app = new Koa();
    app.use(bodyParser());

    app.use(endpoints.routes());
    app.use(endpoints.allowedMethods());

    return app;
}

export async function startServer(port: string) {
    const app = await getApp();

    return app.listen(port, () => {
        console.log(`Server up & listening on port ${port}`);
    });
}
