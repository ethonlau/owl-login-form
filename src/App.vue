<template>
  <div id="app">
    <div class='canvas' @mousemove='updateXY'></div>
    <div class="content">
      <div class="avatar">
        <template v-if="typingPassword">
          <img class="test" src="./assets/owl_see_no_evil.png">
        </template>
        <template v-else>
          <img src="./assets/owl_focus_on_mouse.png">
          <div :class="{ 'focus' : typingEmail }" id="js-eye" :style="{ marginLeft : eyeFocusedMarginLeft + 'px' }" class="eye"></div>
        </template>
      </div>
      <div class="input-box">
        <input id="js-email-input" v-model="email" type="email"/>
        <span :class="['title', { 'has-content' : email !== '' }]">Email</span>
      </div>
      <div class="input-box">
        <input id="js-password-input" v-model="password" type="password"/>
        <span :class="['title', { 'has-content' : password !== '' }]">Password</span>
      </div>
      <button :class="{ 'has-content': ( email && password ) }" @click="confirm">Confirm</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      typingEmail: false,
      typingPassword: false,
      email: '',
      password: ''
    }
  },
  computed: {
    eyeFocusedMarginLeft () {
      if (this.email.length < 25) {
        return (this.email.length * 0.54) + 37
      } else {
        return 50
      }
    }
  },
  mounted () {
    const emailInput = document.getElementById("js-email-input")
    const passwordInput = document.getElementById("js-password-input")

    this.$nextTick(() => {
      emailInput.addEventListener("focus", () => {
        this.typingEmail = true
        document.getElementById("js-eye").style.marginLeft = this.eyeFocusedMarginLeft + 'px'
      });
      emailInput.addEventListener("blur", () => {
        this.typingEmail = false
      });
      passwordInput.addEventListener("focus", () => {
        this.typingPassword = true
      });
      passwordInput.addEventListener("blur", () => {
        this.typingPassword = false
      });
    })
  },
  methods: {
    confirm () {
      alert("🎉Congratulations!")
    },
    updateXY (event) {
      const eye = document.getElementById("js-eye")
      if (eye && !this.typingEmail) {
        this.$nextTick(() => {
          eye.style.marginLeft = (event.offsetX / window.innerWidth) * 14 + 37 + 'px'
          eye.style.marginTop = (event.offsetY / window.innerHeight) * 10 - 32 + 'px'
        })
      }
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .canvas {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .content {
    position: absolute;
    top: 45%;
    left: 50%;
    width: 0; // for not affect the mousemove event
    margin: -170px 0 0 -142px;
    text-align: center;

    $main-color: #3388FF;

    .avatar {
      position: relative;
      margin-left: 83px;

      img {
        width: 120px;
        height: 120px;
      }

      .eye {
        position: absolute;
        width: 32px;
        height: 8px;
        top: 50%;
        left: 50%;
        margin: -27px 0 0 45px;

        &:before, &:after {
          content: '';
          position: absolute;
          width: 6px;
          height: 8px;
          border-radius: 50%;
          background-color: black;
        }

        &:before {
          left: 50%;
          margin-left: -16px;
        }

        &:after {
          right: 50%;
          margin-right: -16px;
        }

        &.focus {
          margin-top: -22px !important;
        }
      }
    }

    input, button {
      display: block;
      margin: 30px auto 0;
      border-radius: 6px;
      font-size: 18px;
      outline: none;
    }

    input {
      width: 260px;
      padding: 8px 10px;
      border: 2px solid #ddd;
      transition: .2s;
      -webkit-appearance: none;
      &::-webkit-input-placeholder { color: #999; }

      &:focus {
        border-color: $main-color;
      }

      &:focus + .has-content {
        color: $main-color;
      }
    }

    .delete {
      position: absolute;
      right: 13px;
      top: 9px;
      cursor: pointer;
      color: #999;

      &:hover {
        color: #333;
      }
    }

    button {
      width: 284px;
      padding: 10px 0;
      background-color: $main-color;
      color: white;
      font-weight: bold;
      border: none;
      opacity: .4;
      pointer-events: none;

      &:hover {
        background-color: #1b70e6;
      }

      &.has-content {
        opacity: 1;
        pointer-events: auto;
        cursor: pointer;
      }
    }

    .input-box {
      position: relative;
    }

    .title {
      position: absolute;
      top: 8px;
      left: 13px;
      padding: 0 4px;
      font-size: 18px;
      color: #999;
      background-color: white;
      transition: .2s;
      pointer-events: none;

      &.has-content {
        font-size: 12px;
        font-weight: bold;
        top: -6px;
        left: 9px;
      }
    }
  }
}
</style>
