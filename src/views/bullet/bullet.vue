<template>
  <article id="gallery">
    <div class="bullet-screen">
      <div class="bullets">
        <span class="comment" :style="item.style" :class="{active: item.active}" v-for="item in bullets">{{item.text}}</span>
      </div>
    </div>

  </article>
</template>
<script>

const MIN = 10; // 10%;
const MAX = 90; // 90%;


export default {
  name: 'gallery',
  data() {
    return {
      bullets: [ ],
    }
  },
  methods: {
    randomTop() {
      return Math.floor(MIN + Math.random() * (MAX - MIN));
    },
    addBullet(text) {
      let item = {
        text,
        active: false,
        style: {
          top: `${this.randomTop()}%`,
        },
      };
      this.bullets.push(item);
      setTimeout(() => {
        this.$set(item, 'active', true);
      }, 200);
    },
    mock() {
      setInterval(() => {
        this.addBullet(+new Date());
      }, 1000);
    },
  },
  beforeMount() {
    this.mock();
  },
};
</script>
<style lang="scss" scoped>
.bullet-screen {
  position: relative;
  width: 100%;
  height: 1.8rem;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  .lamp {
    width: 7.15rem;
    display: block;
    position: relative;
  }
  .bullets {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
}

.comment {
  position: absolute;
  left: 100%;
  transition: left 20s linear;
  color: #F9FDFF;
  font-size: 0.16rem;
  margin: 0.3rem;
  &.active {
    left: -200%;
  }
}
</style>
