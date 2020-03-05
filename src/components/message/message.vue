<template>
  <transition name="message">
    <div class="message" v-show="show">
      <img src="../../assets/img/error.png" alt v-if="type == 'fail'" />
      <img src="../../assets/img/right.png" alt v-if="type == 'success'" />
      <span class="text">{{text}}</span>
    </div>
  </transition>
</template>

<script>
export default {
  name: "message",
  props: {
    type: {
      type: String,
      default: "info"
    },
    text: {
      type: String,
      default: ""
    },
    show: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
    .message-enter-active,
    .message-leave-active {
        transition: all .7s;
        transform: translateY(0)
    }

    .message-enter,
    .message-leave-to

    /* .fade-leave-active below version 2.1.8 */
        {
        opacity: 0;
        transform: translateY(100px)
    }

.message {
  height: 40px;
  padding: 0 30px;
  width: fit-content;
  display: flex;
  align-items: center;
  box-shadow: 0 0 5px #dedede;
  border-radius: 5px;
  background: #fff;
  z-index: 9999;
  margin: 0 auto;
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
  font-size: 12px;
  font-family: s;
}
img {
  height: 16px;
  width: 16px;
}
.text {
  margin-left: 5px;
}
</style>