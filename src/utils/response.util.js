import { HTTP_STATUS } from '../constants/common.constants';

const response = (res, status, message, data) => {
  return res.status(status).json({
    status,
    message,
    data: data || null,
  });
};

const success = (res, message, data) => {
  return response(res, HTTP_STATUS.OK, message, data);
};

const notFound = (res, message, data) => {
  return response(res, HTTP_STATUS.NOT_FOUND, message, data);
};

const badRequest = (res, message, data) => {
  return response(res, HTTP_STATUS.BAD_REQUEST, message, data);
};

const created = (res, message, data) => {
  return response(res, HTTP_STATUS.CREATED, message, data);
};

const noContent = (res, message, data) => {
  return response(res, HTTP_STATUS.NO_CONTENT, message, data);
};

const internalServerError = (res, message, data) => {
  return response(res, HTTP_STATUS.INTERNAL_SERVER_ERROR, message, data);
};

const unauthorized = (res, message, data) => {
  return response(res, HTTP_STATUS.UNAUTHORIZED, message, data);
};

const forbidden = (res, message, data) => {
  return response(res, HTTP_STATUS.FORBIDDEN, message, data);
};

export const responseUtil = {
  success,
  notFound,
  badRequest,
  created,
  noContent,
  internalServerError,
  unauthorized,
  forbidden,
};
