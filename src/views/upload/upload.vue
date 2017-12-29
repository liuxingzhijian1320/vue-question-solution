<template>
  <article id="info">

    <header class="header">
      <label class="avatar-bg">
        <div class="avatar" v-if="!previewAvatar"></div>
        <img :src="previewAvatar" class="real-photo" v-if="previewAvatar">
        <input ref="upload" id="upload" type="file" class="realfilebt" style="display: none;"
        />
      </label>
      <mt-progress v-if="!(progress==0||progress==100)" :value="progress" :bar-height="5"
        class="progress"></mt-progress>
      <label for="upload" class="title">苏州峰会form</label>
      <div class="subtitle">请上传正面免冠照片</div>
    </header>

  </article>
</template>
<script>
import axios from 'axios';
import store from 'store';
import Progress from 'mint-ui/lib/progress';
import 'mint-ui/lib/Progress/style.css';

const axiosInstance = axios.create({});

// import { MessageBox, Indicator, Progress } from 'mint-ui';
// import 'mint-ui/lib/Progress/style.css';

export default {
  name: 'test',
  data() {
    return {
      files: [], // 文件
      uploadToken: '', // 上传文件 token
      previewAvatar: '', // 页面展示的avatar
      progress: 0, // 进度条
    };
  },

  methods: {},
  async mounted() {
    let self = this;
    //页面加载 拉去token
    // let tokenRes = await this.fetch({
    //   url: '/api/sz/upToken',
    // });

    // this.uploadToken = tokenRes.data.token;
    this.uploadToken =
      'm_bQ6vCqK-1n_myddynLMQxg0rxw3YqRptv5D7_i:sfSyXKx0ffhJvBXrSz0i31kfdck=:eyJzY29wZSI6IndmYzIwMTUtMiIsImRlYWRsaW5lIjoxNTE2MjYzMjE0LCJzYXZlS2V5Ijoid2ZjMjAxN1wvJChldGFnKSQoc3VmZml4KSIsImNhbGxiYWNrVXJsIjoiaHR0cDpcL1wvd2ZjMjAxNy1hcGkud2VkZGluZ2VlLmNvbVwvYXBpXC91cGxvYWRcL2ltYWdlIiwiY2FsbGJhY2tCb2R5Ijoia2V5PSQoa2V5KSZ3PSQoaW1hZ2VJbmZvLndpZHRoKSZoPSQoaW1hZ2VJbmZvLmhlaWdodCkmZm5hbWU9JChmbmFtZSkmZnNpemU9JChmc2l6ZSkmZnR5cGU9JHt4OmZ0eXBlfSZtb2R1bGU9JHt4Om1vZHVsZX0ifQ==';
    this.$refs.upload.addEventListener('change', function() {
      //      console.log(this.files)
      var data = new FormData();
      data.append('token', self.uploadToken);
      data.append('file', this.files[0]);
      axiosInstance({
        method: 'POST',
        url: 'http://up.qiniu.com',
        data: data,
        onUploadProgress: function(progressEvent) {
          var percentCompleted = Math.round(
            progressEvent.loaded * 100 / progressEvent.total
          );
          self.progress = percentCompleted;
        },
      })
        .then(function(res) {
          let { base_url, path } = res.data;
          //页面所用字段
          self.previewAvatar = `${base_url}${path}?imageView2/1/w/154/h/154`;
          //传给后台不完整
          //self.formData.avatar = `${path}`;
        })
        .catch(function(err) {
          console.log('err', err);
        });
    });
  },
  components: {
    [Progress.name]: Progress,
  },
};
</script>
<style lang="scss" scoped>
#info {
  min-height: 100vh;
  background-color: #1a083e;
  width: 100%;
  background-size: cover;
  display: flex;
  flex-direction: column;
}
.progress {
  width: 4rem;
  margin: 0 auto;
}

.header {
  padding-top: 1rem;
  text-align: center;
  margin-bottom: 0.8rem;
  .avatar-bg {
    display: block;
    margin: 0 auto;
    width: 1.36rem;
    height: 1.36rem;
    background-color: #312152;
    border-radius: 50%;
    padding: 0.08rem;
    .avatar {
      background-image: url('./images/fake-avatar.png');
      width: 100%;
      height: 100%;
      background-size: cover;
    }
    .real-photo {
      width: 100%;
      height: 100%;
      background-size: cover;
      border-radius: 50%;
    }
  }
  .title {
    font-size: 0.28rem;
    color: #fff;
    margin-top: 0.3rem;
    display: block;
  }
  .subtitle {
    font-size: 0.28rem;
    color: rgb(118, 115, 130);
    margin-top: 0.15rem;
    position: relative;
    &:after {
      content: '';
      width: 0.1rem;
      height: 0.1rem;
      border-radius: 50%;
      background-color: rgb(118, 115, 130);
      display: block;
      position: absolute;
      left: 2.2rem;
      top: 0.15rem;
    }
    &:before {
      content: '';
      width: 0.1rem;
      height: 0.1rem;
      border-radius: 50%;
      background-color: rgb(118, 115, 130);
      display: block;
      position: absolute;
      right: 2.2rem;
      top: 0.15rem;
    }
  }
}
</style>
