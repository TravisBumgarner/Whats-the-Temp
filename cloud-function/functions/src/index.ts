import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
admin.initializeApp()

const db = admin.firestore()

export const writeTempToFirestore = functions.https.onRequest(async (req, res): Promise<void> => {
  try {
    if (req.method !== 'POST') {
      res.status(400).send('Invalid request method. Use POST.')
    }

    if (!req.body) {
      res.status(400).send('Request body is missing.')
    }

    const { data, published_at } = req.body

    const docRef = db.collection('temps').doc()
    await docRef.set({ temp: parseFloat(data), timestamp: new Date(published_at).getTime() })

    res.status(200).send('Data written to Firestore successfully')
  } catch (error) {
    res.status(500).send('Error writing data to Firestore: ' + error)
  }
})
