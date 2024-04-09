<template>
    <Form @submit="submitBook" :validation-schema="bookFormSchema">
        <div class="form-group">
            <label for="title">Tiêu đề</label>
            <Field name="title" type="text" class="form-control" v-model="bookLocal.title" />
            <ErrorMessage name="title" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="author">Tác giả</label>
            <Field name="author" type="text" class="form-control" v-model="bookLocal.author" />
            <ErrorMessage name="author" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="isbn">ISBN</label>
            <Field name="isbn" type="text" class="form-control" v-model="bookLocal.isbn" />
            <ErrorMessage name="isbn" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="category">Thể loại</label>
            <Field name="category" type="text" class="form-control" v-model="bookLocal.category" />
            <ErrorMessage name="category" class="error-feedback" />
        </div>
        <div class="form-group">
            <button class="btn btn-primary">Lưu</button>
            <button v-if="bookLocal.id" type="button" class="ml-2 btn btn-danger" @click="deleteBook">
                Xóa
            </button>
        </div>
    </Form>
</template>

<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    emits: ["submit:book", "delete:book"],
    props: {
        book: { type: Object, required: true }
    },
    data() {
        const bookFormSchema = yup.object().shape({
            title: yup
                .string()
                .required("Tiêu đề không được để trống.")
                .min(2, "Tiêu đề phải ít nhất 2 ký tự.")
                .max(100, "Tiêu đề có tối đa 100 ký tự."),
            author: yup
                .string()
                .required("Tác giả không được để trống.")
                .min(2, "Tác giả phải ít nhất 2 ký tự.")
                .max(50, "Tác giả có tối đa 50 ký tự."),
            isbn: yup.string().matches(/^\d{10}(\d{3})?$/, "ISBN không hợp lệ."),
            category: yup.string().max(50, "Thể loại có tối đa 50 ký tự.")
        });
        return {
            // Tạo biến cục bộ bookLocal để liên kết với các input trên form
            bookLocal: this.book,
            bookFormSchema,
        };
    },
    methods: {
        submitBook() {
            this.$emit("submit:book", this.bookLocal);
        },
        deleteBook() {
            this.$emit("delete:book", this.bookLocal.id);
        },
    },
};
</script>

<style scoped>
@import "@/assets/form.css";
</style>