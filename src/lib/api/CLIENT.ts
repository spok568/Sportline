import createClient from 'openapi-fetch';
import type { paths } from './schema'; // укажите правильный путь к вашему schema.ts

export const CLIENT = createClient<paths>({
  baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000',
});

export const { GET, POST, PUT, PATCH, DELETE } = client;