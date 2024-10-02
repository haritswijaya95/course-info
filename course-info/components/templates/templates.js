import courseAPI from '../../utility/api/course';

Component({
  mixins: [],
  data: {
    courses: [],
    filteredCourses: [],
    courseId: [],
    searchQuery: ''
  },
  props: {
    show: false,
    onClose: null
  },
  didMount() {
this.fetchDataCourses();
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    fetchDataCourses() {
      const postData = {
        "ip": "string"
      };
      
      courseAPI.GetAllcourse(postData.ip, (error, res) => {
        if (error) {
          console.error('Terjadi kesalahan:', error);
        }
        if (res) {
          console.log('Respons dari API:', res);
          this.setData({
            courses: res.data,
            filteredCourses: res.data
          });
        } else {
          console.error('Gagal mendapatkan data kursus. Respon:', res);
        }
      });
    },

    onSearch(e) {
      const query = e.detail.value.toLowerCase();
      const filtered = this.data.courses.filter(course =>
        course.name.toLowerCase().includes(query)
      );
      this.setData({
        searchQuery: query,
        filteredCourses: filtered
      });
    },

    getHalaman1(e) {
      const courseId = e.currentTarget.dataset.id;
      console.log('courseId', courseId);
      my.navigateTo({
        url: `/pages/detail/detail?courseId=${courseId}`
      });
    },

    onClose() {
      if (this.props.onClose) {
        this.props.onClose();
      }
    },
  },
});