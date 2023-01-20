<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Результат: {{ totalValue }}
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col
          class="d-flex child-flex"
          cols="12"
      >
        <a
            v-if="resultImageUrl"
            :href="resultImageUrl"
            target="_blank"
        >
          <v-img
              :src="resultImageUrl"
              max-height="600"
              aspect-ratio="1"
              contain
          />
        </a>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col cols="12">
        <v-btn
            color="primary"
            :loading="uploadLoading"
            @click="handleFileTrigger"
        >
          Загрузить изображение
        </v-btn>
        <input
            ref="fileUpload"
            type="file"
            hidden
            accept="image/png, image/jpeg"
            @change="handleUpload"
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { sendImage } from '@/api';

export default {
  name: 'HelloWorld',

  data: () => ({
    uploadLoading: false,
    getImageLoading: false,
    image: null,
    resultData: null,
    resultImage: null,
    resultImageUrl: '',
    error: ''
  }),

  computed: {
    totalValue () {
      if (!this.resultData) {
        return '???'
      }

      return `${this.resultData.coins_total} руб.`;
    }
  },

  methods: {
    handleFileTrigger () {
      this.$refs.fileUpload.click();
    },

    async handleUpload (e) {
      this.image = e.target.files[0];

      const data = {
        file: this.image
      };

      this.uploadLoading = true;

      try {
        const response = await sendImage(data);
        this.resultData = response.data;
        this.resultImageUrl = `http://127.0.0.1:5000/get_image/${this.resultData.file_name}`
      } catch (e) {
        this.error = e;
        console.error(e);
      }

      this.uploadLoading = false;
    }
  }
}
</script>
