// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  try {
    console.log('Data = ', event.body)
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello World!` }),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
