const stateDefault = {
  mangSinhVien: [
    {
      maSV: 1,
      hoTen: "Nguyen Van A",
      soDienThoai: "0909",
      email: "haha@gmail.com",
    },
  ],
  svInfo: {
    id: "",
    name: "",
    tel: "",
    email: "",
  },
};
export const QLSVreducer = (state = stateDefault, action) => {
  return { ...state };
};
