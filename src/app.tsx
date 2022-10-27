import { runApp, IAppConfig } from 'ice';

const appConfig: IAppConfig = {
  app: {
    rootId: 'ice-container',
  },
  router: {
    fallback: <div>加载中...</div>,
  },
};

runApp(appConfig);
