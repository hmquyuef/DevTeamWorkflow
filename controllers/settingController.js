import * as mongoDBTask from './mongoController.js';

const collection = 'sitesetting';

export async function GetSiteSetting(req, res) {
    try {
        const results = await mongoDBTask.findDocuments(collection);
        return res.status(results.statusCode).send(results.items);
    } catch (error) {
        return { statusCode: 500, message: 'Internal Server Error' };
    }
};

export async function UpdateSiteSetting(req, res) {
    try {
        const newData = req.body;
        if (!newData?.menu) {
            return res.status(400).json({ error: 'Invalid data format' });
        }
        const result = await mongoDBTask.updateDocument(collection, {}, { $set: { menu: newData.menu } });
        if (result) {
            return res.status(results.statusCode).send(results.updated);
        } else {
            res.status(500).json({ error: 'Failed to update data' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};