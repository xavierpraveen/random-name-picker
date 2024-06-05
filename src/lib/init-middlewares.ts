export const initMiddleware = (middleware: any) => {
  return async (req: any, res: any) =>
    await middleware(req, res, (result:any) => {
      if (result instanceof Error) {
        throw result;
      }
      return result;
    });
};
