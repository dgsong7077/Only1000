const User = require('../models/user');

// 사용자 생성
const createUser = async (userData) => {
    try {
        const user = new User(userData);
        await user.save();
        return user;
    } catch (error) {
        throw new Error('Error creating user: ' + error.message);
    }
};

// 모든 사용자 조회
const getAllUsers = async () => {
    try {
        return await User.find();
    } catch (error) {
        throw new Error('Error fetching users: ' + error.message);
    }
};

// 특정 사용자 조회
const getUserById = async (userId) => {
    try {
        return await User.findById(userId);
    } catch (error) {
        throw new Error('Error fetching user by ID: ' + error.message);
    }
};

// 사용자 업데이트
const updateUser = async (userId, updateData) => {
    try {
        return await User.findByIdAndUpdate(userId, updateData, { new: true });
    } catch (error) {
        throw new Error('Error updating user: ' + error.message);
    }
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
};
