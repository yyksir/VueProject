<template>
    <div class="list">
      <ul>
        <li class="li li1">
          <div class="com people">          
            <h2>游客1</h2>
            <input type="text" name="who" v-model="who" placeholder="游客姓名">
            <i class="iconfont">&#xe640;</i>
          </div>
          <div class="com phone">
            <h4>手机号</h4>
            <button>+86></button>
            <input type="tel" name="tel" v-model="tel" @keyup.enter="handleTel" placeholder="请填写手机号">
          </div>
          <div class="com card">
            <h6>身份证</h6>
            <input type="text" name="IdCard" @keyup.enter="handleIdCard" placeholder="请填写正确的身份证号码">   
          </div>
        </li>
        <li class="li li2">
          <div class="com people">
            <h2>游客1</h2>
            <input type="text" name="who" placeholder="游客姓名">
            <i class="iconfont">&#xe640;</i>
          </div>
          <div class="com card">
            <h6>身份证</h6>
            <input type="text" name="IdCard" placeholder="请填写正确的身份证号码">    
          </div>
        </li>       
      </ul>  
    </div>
</template>

<script>
  export default {
    name: 'OrderList',
    props: {
      arr: Array,
      default: []
    },
    data () {
      return {
        who: '',
        tel: '',
        IdCard: ''
      }
    },
    methods: {
      handleTel: function () {
        var reg1 = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/
        if (reg1.test(this.tel)) {
          console.log('成功')
        } else {
          console.log('是白')
        }
      },
      handleIdCard: function () {
        var reg2 = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/
        if (reg2.test(this.IdCard)) {
          console.log('成功')
        } else {
          console.log('是白')
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../assets/stytus/varibles.styl";
    .list
      .li1
        height: 4.35rem
      .li2
        height: 2.91rem
      .li
        margin-top: .3rem
        background: #fff
        .com
          display: flex
          height: 1.44rem
          padding: 0 .3rem 0 .3rem
          border-bottom: 1px solid #ccc
          text-align: center
          line-height: 1.44rem
          input
            outline: 0
            border:0
            width: 6rem
            font-size: .44rem
            color: red
        .people
          h2
            font-size: .4rem
            margin-right: 1.4rem
          i
            font-size: .44rem
            color: $bgColor
        .phone
          h4
            font-size: .4rem
            margin-right: 1.2rem
          button
            outline: 0
            border: 0
            margin-right: .16rem
            width: 1.17rem
            height: .75rem
            margin-top: .36rem
            border: 1px solid #ccc
        .card
          h6
            font-size: .4rem
            margin-right: 1.2rem
</style>