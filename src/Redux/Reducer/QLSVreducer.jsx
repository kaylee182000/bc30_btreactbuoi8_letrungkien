const stateDefault = {
  mangSinhVien: [],
  svInfo: {
    id: "",
    name: "",
    tel: "",
    email: "",
  },
  errors: {
    id: "",
    name: "",
    tel: "",
    email: "",
  },
  arrSvSearch: [],
};
export const QLSVreducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "HANDLE_CHANGE_INPUT": {
      let { id, value, pattern } = action.payload;
      let errorMess = "";
      let otherID = "";
      switch (id) {
        case "id":
          otherID = "Mã sinh viên";
          break;
        case "name":
          otherID = "Tên sinh viên";
          break;
        case "tel":
          otherID = "Số điện thoại";
          break;
        case "email":
          otherID = "Email";
          break;
      }
      // kiểm tra rỗng
      if (value === "") {
        errorMess = otherID + " không được để trống!";
      }
      //kiem tra trung id

      // kiểm tra pattern
      const regrex = new RegExp(pattern)
      if (!regrex.test(value)) {
        errorMess = otherID + " không hợp lệ!";
      }
      state.errors[id] = errorMess;
      state.svInfo[id] = value;
      state.errors = { ...state.errors };
      state.svInfo = { ...state.svInfo };

      return { ...state };
    }
    case "HANDLE_SUBMIT": {
      //buoc1 lay du lieu tu action
      let { svInfo } = action;
      //buoc2 clone state (object,array)
      let mangSinhVienUpdate = [...state.mangSinhVien];
      mangSinhVienUpdate.push(svInfo);
      //buoc3 cap nhat lai state
      state.mangSinhVien = mangSinhVienUpdate;
      return { ...state };
    }
    case "XOA_SINH_VIEN": {
      let { id } = action.payload;
      let svUpdate = [...state.mangSinhVien];
      svUpdate = svUpdate.filter((sp) => sp.id !== id);
      state.mangSinhVien = svUpdate;
      return { ...state };
    }
    case "SEARCH_NAME": {
      let { value } = action.payload;

      value = value.trim().toLowerCase();
      let arrSvUpdate = [...state.mangSinhVien];
      arrSvUpdate = arrSvUpdate.filter((sv) =>
        sv.name.trim().toLowerCase().includes(value)
      );

      state.arrSvSearch = arrSvUpdate;
      return { ...state };
    }
    default:
      return state;
  }
};
