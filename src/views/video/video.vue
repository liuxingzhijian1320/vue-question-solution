<template>
  <div id="video">
    <div class="video-container"></div>
    <my-video :sources="video.sources" :options="video.options"></my-video>
  </div>
</template>
<script>
  import myVideo from 'components/video/video'
  export default {
    data () {
      return {
        video: {
          sources: [{
            src: 'http://www.iqiyi.com/c804a0dc-c02b-4e32-83bb-69f3a2cde019.mp4',
            type: 'video/mp4'
          }],
          options: {
            autoplay: true,
            volume: 0.6,
            poster: 'http://covteam.u.qiniudn.com/poster.png'
          }
        }
      }
    },
    components: {
      myVideo
    }
  }

</script>

<style lang="scss">
  #video {
    min-height: 100vh;
    width:100%;
  }
  .video-container {
    height: 100%;
    width:100%;
  }


</style>
