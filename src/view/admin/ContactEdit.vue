<template>
    <div v-if="book" class="page">
      <h4>Hiệu chỉnh sách</h4>
      <BookForm :book="book" @submit:book="updateBook" @delete:book="deleteBook" />
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  import ContactForm from "@/components/ContactForm.vue";
  import ContactService from "@/services/contact.service";
  
  export default {
    components: {
      ContactForm,
    },
    props: {
      id: { type: String, required: true },
    },
    data() {
      return {
        book: null,
        message: "",
      };
    },
    methods: {
      async getBook(id) {
        try {
          this.book = await ContactService.get(id);
        } catch (error) {
          console.log(error);
          // Chuyển hướng đến trang NotFound và giữ URL nguyên vẹn
          this.$router.push({
            name: "notfound",
            params: {
              pathMatch: this.$route.path.split("/").slice(1)
            },
            query: this.$route.query,
            hash: this.$route.hash,
          });
        }
      },
      async updateBook(data) {
        try {
          await ContactService.update(this.book._id, data);
          this.message = "Sách được cập nhật thành công.";
        } catch (error) {
          console.log(error);
        }
      },
      async deleteBook() {
        if (confirm("Bạn có chắc muốn xóa sách này?")) {
          try {
            await ContactService.delete(this.book._id);
            this.$router.push({ name: "booklist" });
          } catch (error) {
            console.log(error);
          }
        }
      },
    },
    created() {
      this.getBook(this.id);
      this.message = "";
    },
  };
  </script>
  