const Story = require('../models/story');

// 이야기 생성
const createStory = async (storyData) => {
    try {
        const story = new Story(storyData);
        await story.save();
        return story;
    } catch (error) {
        throw new Error('Error creating story: ' + error.message);
    }
};

// 모든 이야기 조회
const getAllStories = async () => {
    try {
        return await Story.find();
    } catch (error) {
        throw new Error('Error fetching stories: ' + error.message);
    }
};

// 특정 이야기 조회
const getStoryById = async (storyId) => {
    try {
        return await Story.findById(storyId);
    } catch (error) {
        throw new Error('Error fetching story by ID: ' + error.message);
    }
};

// 이야기 업데이트
const updateStory = async (storyId, updateData) => {
    try {
        return await Story.findByIdAndUpdate(storyId, updateData, { new: true });
    } catch (error) {
        throw new Error('Error updating story: ' + error.message);
    }
};

module.exports = {
    createStory,
    getAllStories,
    getStoryById,
    updateStory,
};
