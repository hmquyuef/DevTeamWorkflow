// const { MongoClient } = require('mongodb');
import { MongoClient } from 'mongodb';
// Import the required MongoDB packages

// Define the MongoDB connection URL
const url = 'mongodb://192.168.98.48:27017/';

// Define the database name
const dbName = 'DevTeamWorkFlow';

// Function to connect to MongoDB
async function connect() {
    try {
        // Create a new MongoClient
        const client = new MongoClient(url);

        // Connect to the MongoDB server
        await client.connect();

        // Return the connected client and database
        return {
            client,
            db: client.db(dbName)
        };
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        throw error;
    }
}

// Function to insert a document into a collection
export async function insertDocument(collectionName, document) {
    try {
        // Connect to MongoDB
        const { client, db } = await connect();
        // Get the collection
        const collection = db.collection(collectionName);
        // Insert the document
        const result = await collection.insertOne(document);
        // Close the connection
        client.close();
        // Return the inserted document
        return { statusCode: 201, message: 'Inserted document successfully' };
    } catch (error) {
        return { statusCode: 500, message: 'Internal Server Error', error: error };
    }
}

// Function to update a document in a collection
export async function updateDocument(collectionName, filter, update) {
    try {
        // Connect to MongoDB
        const { client, db } = await connect();
        // Get the collection
        const collection = db.collection(collectionName);
        // Update the document
        const result = await collection.updateOne(filter, update);
        // Close the connection
        client.close();
        // Return the updated document
        return {statusCode: 200, message: 'Updated document successfully', updated: result.modifiedCount}
    } catch (error) {
        return { statusCode: 500, message: 'Internal Server Error', error: error };
    }
}

// Function to delete a document from a collection
export async function deleteDocument(collectionName, filter) {
    try {
        // Connect to MongoDB
        const { client, db } = await connect();
        // Get the collection
        const collection = db.collection(collectionName);
        // Delete the document
        const result = await collection.deleteOne(filter);
        // Close the connection
        client.close();
        // Return whether the document was deleted
        return { statusCode: 200, message: 'Deleted document successfully', deleted: result.deletedCount}
    } catch (error) {
        console.error('Failed to delete document:', error);
        return { statusCode: 500, message: 'Internal Server Error', error: error };
    }
}

// Function to find documents in a collection
export async function findDocuments(collectionName, filter) {
    try {
        // Connect to MongoDB
        const { client, db } = await connect();
        // Get the collection
        const collection = db.collection(collectionName);
        // Find the documents
        const documents = await collection.find(filter).toArray();
        // Close the connection
        client.close();
        // Return the found documents
        return { statusCode: 200, message: 'Found documents successfully', items: documents };
    } catch (error) {
        console.error('Failed to find documents:', error);
        return { statusCode: 500, message: 'Internal Server Error', error: error };
    }
}
// Function to find documents in a collection
export async function findOne(collectionName, username) {
    try {
        // Connect to MongoDB
        const { client, db } = await connect();
        // Get the collection
        const collection = db.collection(collectionName);
        // Find the documents
        const documents = await collection.findOne({ username: username });
        // Close the connection
        client.close();
        // Return the found documents
        return { statusCode: 200, message: 'Found documents successfully', item: documents };
    } catch (error) {
        console.error('Failed to find documents:', error);
        return { statusCode: 500, message: 'Internal Server Error', error: error };
    }
}