export const wsOptions = {
   namespace: 'support',
   cookie: true,
   cors: {
      origin: [process.env.ORIGIN],
      methods: ['GET', 'POST'],
      allowedHeaders: [
         'Content-Type',
         'Authorization',
         'X-Requested-With',
         'Origin',
         'Accept',
      ],
      credentials: true,
   },
}
