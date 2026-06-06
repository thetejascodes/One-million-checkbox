import redis from 'ioredis'

function createRedisConnection() {
  return new redis(process.env.REDIS_URL || {
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT || 6379,
  })
}

export const redis_client = createRedisConnection()
export const publisher = createRedisConnection()
export const subscriber = createRedisConnection()