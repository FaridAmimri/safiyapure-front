/** @format */

import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api/'
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjQ0ZDdiNDA0YTdlYzExMDExY2NlOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MDM1OTcwOCwiZXhwIjoxNjgwNjE4OTA4fQ.AxubHcvJPSCmXm34i0IXdOrH-ODuUy2d-4IH9yxCMpk'

export const publicRequest = axios.create({
  baseURL: BASE_URL
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` }
})
