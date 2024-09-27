// models/userModel.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 사용자 스키마 정의
const userSchema = new Schema({
    username: {
        type: String,      // 문자열 타입
        required: true,    // 필수 값
        unique: true,      // 고유 값
        trim: true         // 앞뒤 공백 제거
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,   // 소문자 변환
        match: [/.+\@.+\..+/, 'Please fill a valid email address'] // 이메일 유효성 검사
    },
    password: {
        type: String,
        required: true,
        minlength: 6       // 최소 길이 6자
    },
    createdAt: {
        type: Date,
        default: Date.now  // 기본값: 현재 시간
    },
    roles: {
        type: [String],
        enum: ['user', 'admin'],  // "user" 또는 "admin"만 허용
        default: 'user'
    }
});

userSchema.methods.comparePassword = function(candidatePassword) {
    return this.password === candidatePassword; // 단순 비교 예시 (실제로는 해싱 필요)
};


// 모델 생성
const User = mongoose.model('User', userSchema);

module.exports = User;
