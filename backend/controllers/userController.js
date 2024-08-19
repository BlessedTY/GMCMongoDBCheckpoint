const asyncHandler = require('express-async-handler')
const Contact = require('../models/goalModel')


//@desc Get goals
//@route GET /api/goals
//@access PRIVATE
const getUser = asyncHandler(async (req, res) => {
    const user = await Contact.find()
    res.status(200).json(user)
})


//@desc Set goal
//@route SET /api/goals
//@access PRIVATE
 const setUsers = asyncHandler(async (req, res) => {
    if(!req.body.lastName && !req.body.firstName && !req.body.email && !req.body.age) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    const users = await Contact.create({
       lastName: req.body.lastName,
       firstName: req.body.firstName,
       email: req.body.email,
       age: req.body.age
    })
    res.status(200).json(users)
})

//@desc Update goals
//@route PUT /api/goals:id
//@access PRIVATE
 const updateUser = asyncHandler(async (req, res)=> {
    const user = await Contact.findById(req.params.id)

    if(!user) {
        res.status(400)
        throw new Error('User not found')
    }

    const updateduser = await Contact.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updateduser)
})


//@desc DELETE goals
//@route Delete /api/goals:id
//@access PRIVATE
 const deleteUser = asyncHandler(async (req, res)=> {

    const goal = await Contact.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

     await Goal.findByIdAndDelete()

        res.status(200).json({ id: req.params.id })
})

module.exports = {
    getUser, setUsers, updateUser, deleteUser
}