export const redisConfig = {
    // 开发环境配置
    development: {
        host: '127.0.0.1',
        port: 6379,
        username: '',
        password: '',
        db: 0,
        keyPrefix: 'yinav:'
    },
    // 开发环境配置
    production: {
        host: '127.0.0.1',
        port: 6379,
        username: '',
        password: '123456789123456789',
        db: 0,
        keyPrefix: 'yinav:'
    }
}[process.env.NODE_ENV];
