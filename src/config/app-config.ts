const config = {
    environment: process.env.environment || '',
    jwtSecret: process.env.jwt_pub_key || '',
};

export default config;
