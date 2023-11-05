import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { defineString } from 'firebase-functions/params'
admin.initializeApp()

const db = admin.firestore()
const API_KEY = defineString('API_KEY')

export const writeTempToFirestore = functions.https.onRequest(async (req, res): Promise<void> => {
  try {
    if (req.method !== 'POST') {
      res.status(400).send('Invalid request method. Use POST.')
    }

    const api_key = req.headers['x-api-key']


    // Could improve in the future. Good enough for now.
    if (api_key !== API_KEY.value()) {
      res.status(403).send('Invalid API key.')
    }

    if (!req.body) {
      res.status(400).send('Request body is missing.')
    }

    const { data, published_at } = req.body

    const temp = parseFloat(data)
    const timestamp = new Date(published_at).getTime()

    if (!isNaN(temp) && !isNaN(timestamp) && temp > -100 && timestamp > 0) {
      const docRef = db.collection('temps').doc()
      await docRef.set({ temp, timestamp })
      res.status(200).send('Data written to Firestore successfully')
    } else {
      throw new Error("Validation failure")
    }
  } catch (error) {
    res.status(500).send('Error writing data to Firestore: ' + error)
  }
})
