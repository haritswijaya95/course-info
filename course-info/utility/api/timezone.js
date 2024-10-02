import {
  API_BASE_URL,
  TimeZone
} from '../../config/config';

function GetTimeZoneJakarta(callback) {
  my.request({
    url: 'https://timeapi.io/api/Time/current/zone?timeZone=Asia/Jakarta',
    method: 'GET',
    dataType: 'json',
    success: (res) => {
      callback(null, res.data);
    },
    fail: (error) => {
      callback(error, null);
    }
  });
}

function GetTimeZoneAmsterdam(callback) {
  my.request({
    url: `${API_BASE_URL}${TimeZone.europe_amasterdam}`,
    method: 'GET',
    dataType: 'json',
    success: (res) => {
      callback(null, res.data);
    },
    fail: (error) => {
      callback(error, null);
    }
  });
}

export default {
  GetTimeZoneJakarta,
  GetTimeZoneAmsterdam
};