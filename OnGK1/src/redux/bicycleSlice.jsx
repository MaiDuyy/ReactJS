import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fetch all bicycles from API
export const fetchBicycles = createAsyncThunk(
  'bicycles/fetchBicycles',
  async () => {
    const response = await fetch('https://6710b499a85f4164ef2ee9b0.mockapi.io/bicycle');
    return await response.json();
  }
);

// Thêm xe đạp mới vào API
export const addBicycle = createAsyncThunk(
  'bicycles/addBicycle',
  async (newBicycle) => {
    const response = await fetch('https://6710b499a85f4164ef2ee9b0.mockapi.io/bicycle', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBicycle),
    });
    return await response.json();
  }
);

const bicycleSlice = createSlice({
  name: 'bicycles',
  initialState: {
    data: [],
    filteredData: [],
    status: 'idle',
    error: null,
    selectedCategory: 'All', // Mặc định là "All"
  },
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload; // Cập nhật category được chọn
    },
    filterBicycles: (state) => {
      if (state.selectedCategory === 'All') {
        state.filteredData = state.data;
      } else {
        // Lọc theo mảng categories, kiểm tra xem danh mục có tồn tại trong mảng categories của từng sản phẩm hay không
        state.filteredData = state.data.filter(item => 
          item.categories && item.categories.includes(state.selectedCategory)
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBicycles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBicycles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.filteredData = action.payload; // Đặt filteredData là dữ liệu gốc khi mới tải
      })
      .addCase(fetchBicycles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addBicycle.fulfilled, (state, action) => {
        state.data.push(action.payload);  // Thêm xe đạp mới vào data
        state.filteredData.push(action.payload); // Cập nhật dữ liệu đã lọc
      });
  },
});

export const { setCategory, filterBicycles } = bicycleSlice.actions;
export default bicycleSlice.reducer;