<template>
  <div id="video">

    <video
      :src="src"
      type="video/mp4"
      controls
      ref="videoREF"
      class="video-list"
      preload="auto"

      webkit-playsinline
      playsinline="true"
      x-webkit-airplay="allow"
      x5-video-player-type="h5"
      x5-video-player-fullscreen="false"
      x5-video-orientation="portraint"
      style="object-fit:fill"
    ></video>

    <h2 class="h2">参数介绍：</h2>
    <ul class="introduce">
      <li><span class="red">autoplay</span>: 如果出现该属性，则视频在就绪后马上播放。</li>
      <li><span class="red">height，width</span>: 视屏宽度，高度。</li>
      <li><span class="red">loop</span>: 如果出现该属性，则当媒介文件完成播放后再次开始播放。</li>
      <li><span class="red">muted</span>: 规定视频的音频输出应该被静音。</li>
      <li><span class="red">poster</span>: 规定视频下载时显示的图像，或者在用户点击播放按钮前显示的图像。</li>
      <li><span class="red">preload</span>: 如果出现该属性，则视频在页面加载时进行加载，并预备播放。如果使用 "autoplay"，则忽略该属性。</li>
      <li><span class="red">src</span>: 要播放的视频的 URL。</li>
      <li><span class="red">style="object-fit:fill"</span>: 加这个style会让 Android / web 的视频在微信里的视频全屏，如果是在手机上预览，会让视频的封面同视频一样大小
      </li>
      <li><span class="red">x5-video-player-type="h5"</span>: 启用H5播放器,是wechat安卓版特性</li>
      <li><span class="red">x5-video-player-fullscreen="true"</span>: 全屏设置，设置为 true 是防止横屏</li>
      <li><span class="red">webkit-playsinline/playsinline="true"</span>: webview中用html5的video方式播放视频时，在ipad上是默认原来大小的，而在iphone上是默认全屏播放的。
视频播放时局域播放，不脱离文档流 。但是这个属性比较特别， 需要嵌入网页的APP比如WeChat中UIwebview 的allowsInlineMediaPlayback = YES webview.allowsInlineMediaPlayback = YES，才能生效。换句话说，如果APP不设置，你页面中加了这标签也无效，这也就是为什么安卓手机WeChat 播放视频总是全屏，因为APP不支持playsinline，而ISO的WeChat却支持。

      </li>
    </ul>

  </div>
</template>
<script>
  export default {
    data () {
      return {
        src: 'http://vjs.zencdn.net/v/oceans.mp4',
        video: '',
        duration: ''
      }
    },
    methods: {
      videoMethod(video){
        //touch play
        video.addEventListener('touchstart', () => {
          video.play()
        })
        //await 2s play
        setTimeout(() => {
          video.play()
        }, 2000)
        document.addEventListener("WeixinJSBridgeReady", function () {
          video.play();
          video.pause();
        }, false);

        //进入全屏
        /*       video.addEventListener("x5videoenterfullscreen", function(){
         window.onresize = function(){
         video.style.width = window.innerWidth + "px";
         video.style.height = window.innerHeight + "px";
         }
         })

         //退出全屏
         video.addEventListener("x5videoexitfullscreen", function(){
         window.onresize = function(){
         video.style.width = 原尺寸;
         video.style.height = 原尺寸;
         }
         })

         */
        //获取视屏时长
        video.addEventListener('durationchange', (e) => {
          console.info('duration', e.target.buffered)
          this.duration = e.target.duration;
        })


      }
    },
    mounted(){
      this.video = this.$refs.videoREF;
      this.videoMethod(this.video)
    },
    computed: {

    }
  }

</script>

<style lang="scss">
  #video {
    min-height: 100vh;
    width: 100%;
    background-color: #dfdfdf;
  }

  .video-list {
    width: 100%;
  }

  .h2 {
    margin: 0.5rem 0;
    text-align: center;

  }

  .introduce {
    padding: 0 0.2rem;
    li {
      margin-bottom: 0.3rem;
      line-height: 1.5;
      .red {
        color: red;
      }
    }
  }
</style>
