<template>
    <transition name="el-message-fade" @after-leave="handleAfterLeave">
    <div :class="[
        'r-message',
        type? `r-message--${ type }` : '',
        center ? 'is-center' : ''
        ]" 
        v-show="visible" 
        @mouseenter="clearTimer" 
        @mouseleave="startTimer" 
        role="alert">
        <slot>
            <p  class="r-message__content">{{message}}</p>
        </slot>
         <span v-if="showClose" class="r-message__closeBtn" @click="close">x</span>
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
        min-width: 380px;
        box-sizing: border-box;
        border-radius: 4px;
        box-shadow: 0 1px 6px rgba(0,0,0,.2);
        border: 1px solid #ebeef5;
        position: fixed;
        left: 50%;
        top: 20px;
        transform: translateX(-50%);
        /* background-color: #edf2fc; */
        background-color: #fff;
        transition: opacity .3s,transform .4s;
        overflow: hidden;
        padding: 15px 15px 15px 20px;
        display: flex;
        align-items: center;
    }
    .r-message p {
        margin: 0;
    } 
    .r-message--success{
        background: #f0f9eb;
        border-color: #e1f3d8;
        color: #67c23a
    }
    .r-message--error{
        background: #ff0000;
        border-color: #ff0000;
        color:#fff;
    }
    .r-message--warning{
        background: #108ee9;
        border-color: #108ee9;
        color:#fff;
    }
    .r-message__closeBtn {
        position: absolute;
        right: 10px;
        cursor: pointer;
    }
    .is-center {
        justify-content: center;
    }
    .r-message__content {
        line-height: 1;
        font-size: 14px;
        padding: 0
    }
</style>
