<template>
    <div class="page">
      <h4>Thêm mới Sách</h4>
      <ContactForm :contact="contact" @submit:contact="createContact" />
    </div>
  </template>
  
  <script>
  import ContactForm from "@/components/ContactForm.vue";
  import ContactService from "@/services/contact.service";
  
  export default {
    components: {
      ContactForm,
    },
    data() {
      return {
        book: {
          name: "",
          price: "",
          quantity: "",
          publishYear: "",
          publisherName: "",
          publisherAddress: "",
          author: "",
        },
      };
    },
    methods: {
      async createBook(data) {
        try {
          await ContactService.create(data);
          this.$router.push({ name: "contactbook" });
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
  </script>
  