import mysql from 'mysql2/promise'
import {config} from './config'



export const connect = async() => {
    //we create try and catch for to see a mistakes
        try{
            return await mysql.createConnection(config) //try to do the connection 
        }
        catch(err) {
            console.log(err)
        }
        }
