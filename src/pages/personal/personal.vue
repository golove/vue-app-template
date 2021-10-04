<template>
  <div class="personcard">
    <div class="front">
      <img
        :src="
          userInfo.avatar
            ? userInfo.avatar
            : 'https://i.loli.net/2021/07/11/QGjex8blPUmSB7z.jpg'
        "
        alt="avatar"
      />
      <div class="textstyle">
        <p>
          <span class="lstyle">姓 名</span>
          <span>&nbsp;&nbsp;{{ userInfo.name }}</span>
        </p>
        <p>
          <span class="lstyle">性 别</span>
          <span>&nbsp;&nbsp;{{ userInfo.gender }}&nbsp;&nbsp;</span
          >&nbsp;&nbsp;&nbsp;
          <span class="lstyle">民 族</span>
          <span>&nbsp;&nbsp;{{ userInfo.nationality }}</span>
        </p>
        <p>
          <span class="lstyle">出 生</span>
          <span>&nbsp;&nbsp;{{ userInfo.identity.slice(6, 10) }}</span>
          <span class="lstyle">&nbsp;&nbsp;年</span>
          <span>&nbsp;&nbsp;{{ userInfo.identity.slice(10, 12) }}</span>
          <span class="lstyle">&nbsp;月</span>
          <span>&nbsp;&nbsp;{{ userInfo.identity.slice(12, 14) }}</span>
          <span class="lstyle">&nbsp;日</span>
        </p>
        <p>
          <span class="lstyle">住 址</span>&nbsp;
          <span>{{ userInfo.adress }}</span>
        </p>
        <p>
          <span class="lstyle">电 话</span>
          <span>&nbsp;&nbsp;{{ userInfo.telphone }}</span>
        </p>
        <p>
          <span class="lstyle">身 份 证</span>
          <span class="idstyle">&nbsp;{{ userInfo.identity }}</span>
        </p>
        <!-- <button class="button">submit</button> -->
      </div>
    </div>
    <!-- <div class="back textstyle">
      <span>QQ 账 号</span>
      <span ">&nbsp;&nbsp;{{ userInfo.QQ }}</span>

      <p>
        <span>微 信 账 号</span>
        <span ixin">&nbsp;&nbsp;{{ userInfo.weixin }}</span>
      </p>
      <p>
        <span>支付宝账号</span>
        <span ifubao">&nbsp;&nbsp;{{ userInfo.zhifubao }}</span>
      </p>
      <p>
        <span>银行卡账号</span>
        <span nk">&nbsp;&nbsp;{{ userInfo.bank }}</span>
      </p>
      
    </div>-->
  </div>
</template>
<script lang="ts" setup>
defineProps({
  userInfo: {
    type: Object,
    require: true,
    default: () => {},
  },
});

</script>
<style>
.personcard {
  width: 400px;
  min-width: 400px;
  height: 200px;
  min-height: 200px;
  cursor: pointer;
  overflow: hidden;
  border-radius: 15px;
  perspective: 1000px;
  position: relative;
  margin: 6px;
}
.personcard .textstyle {
  padding: 12px;
}
.personcard .textstyle p {
  font-size: 14px;
  margin: 5px;
}
.personcard .textstyle p .lstyle {
  color: rgb(0, 137, 172);
}
.personcard .textstyle p .idstyle {
  margin-top: 4px;
  font-size: 15px;
  letter-spacing: 0.5px;
  font-weight: bold;
  color: black;
}
.personcard .front {
  display: flex;
  overflow: hidden;
}
.personcard .front img {
  height: 100%;
  width: auto;
}
.personcard .front {
  backdrop-filter: blur(15px);
  background-color: rgba(238, 223, 223, 0.45);

  position: absolute;
  height: 100%;
  width: 100%;
}
</style>
