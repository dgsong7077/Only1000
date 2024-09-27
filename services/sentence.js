const Sentence = require('../models/sentence');

// 문장 생성
const createSentence = async (sentenceData) => {
    try {
        const sentence = new Sentence(sentenceData);
        await sentence.save();
        return sentence;
    } catch (error) {
        throw new Error('Error creating sentence: ' + error.message);
    }
};

// 모든 문장 조회
const getAllSentences = async () => {
    try {
        return await Sentence.find();
    } catch (error) {
        throw new Error('Error fetching sentences: ' + error.message);
    }
};

// 특정 문장 조회
const getSentenceById = async (sentenceId) => {
    try {
        return await Sentence.findById(sentenceId);
    } catch (error) {
        throw new Error('Error fetching sentence by ID: ' + error.message);
    }
};

// 문장 업데이트
const updateSentence = async (sentenceId, updateData) => {
    try {
        return await Sentence.findByIdAndUpdate(sentenceId, updateData, { new: true });
    } catch (error) {
        throw new Error('Error updating sentence: ' + error.message);
    }
};

module.exports = {
    createSentence,
    getAllSentences,
    getSentenceById,
    updateSentence,
};
