# chatTalker
作業二 Lv2
網址: https://eddie-hao.github.io/chatTalker/

### 遭遇問題
第一次使用 OOCSS 和 SMACSS ，有些觀念還不熟悉
所以最後成品程式碼有些亂。  
一方面也不習慣html裡面的class有這麼多!

問題:  
### Q1: 請教老師/助教，在遇到客製化時，不確定已有的class 需不需要寫進去  
這部分我不曉得該怎麼判別?
  
  
例如 html  
`<nav class="container menu d-flex justify-content-between align-items-center">`  
不確定要不要把 d-flex等等css 語法直接寫在 .menu 裡面，就不用加這麼多class了  
這樣感覺`<nav class="">`裡面會乾淨一點

  
### Q2: 事先建立元件庫，僅建立有用到的Class就好嗎?  
這邊不知道怎麼斟酌，想請老師/助教給我些建議  

例如 `_space.scss` 裡面  
建立了 
.mb1{ margin-bottom: $space; } ~ .mb6{margin-bottom: $space-6;}  
和不同斷點 .mb1-md .mb1-sm .....等元件。  
但並沒有所有class都用到，元件庫會太多東西。  

採用事先建立元件庫，會耗費一些時間且不一定都會用到。  
採用邊寫邊建立元件，會一直考慮後面到底會不會用到，導致於修修改改也耗費了很多時間。


  
  
  

