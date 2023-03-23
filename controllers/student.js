const mongoClient = require("../database/connection");

const studentEnrollment = async (req, res) => {
    const studentData = req.body;
    try {
        const result = await mongoClient.insertToDB(studentData);
        console.log("The result of databse operation =>", result);
        return res.status(200).send(result);
    } catch(error) {
        console.log("Something went wrong while performing db opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}

const studentFind = async (req, res) => {
    const queryParams = req.query;
    const query = {cgpa: {$eq: parseInt(queryParams.cgpa)}};
    console.log(query)
    // console.log('queryParams', queryParams)
    try {
        const result = await mongoClient.findInDB(query);
        console.log("The result of databse operation =>", result);
        return res.status(200).send(result);
    } catch(error) {
        console.log("Something went wrong while performing db opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}

const studentUpdate = async (req, res) => {
    const updateData = req.body;
    const filter = updateData.filter;
    const value = {$set: updateData.value}
    console.log(filter);
    console.log(value);
    try {
        const result = await mongoClient.updateInDB(filter, value);
        console.log("The result of databse operation =>", result);
        return res.status(200).send(result);
    } catch(error) {
        console.log("Something went wrong while performing db opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}

const studentDelete = async (req, res) => {
    const condition = req.query;
    console.log(condition);
    try {
        const result = await mongoClient.deleteInDB(condition);
        console.log("The result of databse operation =>", result);
        return res.status(200).send(result);
    } catch(error) {
        console.log("Something went wrong while performing db opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}

module.exports = {
    studentEnrollment, studentFind, studentUpdate, studentDelete
}