<script setup lang="ts">

import NavBar  from "@/components/NavBar.vue";
import Notify  from "@/components/Notify.vue";
import Article from "@/components/Article.vue";
import { ref } from "vue";

</script>

<template>
  <Article>
    <template #content>
      <div class="font"><h1 class="title"> 新加坡天天彩简介 </h1>
        <div class="form"> 来源： 新加坡天天彩发行中心</div>
        <div class="content">
          <table border="0" cellspacing="0" cellpadding="0" width="100%" class="border">
            <tbody>
            <tr>
              <td class="border">
                <div align="center" class="text-[#333]">新加坡天天彩简介</div>
              </td>
            </tr>
            <tr>
              <td class="border"><p class="text-[#333] text-[14px]">
                　新加坡天天彩是新加坡天天彩彩票发行管理中心经辦的一种奖券遊戏。奖券为一种由49个号码选取七个号码的奖券游戏，每天晚上20：00分举行搅珠(若有大彩池或在假期则会更改)。搅珠过程由新加坡华语台第一频道搅珠现场转播。<br>
                奖券彩票亦可通过电话及投注宝下注。 <br> 中奖资格及派彩 <br> 一等奖:选中六个“基本号码”+“特别号码” <br>
                二等奖:选中六个“基本号码” <br> 三等奖:选中任何五个“基本号码”+“特别号码” <br> 四等奖:选中任何五个“基本号码”
                <br> 选中任何四个“基本号码”+“特别号码” 　<br> 五等奖:选中任何四个“基本号码” <br> 选中任何三个“基本号码”+“特别号码”
                　 　<br> 六等奖:选中任何二个“基本号码”+“特别号码” <br> 选中任何一个“基本号码”+“特别号码” 　<br> 选中一个“特别号码”
              </p></td>
            </tr>
            <tr>
              <td class="border">
                <div align="center" class="text-[#333]">新加坡天天彩投注方法</div>
              </td>
            </tr>
            <tr>
              <td class="p-4 font">
                <span>
                　 复式／胆拖彩票以下两种投注方式，均可选取超过六个号码，以提高中奖机会：<br>&nbsp;&nbsp;&nbsp;&nbsp;1. 复式投注<br> &nbsp;&nbsp;&nbsp;&nbsp;你可以选取超过七个号码，其中任何七个号码的组合，均会构成单式投注。<br>
              </span>
                <table cellspacing="0" bordercolordark="#ffffff" cellpadding="8" width="98%" bordercolorlight="#cccccc"
                       border="1" class="border">
                  <tbody>
                  <tr>
                    <td colspan="2" class="STYLE6">例一</td>
                    <td colspan="2" class="STYLE6">例二</td>
                  </tr>
                  <tr>
                    <td class="STYLE6">选取号码：</td>
                    <td class="STYLE6">1 2 3 4 5 6 7</td>
                    <td class="STYLE6">选取号码：</td>
                    <td class="STYLE6">1 2 3 4 5 6 7</td>
                  </tr>
                  <tr>
                    <td class="STYLE6">搅出号码：</td>
                    <td class="STYLE6">1 2 3 4 5 7 特别号码 (6)</td>
                    <td class="STYLE6">搅出号码：</td>
                    <td class="STYLE6">1 2 3 5 6 18 特别号码 (7)</td>
                  </tr>
                  <tr>
                    <td class="STYLE6">　</td>
                    <td class="STYLE6">　</td>
                    <td class="STYLE6">　</td>
                    <td class="STYLE6">　</td>
                  </tr>
                  <tr>
                    <td class="STYLE6">中奖组合</td>
                    <td class="STYLE6">
                      <div align="center">奖项</div>
                    </td>
                    <td class="STYLE6">中奖组合</td>
                    <td class="STYLE6">
                      <div align="center">奖项</div>
                    </td>
                  </tr>
                  <tr>
                    <td class="STYLE6">1 2 3 4 5 7</td>
                    <td class="STYLE6">
                      <div align="center">一等奖</div>
                    </td>
                    <td class="STYLE6">1 2 3 5 6 (7)</td>
                    <td class="STYLE6">
                      <div align="center">二等奖</div>
                    </td>
                  </tr>
                  <tr>
                    <td class="STYLE6">1 2 3 4 5 (6)</td>
                    <td class="STYLE6">
                      <div align="center">二等奖</div>
                    </td>
                    <td class="STYLE6">1 2 3 4 5 6</td>
                    <td class="STYLE6">
                      <div align="center">三等奖</div>
                    </td>
                  </tr>
                  <tr>
                    <td class="STYLE6">1 2 3 4 (6) 7</td>
                    <td class="STYLE6">
                      <div align="center">二等奖</div>
                    </td>
                    <td class="STYLE6">1 2 3 4 5 (7)</td>
                    <td class="STYLE6">
                      <div align="center">四等奖</div>
                    </td>
                  </tr>
                  <tr>
                    <td class="STYLE6">1 2 3 5 (6) 7</td>
                    <td class="STYLE6">
                      <div align="center">二等奖</div>
                    </td>
                    <td class="STYLE6">1 3 4 5 6 (7)</td>
                    <td class="STYLE6">
                      <div align="center">四等奖</div>
                    </td>
                  </tr>
                  <tr>
                    <td class="STYLE6">1 2 4 5 (6) 7</td>
                    <td class="STYLE6">
                      <div align="center">二等奖</div>
                    </td>
                    <td class="STYLE6">1 2 4 5 6 (7)</td>
                    <td class="STYLE6">
                      <div align="center">四等奖</div>
                    </td>
                  </tr>
                  <tr>
                    <td class="STYLE6">1 3 4 5 (6) 7</td>
                    <td class="STYLE6">
                      <div align="center">二等奖</div>
                    </td>
                    <td class="STYLE6">1 2 3 4 6 (7)</td>
                    <td class="STYLE6">
                      <div align="center">四等奖</div>
                    </td>
                  </tr>
                  <tr>
                    <td class="STYLE6">2 3 4 5 (6) 7</td>
                    <td class="STYLE6">
                      <div align="center">二等奖</div>
                    </td>
                    <td class="STYLE6">2 3 4 5 6 (7)</td>
                    <td class="STYLE6">
                      <div align="center">四等奖</div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td><span class="STYLE6">　　 2. 胆拖投注<br>&nbsp;&nbsp;&nbsp;&nbsp;你亦可选取一个或更多心水幸运号码作「胆」，以减少投注数目，但你选取的「胆」必 须包括在六个搅出号码之内方可中奖。</span>
              </td>
            </tr>
            <tr>
              <td>
                <table cellspacing="0" bordercolordark="#ffffff" cellpadding="8" width="98%" bordercolorlight="#cccccc"
                       border="1" class="border">
                  <tbody>
                  <tr>
                    <td colspan="2" class="STYLE4">例一</td>
                    <td colspan="2"><span class="STYLE4">例二</span></td>
                  </tr>
                  <tr>
                    <td><span class="STYLE4">选取号码：</span></td>
                    <td><span class="font">1 2 3 4 5 6 7 (1 号作胆 )</span></td>
                    <td><span class="STYLE4">选取号码：</span></td>
                    <td><span class="STYLE4">1 2 3 4 5 6 7 (1 及 2 号作胆 )</span></td>
                  </tr>
                  <tr>
                    <td><span class="STYLE4">搅出号码：</span></td>
                    <td><span class="STYLE4">1 2 3 4 5 7 特别号码 (6)</span></td>
                    <td><span class="STYLE4">搅出号码：</span></td>
                    <td><span class="STYLE4">1 2 3 5 6 18 特别号码 (7)</span></td>
                  </tr>
                  <tr>
                    <td>　</td>
                    <td>　</td>
                    <td>　</td>
                    <td>　</td>
                  </tr>
                  <tr>
                    <td><span class="STYLE4">中奖组合</span></td>
                    <td>
                      <div align="center" class="STYLE4">奖项</div>
                    </td>
                    <td><span class="STYLE4">中奖组合</span></td>
                    <td>
                      <div align="center" class="STYLE4">奖项</div>
                    </td>
                  </tr>
                  <tr>
                    <td><span class="STYLE4">1 2 3 4 5 7</span></td>
                    <td>
                      <div align="center" class="STYLE4">一等奖</div>
                    </td>
                    <td><span class="STYLE4">1 2 3 5 6 (7)</span></td>
                    <td>
                      <div align="center" class="STYLE4">二等奖</div>
                    </td>
                  </tr>
                  <tr>
                    <td><span class="STYLE4">1 2 3 4 5 (6)</span></td>
                    <td>
                      <div align="center" class="STYLE4">二等奖</div>
                    </td>
                    <td><span class="STYLE4">1 2 3 4 5 6</span></td>
                    <td>
                      <div align="center" class="STYLE4">三等奖</div>
                    </td>
                  </tr>
                  <tr>
                    <td><span class="STYLE4">1 2 3 4 (6) 7</span></td>
                    <td>
                      <div align="center" class="STYLE4">二等奖</div>
                    </td>
                    <td><span class="STYLE4">1 2 3 4 5 (7)</span></td>
                    <td>
                      <div align="center" class="STYLE4">四等奖</div>
                    </td>
                  </tr>
                  <tr>
                    <td><span class="STYLE4">1 2 3 5 (6) 7</span></td>
                    <td>
                      <div align="center" class="STYLE4">二等奖</div>
                    </td>
                    <td><span class="STYLE4">1 2 3 4 6 (7)</span></td>
                    <td>
                      <div align="center" class="STYLE4">四等奖</div>
                    </td>
                  </tr>
                  <tr>
                    <td><span class="STYLE4">1 2 4 5 (6) 7</span></td>
                    <td>
                      <div align="center" class="STYLE4">二等奖</div>
                    </td>
                    <td><span class="STYLE4">1 2 4 5 6 (7)</span></td>
                    <td>
                      <div align="center" class="STYLE4">四等奖</div>
                    </td>
                  </tr>
                  <tr>
                    <td><span class="STYLE4">1 3 4 5 (6) 7</span></td>
                    <td>
                      <div align="center" class="STYLE4">二等奖</div>
                    </td>
                    <td>　</td>
                    <td>　</td>
                  </tr>
                  </tbody>
                </table>
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
.title {
  font-size: 24px;
  text-align: center;
  color: #7563C6;
  font-weight: bold;
  margin-bottom: 18px;
}

.form {
  font-size: 14px;
  margin-bottom: 15px;
  text-align: center;
  color: #666
}

.font {
  font-size: 14px;
  font-family: 'Microsoft YaHei', "Hack Nerd Font Mono", sans-serif;
}

td {
  padding: 16px;
  border-width: 1px;
}
</style>