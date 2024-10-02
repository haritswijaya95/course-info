import course from '../../utility/api/course';
import courseAPI from '../../utility/api/course';

Component({
  mixins: [],
  data: {
  },
  props: {},
  didMount() {
    // this.fetchDetailCourse();
  },
  // didUpdate(prevProps, prevData) {
  //   if (prevData.id !== this.data.id) {
  //     this.fetchDetailCourse();
  //   }
  // },
  didUnmount() {},
  methods: {
    // fetchDetailCourse() {
    //   if (!this.data.id) {
    //     return;
    //   }
    //   const detailPost = {
    //     "ip": "string",  // Ensure the IP is correct
    //     "id": this.data.id
    //   };

    //   courseAPI.GetDetailCourse(detailPost.id, detailPost.ip, (error, res) => {
    //     if (error) {
    //       console.error('Error occurred:', error);
    //       return;
    //     }
    //     if (res && res.data) {
    //       console.log('Response from API:', res);
    //       this.setData({
    //         coursesDetail: res.data
    //       });
    //     } else {
    //       console.error('Failed to get course data. Response:', res);
    //     }
    //   });
    // }
  }
});