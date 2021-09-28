// This file have all express configurations
import express from 'express'
import morgan from 'morgan'
import allRoutes from './routes'


//DOCUMENTATION



//INIT EXPRESS
const app = express()


//CONFIG initialize on which port
const port = (process.env.PORT || 3001)


//MIDDLEWARE
app.use(express.json());
app.use(morgan('dev'))
app.use(allRoutes) // we are passing all routes and here he execute that



//PORT
app.set('port', port)


//EXPRESS
// it listens on which port is initialized if its no in the port 3001 will be execute the if statement
app.listen(app.get('port'), (error)=> {
    if(error) {
        console.error('Failed to start')
    }
    else {
        console.log('Server started on port: '+ app.get('port'))
    }
})
