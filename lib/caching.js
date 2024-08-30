import NodeCache from 'node-cache';
const cache = new NodeCache();

export const getCachedData = (key) => cache.get(key);
export const setCacheData = (key, value, ttl) => cache.set(key, value, ttl);