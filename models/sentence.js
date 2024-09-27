const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 사용자 스키마 정의
const sentenceSchema = new Schema({
    uid: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now  // 기본값: 현재 시간
    },
    updatedAt: {
        type: Date,
        default: Date.now  // 기본값: 현재 시간
    },
    deletedAt: {
        type: Date,
        default: Date.now  // 기본값: 현재 시간
    }
});

// 모델 생성
const Sentence = mongoose.model('Sentence', sentenceSchema);

module.exports = Sentence;
