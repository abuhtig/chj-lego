<script setup lang="ts"></script>
<template>
  <div class="footer">
    <div class="link">
      <ul>
        <a href="#">关于我们</a>
        <a href="#">联系我们</a>
        <a href="#">用户协议</a>
        <a href="#">加入我们</a>
        <a href="#">友情链接</a>
        <a href="#">隐私政策</a>
      </ul>
    </div>
    <div class="info">
      <p>
        <span> 不良信息举报邮箱：378091429@qq.com </span>
      </p>
      <p>
        <span>
          安徽互联网举报中心 | 12345政务服务便民热线 | 儿童色情信息举报专区 |
          扫黄打非举报
        </span>
      </p>
      <p>
        <span>
          网上有害信息举报专区：中国互联网违法和不良信息举报中心
          亲爱的市民朋友，上海警方反诈劝阻电话“96110”系专门针对避免您财产被骗受损而设，请您一旦收到来电，立即接听。
        </span>
      </p>
      <p>
        公司名称：安徽疏影科技有限公司|公司地址：合肥市高新区习有路85号|电话：058-27799966
      </p>
    </div>
  </div>
</template>
<style scoped lang="less">
.footer {
  display: flex;
  justify-content: center;
  font-size: 12px;
  background-color: #f6f9fa;
  padding: 30px 0;
  min-width: 999px;
}
.link {
  min-width: 80px;
  a {
    display: inline-block;
    margin-top: 10px;
    width: 50%;
    height: 20px;
    cursor: pointer;
  }
  a:hover {
    text-decoration: none;
    color: #13a2d1;
  }
}
.info {
  width: 60%;
  display: flex;
  flex-direction: column;
  color: #999;
  span {
    margin-right: 15px;
    display: inline-block;
    line-height: 22px;
  }
}
</style>
