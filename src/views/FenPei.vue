<script setup lang="ts">

import NavBar  from "@/components/NavBar.vue";
import Notify  from "@/components/Notify.vue";
import Article from "@/components/Article.vue";

const res = '分配'

</script>

<template>
  <Article>
    <template #content>
      <div class="inner">
        <h1 class="text-[24px] font-bold text-text text-center mb-4">
          新加坡天天彩奖金分配
        </h1>

        <div class="content">
          <table border="0" cellspacing="0" cellpadding="0" width="100%">
            <tbody>

            <tr>
              <td>
                <p class="STYLE6">　　新加坡天天彩规则：<br> 每期天天彩现场搅珠，从四十九号码中搅出七个号码。首六个号码称为“基本号码”，第七个号码称为“特别号码”。
                </p>
              </td>
            </tr>
            <tr>
              <td><span class="STYLE6">　　<br>
                       </span> 中奖等级：<br>
                <table cellspacing="0" bordercolordark="#ffffff" cellpadding="8" width="98%" align="center"
                       bordercolorlight="#cccccc" border="1">
                  <tbody>
                  <tr>
                    <td class="STYLE6">
                      <div align="center">一等奖</div>
                    </td>
                    <td class="STYLE6">选中六个“基本号码”+“特别号码”</td>
                  </tr>
                  <tr>
                    <td width="30%" class="STYLE6">
                      <div align="center">二等奖</div>
                    </td>
                    <td width="50%" class="STYLE6">选中六个“基本号码”</td>
                  </tr>
                  <tr>
                    <td class="STYLE6">
                      <div align="center">三等奖</div>
                    </td>
                    <td class="STYLE6">选中五个“基本号码”+“特别号码”</td>
                  </tr>
                  <tr>
                    <td class="STYLE6">
                      <div align="center">四等奖</div>
                    </td>
                    <td class="STYLE6">选中五个“基本号码”<br> 选中四个“基本号码”+“特别号码”
                    </td>
                  </tr>
                  <tr>
                    <td class="STYLE6">
                      <div align="center">五等奖</div>
                    </td>
                    <td class="STYLE6">选中四个“基本号码”<br> 选中三个“基本号码”+“特别号码”
                    </td>
                  </tr>
                  <tr>
                    <td class="STYLE6">
                      <div align="center">六等奖</div>
                    </td>
                    <td class="STYLE6">选中二个“基本号码”+“特别号码”<br> 选中一个“基本号码”+“特别号码”
                      <br> 选中一个“特别号码”
                    </td>
                  </tr>
                  </tbody>
                </table>
                <p class="STYLE6">　</p>
              </td>
            </tr>
            <tr>
              <td><span class="STYLE6">　　 </span> 投注总奖金基金分配：本期总投额52%注入本期奖池,用于中奖分配奖金。<br>
                <table cellspacing="0" bordercolordark="#ffffff" cellpadding="8" width="98%" align="center"
                       bordercolorlight="#cccccc" border="1">
                  <tbody>
                  <tr>
                    <td class="STYLE6">
                      <div align="center">首先支付固定金额的奖等</div>
                    </td>
                    <td class="STYLE6">三等奖3000、四等奖200、五等奖10、六等奖5</td>
                  </tr>
                  <tr>
                    <td width="30%" class="STYLE6">
                      <div align="center">余下的奖金基金扣除7%</div>
                    </td>
                    <td width="50%" class="STYLE6">拨入金多宝彩池</td>
                  </tr>
                  <tr>
                    <td class="STYLE6">
                      <div align="center">余下的奖金基金80%<br> 奖金基金20%
                      </div>
                    </td>
                    <td class="STYLE6">拨入一等奖奖金基金<br> 拨入二奖奖金基金
                    </td>
                  </tr>
                  </tbody>
                </table>
                <span class="STYLE6">&nbsp;&nbsp;&nbsp;&nbsp;在举行金多宝或特奖搅珠时，一个特定金额就会从金多宝彩池拨入头奖奖金基金內。金多宝搅珠会于一些特別节日举行，日期由新加坡天天彩有限公司公佈。</span>
              </td>
            </tr>
            <tr>
              <td><span class="STYLE6">　　<br>
                       </span> 投注总奖金基金分配：扣除48%用于各项费用支出。<br>
                <table cellspacing="0" bordercolordark="#ffffff" cellpadding="8" width="98%" align="center"
                       bordercolorlight="#cccccc" border="1">
                  <tbody>
                  <tr>
                    <td class="STYLE6">
                      <div align="center">奖券博彩税</div>
                    </td>
                    <td class="STYLE6">15%　政府稅收</td>
                  </tr>
                  <tr>
                    <td width="30%" class="STYLE6">
                      <div align="center">奖券基金</div>
                    </td>
                    <td width="50%" class="STYLE6">26%　用以资助各項社會福利计划</td>
                  </tr>
                  <tr>
                    <td class="STYLE6">
                      <div align="center">管理费</div>
                    </td>
                    <td class="STYLE6">7%　用作经营管理费用</td>
                  </tr>
                  </tbody>
                </table>
                <p>&nbsp;</p>
              </td>
            </tr>
            </tbody>
          </table>
        </div>

      </div>
    </template>
  </Article>
</template>

<style scoped>
table, td {
  padding: 16px;
  border-width: 1px;
}

.content {
  font-size: 14px;
  color: #333333;
  font-family: 'Microsoft YaHei', "Hack Nerd Font Mono", sans-serif;
}

</style>