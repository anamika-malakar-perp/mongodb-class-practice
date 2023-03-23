const {MongoClient} = require('mongodb');

const url = "mongodb://localhost:27017"
const client = new MongoClient(url);

const insertToDB = async (data) => {
    await client.connect();
    const database = client.db("student");
    const collection = database.collection("information");
    await client.connect();
    const dbResponse = await collection.insertOne(data);
    await client.close();
    return dbResponse;
}

const findInDB = async (query) => {
    const database = client.db("student");
    const collection = database.collection("information");
    await client.connect();
    const dbResponse = await collection.find(query).toArray();
    await client.close();
    return dbResponse; 
}

const updateInDB = async (filteredCond, value) => {
    const database = client.db("student");
    const collection = database.collection("information");
    await client.connect();
    const dbResponse = await collection.updateOne(filteredCond, value);
    await client.close();
    return dbResponse; 
}

const deleteInDB = async (filteredCond) => {
    const database = client.db("student");
    const collection = database.collection("information");
    await client.connect();
    const dbResponse = await collection.deleteOne(filteredCond);
    await client.close();
    return dbResponse; 
}

module.exports = {
    insertToDB, findInDB, updateInDB, deleteInDB
}