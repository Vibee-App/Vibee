const { DataTypes } = require("sequelize");
const sequelize = require("../config/Db");

const Review = sequelize.define('Review',{
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    review:{
        type:DataTypes.STRING,
        allowNull: true,
    },
    note:{
        type:DataTypes.INTEGER,
        allowNull:true
    },
    accountId: {  
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: User,  
            key: 'id', 
        },
        onDelete: 'CASCADE',  
    }
})

Review.belongsTo(User, { foreignKey: 'accountId', onDelete: 'CASCADE' });

module.exports = Review;