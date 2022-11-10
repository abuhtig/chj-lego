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
        <a href="#">广告合作</a>
        <a href="#">活动中心</a>
      </ul>
    </div>
    <div class="info">
      <p>
        <span>
          不良信息举报邮箱：378091429@qq.com |
          不良信息举报电话：010-64098588</span
        >
      </p>
      <p>
        <span
          ><a href="http://www.ah12377.cn/">安徽互联网举报中心</a> |
          <a href="http://jbts.mct.gov.cn/">12345政务服务便民热线</a> |
          <a href="mailto:378091429@qq.com">儿童色情信息举报专区</a> |
          <a href="http://www.shdf.gov.cn/shdf/channels/740.html"
            >扫黄打非举报</a
          >
        </span>
      </p>
      <p>
        <span> 网上有害信息举报专区：</span>
        <a href="https://www.12377.cn/">中国互联网违法和不良信息举报中心</a>
      </p>
      <p>
        <span>
          亲爱的市民朋友，上海警方反诈劝阻电话“96110”系专门针对避免您财产被骗受损而设，请您一旦收到来电，立即接听。
        </span>
      </p>
      <p>
        <span> ©1999-2022安徽疏影网络技术有限公司 | 电话：058-27799966 </span>
      </p>
    </div>
  </div>
</template>
<style scoped lang="less">
.footer {
  display: flex;
  justify-content: flex-end;
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
    width: 45%;
    height: 20px;
    cursor: pointer;
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
    line-height: 24px;
  }
}
</style>
