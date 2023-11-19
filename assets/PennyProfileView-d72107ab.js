import{_ as x,o as m,c as h,P as w,N as v,S as j,a as A,b as D,r as n,d as t,e,w as o,F as y,f as E,g as i,h as T,t as u}from"./index-0e5b7d57.js";const I={},W={class:"Footer text-center"};function L(P,a){return m(),h("footer",W,"Copyright © 2023 Pan-Li-Ting. All rights reserved.")}const U=x(I,[["render",L]]),B="/PennyProfile/assets/penny-4738a635.jpg",F={data(){return{Portfolio_Category:["Static Page","Static Page with RWD","Static Page with RWD","Static Page with RWD","Figma Prototype & Component","Figma Prototype & Component","Figma Prototype & Component","Photoshop、Illustrator","Premiere"],Portfolio_titles:["Space Inyaders。太空侵略者","Play One。陪玩","Exchange Rate。幣值轉換","To Do List。代辦清單","Juice。果汁","Lucky Roulette。幸運輪盤","Wedding Story。幸福物語","平面設計","影片後製剪輯"],Portfolio_btns:["https://pennypan0111.github.io/pixel-game/pixelGame-easy.html","https://pennypan0111.github.io/gm/","https://pennypan0111.github.io/vueExchangeRate/","https://pennypan0111.github.io/vueToDoList/","https://www.figma.com/proto/DcpAyPWL1LlkZq48xhsiNa/Juice%E3%80%82%E6%9E%9C%E6%B1%81?page-id=0%3A1&type=design&node-id=1-3&viewport=755%2C414%2C0.19&t=AYNmdkgKJ5fMskN6-1&scaling=scale-down&starting-point-node-id=1%3A3&mode=design","https://www.figma.com/proto/QHDyZ7v5DxX9WdNFfhvRyh/Lucky-Roulette%E3%80%82%E5%B9%B8%E9%81%8B%E8%BC%AA%E7%9B%A4?page-id=0%3A1&node-id=339-9&starting-point-node-id=339%3A9&scaling=scale-down&mode=design&t=FVX1CXAiIeUE2iBM-1","https://www.figma.com/file/ggN15aKgkrnINy7sRJV0ed/shopping-App?type=design&node-id=0%3A1&mode=design&t=99LKG858SuYtfxlh-1"],Portfolio_introduce:["設計以復古像素風格為主的UI界面，結合JavaScript編寫遊戲互動，打造經典射擊遊戲體驗","大量運用CSS Animation動畫效果，為Switch遊戲的介紹頁面創造出生動的視覺效果，並有效地展示遊戲的特色和亮點","使用vue axios套件，串接即時匯率的Open API，設定自行輸入台幣金額，可即時轉換對應的日圓及美金","利用Vue.js的Options API寫法，建立簡單的待辦事項清單，並可執行新增、刪除、更新等操作","自行構思獨具特色的品牌主題和風格，並透過原型設計的模擬，生動地展示品牌官方網站的實際運作畫面","透過精心構建的原型互動設計，逼真地模擬出完整的網頁抽獎流程，以達到事先洞察可能情境，確保開發後能呈現順暢的抽獎體驗","善用Component功能，將重複性高的內容製作成Component，以確保整體內容的一致性，及提高設計效率","使用Adobe Photoshop、Illustrator製作平面文宣、社群廣告圖、大型輸出物及相關印刷品輸出發包等作品","自行接案，負責Youtuber、公司或企業相關的影片後期製作和剪輯等需求作品"],Portfolio_img:["/img/pixelGame.jpg","/img/PlayOne.jpg","/img/ExchangeRate.jpg","/img/ToDoList.jpg","/img/Juice.jpg","/img/Lucky_Roulette.jpg","/img/wedding_story.jpg","/img/about_design.jpg","/img/about_video.jpg"],dialog_photo_img:[{id:1,src:"/img/mockup_DM.jpg"},{id:2,src:"/img/mockup_FBAD.jpg"},{id:3,src:"/img/mockup_Logo.jpg"},{id:4,src:"/img/mockup_outdoor.jpg"},{id:5,src:"/img/mockup_output.jpg"}],currentIndex:0,itemsToShow:0,screenWidth:window.innerWidth,modules:[w,v],dialogVisible_design:!1,dialogVisible_video:!1}},mounted(){window.addEventListener("resize",this.updateScreenWidth)},beforeDestroy(){window.removeEventListener("resize",this.updateScreenWidth)},methods:{updateScreenWidth(){this.screenWidth=window.innerWidth},dialog_show(){this.dialogVisible_design=!this.dialogVisible_design},dialog_show2(){this.dialogVisible_video=!this.dialogVisible_video}},components:{SectionTitle:j,Footer:U,Swiper:A,SwiperSlide:D,Pagination:w,Navigation:v}},N=E('<section class="Profile" id="Profile"><div class="container pt-lg-5"><div class="row py-5 align-items-center"><div class="col-lg-7 col-12 Profile_imgBox pt-5 px-0"><img src="'+B+'"></div><div class="col-lg-5 col-12 pt-5"><h1 class="title-primary font-weight-bold Profile_title">關於我<br>想要應徵貴司職缺<br>的這件事</h1><p class="Profile_introduce my-4">Hi！我是Penny，在自我探索的過程中，偶然間接觸到了程式領域，而就此踏入了程式的世界。了解前端框架同時能獨立運用前端框架完成切版作業及網頁互動效果。 <br><br>如果目前為止有符合您尋才的基本需求，事不宜遲快點擊了解更多來認識我吧！ </p><div class="text-center text-lg-left"><a href="#About" class="readMore_btn px-3 py-2">了解更多</a></div></div></div></div></section>',1),M={class:"AboutMe",id:"About"},R={class:"container pb-5"},X=t("div",{class:"aboutMe-content"},[i(" 在接觸到程式領域之前，曾靠著自學設計軟體，接觸到了平面設計的相關工作，期間涉略的領域包含：平面設計、印刷發包、社群圖文等。在設計領域了解的越深入後，我理解到「設計」不僅僅是視覺上的呈現，還包括了如何為使用者提供優秀的體驗，站在消費者/使用者的立場去全盤思考，而這也是引領我進入「UI/UX設計」領域的契機。 "),t("br"),t("br"),i(" 在踏入UI/UX設計領域初期，報名參加了資展國際所開設的，互動式網站UI/UX設計師就業養成班，做為期約半年的培訓，期間學習到關於用戶研究、資訊架構、互動設計等相關領域的知識，也進一步拓展了自己的技能，從0到1自學前端框架及互動呈現並順利的在工作中實際運用。 ")],-1),J={class:"Experience",id:"Experience"},O={class:"container"},Y=t("h4",null,"動力安全資訊股分有限公司｜UIUX設計師、前端工程師",-1),G=t("p",{class:"mb-0"},"負責內部系統介面視覺優化，同時將其中使用的元件樣式制定成規範並建立成文件庫，以便加速其他專案的開發和模板化。此外，期間靠著網路資源從0到1自學Vue.js前端框架、第三方套件運用、API串接以及基礎的.Net Core Web API 建置，將公司內部原有的專案透過新學的技術進行改寫。",-1),H=t("h4",null,"資展國際(原資策會)｜互動式網站UI/UX設計師就業養成班",-1),K=t("p",{class:"mb-0"},"考量目前社會趨勢逐漸傾向於網路發展，經多方搜索資料後，主動報名參加資展國際開設的「互動式網站UI/UX設計師就業養成班」，做為期約半年的網頁設計培訓，學習過程中有與團隊合作一同開發網頁的實際協作經歷，也有獨立完成個人專案的經驗與能力。",-1),z=t("h4",null,"富信大飯店股份有限公司｜設計專員",-1),q=t("p",{class:"mb-0"},"在擔任設計專員期間，主要負責製作活動專案平面文宣(海報、DM...等)，印刷物輸出發包，以及針對季節新品進行商品拍攝。並曾於同期間兼任行銷職務，將以往所學相關行銷知識與設計技能結合應用。",-1),Q=t("h4",null,"金田餐飲股份有限公司｜行銷專員",-1),Z=t("p",{class:"mb-0"},"主要負責代理國外餐飲品牌管理，並擔任門市與進駐百貨之接洽窗口，從中學習到了專案時程的規劃，以及對外應變的溝通能力。",-1),$=t("h4",null,"喜鴻旅行社｜行銷專員",-1),tt=t("p",{class:"mb-0"},"剛進職場的第一份工作，主要發想規劃官網網頁活動企劃，並與設計部門協同製作出活動網頁，同時負責社群軟體經營、廣告投放，以及內部專案新人教育訓練講師。",-1),et={class:"Skills",id:"Skills"},ot={class:"container"},st=t("div",{class:"skill_Card px-4"},[t("div",{class:"skill_Title skill_fill"},[i("前端"),t("br"),i("技術")]),t("div",{class:"skill_Content mt-4 pt-4"},[t("p",{class:"dolt pl-4"},"HTML"),t("p",{class:"dolt pl-4"},"CSS"),t("p",{class:"dolt pl-4"},"Jquery"),t("p",{class:"dolt pl-4"},"Javascript"),t("p",{class:"dolt pl-4"},"Vue.js")])],-1),it=t("div",{class:"skill_Card px-4"},[t("div",{class:"skill_Title skill_line"},[i("設計"),t("br"),i("軟體")]),t("div",{class:"skill_Content mt-4 pt-4"},[t("p",{class:"dolt pl-4"},"Photoshop"),t("p",{class:"dolt pl-4"},"Illustrator"),t("p",{class:"dolt pl-4"},"Figma")])],-1),lt=t("div",{class:"skill_Card px-4"},[t("div",{class:"skill_Title skill_fill"},[i("版本"),t("br"),i("控制")]),t("div",{class:"skill_Content mt-4 pt-4"},[t("p",{class:"dolt pl-4"},"GitHub"),t("p",{class:"dolt pl-4"},"Git"),t("p",{class:"dolt pl-4"},"Azure DevOps")])],-1),nt=t("div",{class:"skill_Card px-4"},[t("div",{class:"skill_Title skill_line"},[i("辦公"),t("br"),i("軟體")]),t("div",{class:"skill_Content mt-4 pt-4"},[t("p",{class:"dolt pl-4"},"Word"),t("p",{class:"dolt pl-4"},"PowerPoint"),t("p",{class:"dolt pl-4"},"Excel")])],-1),ct=t("div",{class:"skill_Card px-4"},[t("div",{class:"skill_Title skill_fill"},[i("剪輯"),t("br"),i("軟體")]),t("div",{class:"skill_Content mt-4 pt-4"},[t("p",{class:"dolt pl-4"},"Premiere")])],-1),dt={class:"Portfolio",id:"Portfolio"},at={class:"container"},_t=["src"],rt={style:{padding:"14px"}},pt={class:"text-center w-100 d-inline-block title-secondary"},gt={class:"w-100 d-inline-block text-center title-primary font-weight-bold portfolio-card-title"},ut={class:"w-100 d-inline-block text-justify portfolio_introduce"},mt={class:"bottom text-center"},ht=["href","onClick"],ft={class:"dialog_photo_box"},bt=["src"],wt=t("div",{class:"text-center dialog_content_text title-primary font-weight-bold mt-2"},"《 活動宣傳DM設計 》",-1),vt=t("p",{class:"text-justify dialog_content_text"},"配合客戶需求擬定合適的主題風格與版面構圖，並將重要資訊及說明細項以層次分明的方式融入到畫面中，在講求完美的視覺呈現下同時達到宣傳DM傳遞資訊的目的。",-1),yt={class:"dialog_photo_box"},xt=["src"],Pt=t("div",{class:"text-center dialog_content_text title-primary font-weight-bold mt-2"},"《 社群圖文設計 》",-1),kt=t("p",{class:"text-justify dialog_content_text"},"考量在有限的版面空間，以及一般使用者對於廣告貼文瀏覽停留的駐足時間，設計能夠在短時間內有效地抓住使用者目光的視覺畫面，以提升廣告圖文的宣傳流量及廣告轉換效益。",-1),St={class:"dialog_photo_box"},Ct=["src"],Vt=t("div",{class:"text-center dialog_content_text title-primary font-weight-bold mt-2"},"《 Logo設計 》",-1),jt=t("p",{class:"text-justify dialog_content_text"},"「InDock 莫水文創」是一間行銷公司，將Ink(墨水)與Dock(碼頭)做結合，期許每個行銷點子都能透過一瓶瓶的墨水表達出去，而碼頭則是一個中轉站，存放著各式各樣的靈感與點子，等待需求後一一配送出去。設計上將英文開頭的i與D做結合，形成一艘帆船乘風破浪的意象，象徵每個行銷點子都能順風散播出去。",-1),At={class:"dialog_photo_box"},Dt=["src"],Et=t("div",{class:"text-center dialog_content_text title-primary font-weight-bold mt-2"},"《 大圖輸出設計 》",-1),Tt=t("p",{class:"text-justify dialog_content_text"},"擁有大型輸出設計經驗，能夠獨立完成從尺寸規格的確定、內容設計、與印刷廠商的洽談和價格協商，一直到成品驗收的全流程工作。",-1),It={class:"dialog_photo_box"},Wt=["src"],Lt=t("div",{class:"text-center dialog_content_text title-primary font-weight-bold mt-2"},"《 印刷物品設計 》",-1),Ut=t("div",{class:"text-justify dialog_content_text"},"了解印刷相關的知識，從產品設計、模擬打樣到商品驗收，擁有充分的能力與經驗應付各種印刷項目的需求。",-1),Bt=t("div",{class:"Portfolio_video_box"},[t("iframe",{src:"https://www.youtube.com/embed/Oah4tH5ua58?si=6T1LzpDJ6cOEqKOE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""})],-1),Ft=t("div",{class:"text-center dialog_content_text title-primary font-weight-bold mt-2"},"【網紅youtuber】撒醬x日初Sachiko's FirstDay x 金子半之助",-1),Nt=t("p",{class:"text-justify dialog_content_text"},"台日混血Youtuber網紅與「日本第一職人天丼：金子半之助」合作的宣傳影片，在此影片中負責其特效字卡及音效搭配等後製作業。",-1),Mt=t("div",{class:"Portfolio_video_box"},[t("iframe",{src:"https://www.youtube.com/embed/orvS2KGBhQY?si=daXIxocBaFwYlXdt",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""})],-1),Rt=t("div",{class:"text-center dialog_content_text title-primary font-weight-bold mt-2"},"【公司企業】東稻家居-地理位置&產品介紹",-1),Xt=t("p",{class:"text-justify dialog_content_text"},"將收到的影片素材和腳本，獨立完成從無到有的剪輯工作，並為影片增添特效字卡、背景音樂、運鏡特效及字幕等後期製作工作，將影片更增添其完整性。",-1);function Jt(P,a,Ot,Yt,s,f){const p=n("SectionTitle"),d=n("el-card"),_=n("el-timeline-item"),k=n("el-timeline"),l=n("swiper-slide"),g=n("swiper"),S=n("el-row"),b=n("el-dialog"),C=n("el-backtop"),V=n("Footer");return m(),h(y,null,[N,t("section",M,[t("div",R,[e(p,{class:"title-secondary font-weight-bold"},{sectionTitle:o(()=>[i("About Me")]),_:1}),X])]),t("section",J,[t("div",O,[e(p,{class:"title-primary font-weight-bold"},{sectionTitle:o(()=>[i("Experience")]),_:1}),e(k,{class:"pb-5"},{default:o(()=>[e(_,{timestamp:"2022/11 - 至今",placement:"top"},{default:o(()=>[e(d,null,{default:o(()=>[Y,G]),_:1})]),_:1}),e(_,{timestamp:"2022/05 - 2022/10 (資歷5個月)",placement:"top"},{default:o(()=>[e(d,null,{default:o(()=>[H,K]),_:1})]),_:1}),e(_,{timestamp:"2018/11 - 2022/05 (資歷3年6個月)",placement:"top"},{default:o(()=>[e(d,null,{default:o(()=>[z,q]),_:1})]),_:1}),e(_,{timestamp:"2017/06 - 2018/10 (資歷1年4個月)",placement:"top"},{default:o(()=>[e(d,null,{default:o(()=>[Q,Z]),_:1})]),_:1}),e(_,{timestamp:"2016/07 - 2017/06 (資歷11個月)",placement:"top"},{default:o(()=>[e(d,null,{default:o(()=>[$,tt]),_:1})]),_:1})]),_:1})])]),t("section",et,[t("div",ot,[e(p,{class:"title-secondary font-weight-bold"},{sectionTitle:o(()=>[i("Skills")]),_:1}),e(g,{slidesPerView:s.screenWidth>=1200?5:s.screenWidth>=992?4:s.screenWidth>=768?3:2,spaceBetween:30,modules:s.modules,pagination:{clickable:!0},class:"mySwiper pb-5"},{default:o(()=>[e(l,null,{default:o(()=>[st]),_:1}),e(l,null,{default:o(()=>[it]),_:1}),e(l,null,{default:o(()=>[lt]),_:1}),e(l,null,{default:o(()=>[nt]),_:1}),e(l,null,{default:o(()=>[ct]),_:1})]),_:1},8,["slidesPerView","modules"])])]),t("section",dt,[t("div",at,[e(p,{class:"title-primary font-weight-bold"},{sectionTitle:o(()=>[i("Portfolio")]),_:1}),e(S,{class:"pb-5"},{default:o(()=>[(m(),h(y,null,T(9,(r,c)=>t("div",{class:"col-lg-4 col-md-6 col-12 pt-3 d-flex align-self-stretch",key:r,span:9},[e(d,{"body-style":{padding:"0px"}},{default:o(()=>[t("img",{src:s.Portfolio_img[c]},null,8,_t),t("div",rt,[t("span",pt,"— "+u(s.Portfolio_Category[c])+" —",1),t("p",gt,u(s.Portfolio_titles[c]),1),t("span",ut,u(s.Portfolio_introduce[c]),1),t("div",mt,[t("a",{href:s.Portfolio_btns[c],target:"_blank",class:"btn mt-2 lookup_btn",onClick:Gt=>c===7?f.dialog_show():c===8?f.dialog_show2():null}," 查看 ",8,ht)])])]),_:2},1024)])),64))]),_:1})])]),e(b,{modelValue:s.dialogVisible_design,"onUpdate:modelValue":a[0]||(a[0]=r=>s.dialogVisible_design=r)},{default:o(()=>[e(g,{"slides-per-view":1,"space-between":50,navigation:!0,pagination:!0,modules:s.modules,class:"Portfolio_swiper_dots"},{default:o(()=>[e(l,null,{default:o(()=>[t("div",ft,[t("img",{src:s.dialog_photo_img[0].src},null,8,bt)]),wt,vt]),_:1}),e(l,null,{default:o(()=>[t("div",yt,[t("img",{src:s.dialog_photo_img[1].src},null,8,xt)]),Pt,kt]),_:1}),e(l,null,{default:o(()=>[t("div",St,[t("img",{src:s.dialog_photo_img[2].src},null,8,Ct)]),Vt,jt]),_:1}),e(l,null,{default:o(()=>[t("div",At,[t("img",{src:s.dialog_photo_img[3].src},null,8,Dt)]),Et,Tt]),_:1}),e(l,null,{default:o(()=>[t("div",It,[t("img",{src:s.dialog_photo_img[4].src},null,8,Wt)]),Lt,Ut]),_:1})]),_:1},8,["modules"])]),_:1},8,["modelValue"]),e(b,{modelValue:s.dialogVisible_video,"onUpdate:modelValue":a[1]||(a[1]=r=>s.dialogVisible_video=r)},{default:o(()=>[e(g,{"slides-per-view":1,"space-between":50,navigation:!0,pagination:!0,modules:s.modules,class:"Portfolio_swiper_dots"},{default:o(()=>[e(l,null,{default:o(()=>[Bt,Ft,Nt]),_:1}),e(l,null,{default:o(()=>[Mt,Rt,Xt]),_:1})]),_:1},8,["modules"])]),_:1},8,["modelValue"]),e(C,{right:40,bottom:60}),e(V)],64)}const Kt=x(F,[["render",Jt]]);export{Kt as default};
