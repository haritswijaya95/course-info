import courseAPI from '../../utility/api/course';
Page({
  data:{
    courseId:null,
    coursesDetail:[]
  },
  onLoad(query){
    if(query.courseId){
      this.setData({
        courseId:query.courseId
      })
    }
    console.log(`Received courseId:`, this.data.courseId)
    this.fetchDetailCourse()
  },
  fetchDetailCourse(){
    const detailPost = {
      "ip": "string",
      "id": this.data.courseId
    };
    courseAPI.GetDetailCourse(detailPost.id, detailPost.ip, (error,res) => {
       if(error) {
        console.error('Terjadi kesalahan:', error);
       }
       if (res) {
        console.log('Respons dari API:', res);
        this.setData({
          coursesDetail: res.data
        });
      } else {
        console.error('Gagal mendapatkan data kursus. Respon:', res);
      }
    })
  }
})