import { create } from "zustand";

const useStore = create((set, get) => ({
  data: {
    name: "hello beta",
    gender: "",
    age: "",
    phone: "",
    email: "",
    address: "",
  },

  validation: {
    name: "",
    gender: "",
    age: "",
    phone: "",
    email: "",
    address: "",
  },

  updatedData: (newData) => {
    set((state) => ({
      data: {
        ...state.data,
        ...newData,
      },
    }));
  },

  validateData: () => {
    const userData = Object.entries(get().data);
    console.log("validation clicked", userData);
  },
}));

export default useStore;