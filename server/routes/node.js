import express from 'express'

import router from './user'

// const router = express.Router()

router.get("/:id", (req, res) => {
    res.send("I will eventually return a node object with id: " + req.params.id + "!")

    // TODO: Make this route get node object from db and return it
})

export default router 

