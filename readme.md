fincaspluscloud --recordatorio instalación 

// crea el package.json
npm init -y 

//  crea el paquete de tsc de configuracions
tsc --init

// instalamos el tslink
npm i tslint --save-dev

// instalamos el tsc de forma local
npm i tsc --save-dev

// fichero de configuracion de tslint
./node_modules/.bin/tslint --init

// instalamos nodemon en forma local 
 npm i nodemon --save-dev
 nodemon dist/app.js 

 //
 tsc --watch

 // debemos intalar cors

npm install cors dotenv mysql2 express sequelize


npm install @types/cors --save-dev
npm install @types/dotenv --save-dev
npm install @types/express --save-dev
npm install --save-dev @types/sequelize
