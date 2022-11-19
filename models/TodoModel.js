import { Sequelize } from "sequelize";
import db from "../config/Database.js";
 
const { DataTypes } = Sequelize;
 
const Todo = db.define('todos',{
title: {
    type: DataTypes.STRING,
    allowNull: false
    },
    isDone: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
},{
    freezeTableName: true
});

 
export default Todo;

(async()=>{
    await db.sync();
})();