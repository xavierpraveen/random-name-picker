"use client";
import axios from "axios";
const commonHeader = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const headers: {
  headers: {
    withCredentials: boolean;
    "Cache-Control": string;
  };
} = {
  headers: {
    withCredentials: true,
    "Cache-Control": "no-cache",
  },
};

export const get = async (endpoint: string, params: object | string | null) => {
  try {
    const response = await axios.get(`${endpoint}`, {
      headers: commonHeader,
      params,
    });
    return response.data;
  } catch (err: any) {
    return err.response;
  }
};

export const post = async (endpoint: string, payload: any) => {
  try {
    const response = await axios.post(`${endpoint}`, payload, {
      ...headers,
    });
    return response.data;
  } catch (err: any) {
    return err.response;
  }
};

export const put = async (endpoint: string, payload: unknown) => {
  try {
    const response = await axios.put(`${endpoint}`, payload, {
      ...headers,
    });
    return response.data;
  } catch (err) {
    return err;
  }
};
