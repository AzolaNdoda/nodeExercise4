import mysql from 'mysql2/promise'

import { config } from 'dotenv'

config()

// Creating a connection to the mysql database

const pool = mysql.createPool({
    hostname: process.env.HOSTNAME,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

export {pool}