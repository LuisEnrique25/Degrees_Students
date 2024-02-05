const Student = require("./Student");
const Degree = require("./Degree");
const Country = require("./Country");

Student.belongsTo(Degree); 
Degree.hasMany(Student);

Student.belongsTo(Country);
Country.hasMany(Student);