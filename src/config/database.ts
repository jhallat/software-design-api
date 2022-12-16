import {connect}from "mongoose";

export const connectDatabase = () => {
    connect(process.env.DB_LOCAL_URI + '',).then(con => {
        console.log(`MongoDB Database connected with host: ${con.connection.host} `)
    });
};