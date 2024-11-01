import dotenv from 'dotenv';
dotenv.config();

export const config = {
    port: process.env.PORT,
    mongoUri:process.env.MONGO_URI,
    jwtSecret:process.env.JWT_SECRET_KEY,
    jwtRefresh:process.env.JWT_REFRESH_KEY,
    tokenEx:process.env.TOKEN_EXPIRY,
    refreshTokEx:process.env.REFRESHTOKEN_EXPIRY,
}