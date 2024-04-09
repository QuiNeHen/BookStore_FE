<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="(book, index) in books" :key="book._id"
      :class="{ active: index === activeIndex }" @click="handleBookClick(book)">
      <div class="book-info">
        <h5>{{ book.title }}</h5>
        <p><strong>Tác giả:</strong> {{ book.author }}</p>
        <p><strong>ISBN:</strong> {{ book.isbn }}</p>
        <p><strong>Thể loại:</strong> {{ book.category }}</p>
        <!-- Thêm các thông tin khác về sách nếu cần -->
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    books: { type: Array, default: [] },
    activeIndex: { type: Number, default: -1 },
  },
  emits: ["update:activeIndex"],
  methods: {
    updateActiveIndex(index) {
      this.$emit("update:activeIndex", index);
    },
    handleBookClick(book) {
      // Thực hiện hành động khi sách được chọn, ví dụ: chuyển đến trang chi tiết sách
      // Để làm điều này, bạn có thể sử dụng route của Vue Router hoặc truy cập trực tiếp vào URL
      // Ví dụ: 
      // this.$router.push({ name: 'bookDetail', params: { id: book._id }});
      // hoặc window.location.href = `/books/${book._id}`;
      // Sau đó, có thể cập nhật activeIndex nếu cần
      // this.$emit("update:activeIndex", index);
    }
  }
};
</script>
