<template>
  <transition name="r-message-fade" @after-leave="handleAfterLeave">
    <div :class="[
        'r-message',
        type? `r-message--${ type }` : '',
        center ? 'is-center' : ''
        ]" v-show="visible" @mouseenter="clearTimer" @mouseleave="startTimer" role="alert">
      <r-icon :name="iconType" :color= "iconColor" size='18px' class="r-message__icon"/>
      <slot>
        <p class="r-message__content">{{message}}</p>
      </slot>
      <r-icon title="close" name="close" :size='16' v-if="showClose" class="r-message__closeBtn" @click="close" />
    </div>
  </transition>
</template>

<script>
  const typeMap = {
    success: 'success',
    info: 'info',
    warning: 'warning',
    error: 'error'
  };
  export default {
    name: "r-message",
    data() {
      return {
        visible: false,
        message: '',
        duration: 3000,
        type: 'info',
        iconClass: '',
        customClass: '',
        onClose: null,
        showClose: false,
        closed: false,
        timer: null,
        center: false
      };
    },
    computed: {
      iconType() {
        switch(this.type) {
          case 'info':
            return 'info-circle-fill';
          case 'success':
            return 'check-circle-fill';
          case 'error':
            return 'close-circle-fill';
          case 'warning':
            return 'warning-circle-fill';
        }
      },
        iconColor() {
        switch(this.type) {
          case 'info':
            return '#108ee9';
          case 'success':
            return '#42b983';
          case 'error':
            return '#ff0000';
          case 'warning':
            return '#faad14';
        }
      }
    },
    watch: {
      closed(newVal) {
        if (newVal) {
          this.visible = false;
        }
      }
    },
    methods: {
      handleAfterLeave() {
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      },
      close() {
        this.closed = true;
        if (typeof this.onClose === 'function') {
          this.onClose(this);
        }
      },
      clearTimer() {
        clearTimeout(this.timer);
      },
      startTimer() {
        if (this.duration > 0) {
          this.timer = setTimeout(() => {
            if (!this.closed) {
              this.close();
            }
          }, this.duration);
        }
      },
      keydown(e) {
        if (e.keyCode === 27) { // esc关闭消息
          if (!this.closed) {
            this.close();
          }
        }
      }
    },
    mounted() {
      this.startTimer();
      document.addEventListener('keydown', this.keydown);
    },
    beforeDestroy() {
      document.removeEventListener('keydown', this.keydown);
    }
  };

</script>

<style scoped>
  .r-message {
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, .15);
    border: 1px solid #ebeef5;
    position: fixed;
    left: 50%;
    top: 20px;
    transform: translateX(-50%);
    /* background-color: #edf2fc; */
    background-color: #fff;
    transition: all .3s;
    overflow: hidden;
    padding: 15px 15px 15px 20px;
    display: flex;
    align-items: center;
    z-index: 9999;
  }

  .r-message p {
    margin: 0;
  }

  .r-message--success {
    /* background: #f0f9eb;
    border-color: #e1f3d8;
    color: #67c23a */

        background: #fff;
    border-color: #fff;
  }

  .r-message--error {
    /* background: #ff0000;
    border-color: #ff0000;
    color: #fff; */

            background: #fff;
    border-color: #fff;
  }

  .r-message--warning {
    /* background: #108ee9;
    border-color: #108ee9;
    color: #fff; */
                background: #fff;
    border-color: #fff;
  }

  .r-message__closeBtn {
    cursor: pointer;
    margin-left: 15px;
  }

  /* .is-center {
    justify-content: center;
  } */

  .r-message__content {
    line-height: 1;
    font-size: 14px;
    padding-left: 20px;
  }

  .r-message-fade-enter,
  .r-message-fade-leave-active {
    opacity: 0;
    transform: translate(-50%, -100%);
  }
  .r-message__icon {
    position: absolute;
    left: 10px;
  }
  /* .is-center .r-message__icon {
    position: relative;
  } */

</style>
