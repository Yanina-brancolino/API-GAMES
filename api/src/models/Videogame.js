const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo

  sequelize.define('videogame', {

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull:{
          msg: 'Name is required',
        }
      }
    },

    id:{ 
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },

    description: { 
      type: DataTypes.TEXT,      
    },

    released: { 
      type: DataTypes.STRING,      
    },

    rating: { 
      type: DataTypes.DECIMAL,      
    },

    platforms: { 
      type: DataTypes.STRING,      
    },
    
    image:{
      type: DataTypes.STRING,
    },

    source:{
      type: DataTypes.STRING,
    },

  },
  
   {timestamps: false},
   {updatedAt: false},
   {createdAt: false}
   
  );
};
