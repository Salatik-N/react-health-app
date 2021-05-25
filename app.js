const {MongoClient} = require('mongodb')

async function start() {

    const uri="mongodb+srv://Nick:Ybrbnf56427821@cluster0.y3b83.mongodb.net/app?retryWrites=true&w=majority"

    const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true})

    try {
        await client.connect()

        await findOneListName(client)
    } catch (e) {
        console.log(`Server error`, e)
    } finally {
        await client.close()
    }
}

start().catch(console.error)

async function findOneListName(client) {
    const result = await client.db("Products").collection("Category")
    
    if (result) {
        console.log(`Connection`)
    } else {
        console.log(`Not found`)
    }
}