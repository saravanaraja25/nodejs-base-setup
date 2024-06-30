import { getEnv } from '../utils/env.util';

export const APPLICATION_PROPERTIES = {
  API_BASE_PATH: '/api',
  PORT: getEnv('PORT'),
  ENV: getEnv('ENVIRONMENT'),
};

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
};

export const ERROR_MESSAGES = {};
