<template lang="html">
  <div id="docuQuote">
    <div class="literatureCon">
      <ul>
        <li>
          <p class="literTitle">引证的文献内容</p>
          <p class="literAuthor"><span>莫言</span><span>— — 《丰乳肥臀》 — —</span><span>2002(刊号)</span></p>
        </li>
        <li>
          <p class="literTitle">空间钢结构的应用和发展</p>
          <p class="literAuthor"><span>莫言</span><span>— — 《丰乳肥臀》 — —</span><span>2002(刊号)</span></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
#docuQuote .literatureCon ul li{
    border-bottom:0.01rem solid #ccc;
}
#docuQuote .literatureCon ul li .literTitle{
    font-size: .28rem;
    color: #323232;
    line-height: .7rem;
}
#docuQuote .literatureCon ul li .literAuthor{
    font-size: .2rem;
    line-height: .35rem;
    color: #b2b2b2;
    margin-bottom: 0.18rem;
}
</style>
