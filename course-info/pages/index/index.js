// import timeZoneAPI from '../../utility/api/timezone';
import courseAPI from '../../utility/api/course';

Page({
  data: {
    buttonNgirim: false,
    showModal: false // Tambahkan ini untuk melacak status modal
  },

  buttonMencet() {
    this.setData({ 
      buttonNgirim: true,
      showModal: true // Buka modal ketika tombol di klik
    });
  },

  closeModal() {
    this.setData({
      showModal: false // Tutup modal
    });
  }
});
