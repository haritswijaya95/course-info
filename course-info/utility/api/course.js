import {
  API_BASE_URL,
  courses
} from '../../config/config';

function GetAllcourse(ip, callback) {
  console.log(`${API_BASE_URL}${courses.all_courses}`)
  my.request({
    url: `${API_BASE_URL}${courses.all_courses}`,
    method: 'POST', 
    data:{
      "ip" : ip
    },
    dataType: 'json',
    success: (res) => {
      callback(null, res);
    },
    fail: (error) => {
      callback(error, null);
    }
  });
}

function GetDetailCourse(id, ip, callback){
  console.log(`${API_BASE_URL}${courses.course_detail}`)
  my.request({
    url:`${API_BASE_URL}${courses.course_detail}`,
    method:'POST',
    data:{
      'ip': ip,
      "id": parseInt(id)
    },
    dataType:'json',
    success:(res) =>{
      callback(null,res);
    },
    fail:(error) =>{
      callback(error,null);
    }
  })
}

export default {GetAllcourse, GetDetailCourse}