const express = require("express")
const ldapSearch = require("./ldapSearch")

const app = express()

app.get("/", (req, res) => {
  return res.send({
    ok: true,
    date: new Date()
  })
})

app.get("/users", async (req, res) => {
  const {
    search
  } = req.query
  try {
    const users = await ldapSearch(search)
    return res.send({
      users
    })
  } catch (error) {
    return res.send({
      ok: false,
      message: error.message
    })
  }
})

app.listen(process.env.PORT || 3000, error => {
  if (error) {
    console.error(error.message)
  }
  console.log("server on @ http://localhost:3000")
})