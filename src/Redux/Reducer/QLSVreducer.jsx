const stateDefault = {
  mangSinhVien: [
  ],
  svInfo: {
    id: "",
    name: "",
    tel: "",
    email: "",
  },
};
export const QLSVreducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "HANDLE_CHANGE_INPUT": {
      let { id, value } = action;
      state.svInfo[id] = value;
      state.svInfo = { ...state.svInfo };
      return { ...state }; //immutable
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
      let {id} = action.payload
      let svUpdate = [...state.mangSinhVien]
      svUpdate = svUpdate.filter(sp => sp.id !== id)
      state.mangSinhVien = svUpdate
      return {...state}
    }
    default:
      return state;
  }
};
