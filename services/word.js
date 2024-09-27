const Word = require('../models/word');

// 단어 생성
const createWord = async (wordData) => {
    try {
        const word = new Word(wordData);
        await word.save();
        return word;
    } catch (error) {
        throw new Error('Error creating word: ' + error.message);
    }
};

// 모든 단어 조회
const getAllWords = async () => {
    try {
        return await Word.find();
    } catch (error) {
        throw new Error('Error fetching words: ' + error.message);
    }
};

// 특정 단어 조회
const getWordById = async (wordId) => {
    try {
        return await Word.findById(wordId);
    } catch (error) {
        throw new Error('Error fetching word by ID: ' + error.message);
    }
};

// 단어 업데이트
const updateWord = async (wordId, updateData) => {
    try {
        return await Word.findByIdAndUpdate(wordId, updateData, { new: true });
    } catch (error) {
        throw new Error('Error updating word: ' + error.message);
    }
};

module.exports = {
    createWord,
    getAllWords,
    getWordById,
    updateWord,
};
