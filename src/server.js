import http from 'http';
import Server from './app';
import database from './database';

const port = 3333;

(async () => {
  try {
    const server = http.Server(Server);
    server.listen(port, () =>
      console.log(`⚡| Server is running on port ${port}!`)
    );

    const exitSignals = ['SIGINT', 'SIGTERM', 'SIGQUIT'];
    exitSignals.map(sig =>
      process.on(sig, () =>
        server.close(err => {
          if (err) {
            console.error(err);
            process.exit(1);
          }
          database.disconnect(() => {
            console.error('⛔| Database connection closed!');
            process.exit(0);
          });
        })
      )
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
