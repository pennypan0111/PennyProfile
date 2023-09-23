<script>
    import SectionTitle from '../components/SectionTitle.vue'
    import Footer from '../components/Footer.vue'
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Pagination, Navigation } from 'swiper/modules';
    export default {
        data() {
            return {
                Portfolio_Category:[
                    "Static Page",
                    "Static Pagewith RWD",
                    "Static Page with RWD",
                    "Figma Prototype & Component",
                    "Figma Prototype & Component",
                    "Figma Prototype & Component",
                    "Photoshop、Illustrator",
                    "Premiere",
                ],
                Portfolio_titles: [
                    "Space Inyaders。太空侵略者",
                    "Play One。陪玩",
                    "To Do List。代辦清單",
                    "Juice。果汁",
                    "Lucky Roulette。幸運輪盤",
                    "Wedding Story。幸福物語",
                    "平面設計",
                    "影片後製剪輯",
                ],
                Portfolio_btns: [
                    "https://pennypan0111.github.io/pixel-game/pixelGame-easy.html",
                    "https://pennypan0111.github.io/gm/",
                    "https://pennypan0111.github.io/vueToDoList/",
                    "https://www.figma.com/proto/DcpAyPWL1LlkZq48xhsiNa/Juice%E3%80%82%E6%9E%9C%E6%B1%81?page-id=0%3A1&type=design&node-id=1-3&viewport=755%2C414%2C0.19&t=AYNmdkgKJ5fMskN6-1&scaling=scale-down&starting-point-node-id=1%3A3&mode=design",
                    "https://www.figma.com/proto/QHDyZ7v5DxX9WdNFfhvRyh/Lucky-Roulette%E3%80%82%E5%B9%B8%E9%81%8B%E8%BC%AA%E7%9B%A4?page-id=0%3A1&node-id=339-9&starting-point-node-id=339%3A9&scaling=scale-down&mode=design&t=FVX1CXAiIeUE2iBM-1",
                    "https://www.figma.com/file/ggN15aKgkrnINy7sRJV0ed/shopping-App?type=design&node-id=0%3A1&mode=design&t=99LKG858SuYtfxlh-1"
                ],
                Portfolio_introduce:[
                    "設計以復古像素風格為主的UI界面，結合JavaScript編寫遊戲互動，打造經典射擊遊戲體驗",
                    "大量運用CSS Animation動畫效果，為Switch遊戲的介紹頁面創造出生動的視覺效果，並有效地展示遊戲的特色和亮點",
                    "利用Vue.js的Options API寫法，建立簡單的待辦事項清單，並可執行新增、刪除、更新等操作",
                    "自行構思獨具特色的品牌主題和風格，並透過原型設計的模擬，生動地展示品牌官方網站的實際運作畫面",
                    "透過精心構建的原型互動設計，逼真地模擬出完整的網頁抽獎流程，以達到事先洞察可能情境，確保開發後能呈現順暢的抽獎體驗",
                    "善用Component功能，將重複性高的內容製作成Component，以確保整體內容的一致性，及提高設計效率",
                    "使用Adobe Photoshop、Illustrator製作平面文宣、社群廣告圖、大型輸出物及相關印刷品輸出發包等作品",
                    "自行接案，負責Youtuber、公司或企業相關的影片後期製作和剪輯等需求作品"
                ],
                Portfolio_img:[
                    "../../public/img/pixelGame.jpg",
                    "../../public/img/PlayOne.jpg",
                    "../../public/img/ToDoList.jpg",
                    "../../public/img/juice.jpg",
                    "../../public/img/Lucky_Roulette.jpg",
                    "./../public/img/wedding_story.jpg",
                    "./../public/img/about_design.jpg",
                    "./../public/img/about_video.jpg",
                ],
                dialog_photo_img:[
                    { id:1, src:'../../public/img/mockup_DM.jpg' },
                    { id:2, src:'../../public/img/mockup_FBAD.jpg' },
                    { id:3, src:'../../public/img/mockup_Logo.jpg' },
                    { id:4, src:'../../public/img/mockup_outdoor.jpg' },
                    { id:5, src:'../../public/img/mockup_output.jpg' },
                ],
                currentIndex: 0,
                itemsToShow: 0,
                screenWidth: window.innerWidth,
                modules: [Pagination, Navigation],
                dialogVisible_design: false,
                dialogVisible_video: false,
            }
        },
        mounted() {
            window.addEventListener('resize', this.updateScreenWidth);
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.updateScreenWidth);
        },
        methods:{
            updateScreenWidth() {
                this.screenWidth = window.innerWidth;
            },
            dialog_show(){
                this.dialogVisible_design = !this.dialogVisible_design;
            },
            dialog_show2(){
                this.dialogVisible_video = !this.dialogVisible_video;
            },
        },
        components:{
            SectionTitle,
            Footer,
            Swiper,
            SwiperSlide,
            Pagination,
            Navigation
        }
    };
</script>

<template>

    <section class="Profile" id="Profile">
        <div class="container pt-lg-5">
            <div class="row py-5 align-items-center">
                <div class="col-lg-7 col-12 Profile_imgBox pt-5 px-0">
                    <img src="../../public/img/penny.jpg">
                </div>
                <div class="col-lg-5 col-12 pt-5">
                    <h1 class="title-primary font-weight-bold Profile_title">關於我<br/>想要應徵貴司職缺<br/>的這件事</h1>
                    <p class="Profile_introduce my-4">Hi！我是Penny，是一名經歷了自我覺醒後，轉職成功的UI/UX設計師，並且了解前端框架同時能獨立運用前端框架完成切版作業及網頁互動效果。
                        <br/><br/>如果目前為止有符合您尋才的基本需求，事不宜遲快點擊了解更多來認識我吧！
                    </p>
                    <div class="text-center text-lg-left">
                        <a href="#About" class="readMore_btn px-3 py-2">了解更多</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="AboutMe" id="About">
        <div class="container pb-5">
            <SectionTitle class="title-secondary font-weight-bold" #sectionTitle>About Me</SectionTitle>
            <div class="aboutMe-content">

                靠著自學設計軟體，接觸到了平面設計的相關工作，期間涉略的領域包含：平面設計、印刷發包、社群圖文等。在設計領域了解的越深入後，我理解到「設計」不僅僅是視覺上的呈現，還包括了如何為使用者提供優秀的體驗，站在消費者/使用者的立場去全盤思考，而這也是引領我進入「UI/UX設計」領域的契機。
                <br/>
                <br/>
                在踏入UI/UX設計領域初期，報名參加了資展國際所開設的，互動式網站UI/UX設計師就業養成班，做為期約半年的培訓，期間學習到關於用戶研究、資訊架構、互動設計等相關領域的知識，也進一步拓展了自己的技能，從0到1自學前端框架及互動呈現並順利的在工作中實際運用。
            </div>
        </div>
    </section>

    <section class="Experience" id="Experience">
        <div class="container">
            <SectionTitle class="title-primary font-weight-bold" #sectionTitle>Experience</SectionTitle>
            <el-timeline class="pb-5">

                <el-timeline-item timestamp="2022/11 - 至今" placement="top">
                    <el-card>
                        <h4>動力安全資訊股分有限公司｜UIUX設計師、前端工程師</h4>
                        <p class="mb-0">負責內部系統介面視覺優化，同時將其中使用的元件制定成規範並建立元件庫，以便加速其他專案的開發和模板化。此外，期間靠著網路資源從0到1自學Vue.js前端框架、第三方套件運用、API串接以及基礎的.Net Core Web API 建置，將公司內部原有的專案透過新學的技術進行改寫。</p>
                    </el-card>
                </el-timeline-item>

                <el-timeline-item timestamp="2022/05 - 2022/10 (資歷5個月)" placement="top">
                    <el-card>
                        <h4>資展國際(原資策會)｜互動式網站UI/UX設計師就業養成班</h4>
                        <p class="mb-0">考量目前社會趨勢逐漸傾向於網路發展，經多方搜索資料後，主動報名參加資展國際開設的「互動式網站UI/UX設計師就業養成班」，做為期約半年的網頁設計培訓，學習過程中有與團隊合作一同開發網頁的實際協作經歷，也有獨立完成個人專案的經驗與能力。</p>
                    </el-card>
                </el-timeline-item>

                <el-timeline-item timestamp="2018/11 - 2022/05 (資歷3年6個月)" placement="top">
                    <el-card>
                        <h4>富信大飯店股份有限公司｜設計專員</h4>
                        <p class="mb-0">在擔任設計專員期間，主要負責製作活動專案平面文宣(海報、DM...等)，印刷物輸出發包，以及針對季節新品進行商品拍攝。並曾於同期間兼任行銷職務，將以往所學相關行銷知識與設計技能結合應用。</p>
                    </el-card>
                </el-timeline-item>

                <el-timeline-item timestamp="2017/06 - 2018/10 (資歷1年4個月)" placement="top">
                    <el-card>
                        <h4>金田餐飲股份有限公司｜行銷專員</h4>
                        <p class="mb-0">主要負責代理國外餐飲品牌管理，並擔任門市與進駐百貨之接洽窗口，從中學習到了專案時程的規劃，以及對外應變的溝通能力。</p>
                    </el-card>
                </el-timeline-item>

                <el-timeline-item timestamp="2016/07 - 2017/06 (資歷11個月)" placement="top">
                    <el-card>
                        <h4>喜鴻旅行社｜行銷專員</h4>
                        <p class="mb-0">剛進職場的第一份工作，主要發想規劃官網網頁活動企劃，並與設計部門協同製作出活動網頁，同時負責社群軟體經營、廣告投放，以及內部專案新人教育訓練講師。</p>
                    </el-card>
                </el-timeline-item>

            </el-timeline>
        </div>
    </section>

    <section class="Skills" id="Skills">
        <div class="container">
            <SectionTitle class="title-secondary font-weight-bold" #sectionTitle>Skills</SectionTitle>
            <swiper
                :slidesPerView="screenWidth >= 1200 ? 5 : (screenWidth >= 992 ? 4 : (screenWidth >= 768 ? 3 : 2))"
                :spaceBetween="30"
                :modules="modules"
                :pagination="{clickable: true,}"
                class="mySwiper pb-5"
            >
                <swiper-slide>
                    <div class="skill_Card px-4" >
                        <div class="skill_Title skill_fill">前端<br/>技術</div>
                        <div class="skill_Content mt-4 pt-4">
                            <p class="dolt pl-4">HTML</p>
                            <p class="dolt pl-4">CSS</p>
                            <p class="dolt pl-4">Jquery</p>
                            <p class="dolt pl-4">Javascript</p>
                            <p class="dolt pl-4">Vue.js</p>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div class="skill_Card px-4">
                        <div class="skill_Title skill_line">設計<br/>軟體</div>
                        <div class="skill_Content mt-4 pt-4">
                            <p class="dolt pl-4">Photoshop</p>
                            <p class="dolt pl-4">Illustrator</p>
                            <p class="dolt pl-4">Figma</p>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div class="skill_Card px-4">
                        <div class="skill_Title skill_fill">版本<br/>控制</div>
                        <div class="skill_Content mt-4 pt-4">
                            <p class="dolt pl-4">GitHub</p>
                            <p class="dolt pl-4">Git</p>
                            <p class="dolt pl-4">Azure DevOps</p>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div class="skill_Card px-4">
                        <div class="skill_Title skill_line">辦公<br/>軟體</div>
                        <div class="skill_Content mt-4 pt-4">
                            <p class="dolt pl-4">Word</p>
                            <p class="dolt pl-4">PowerPoint</p>
                            <p class="dolt pl-4">Excel</p>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div class="skill_Card px-4">
                        <div class="skill_Title skill_fill">剪輯<br/>軟體</div>
                        <div class="skill_Content mt-4 pt-4">
                            <p class="dolt pl-4">Premiere</p>
                        </div>
                    </div> 
                </swiper-slide>
                
            </swiper>
        </div>
    </section>

    <section class="Portfolio" id="Portfolio">
        <div class="container">
            <SectionTitle class="title-primary font-weight-bold" #sectionTitle>Portfolio</SectionTitle>
            <el-row class="pb-5">
                <div class="col-lg-4 col-md-6 col-12 pt-3 d-flex align-self-stretch" v-for="(o, index) in 8" :key="o" :span="8">
                <el-card :body-style="{ padding: '0px' }">
                    <img :src="Portfolio_img[index]" />
                    <div style="padding: 14px">
                        <span class="text-center w-100 d-inline-block title-secondary">— {{ Portfolio_Category[index] }} —</span>
                        <p class="w-100 d-inline-block text-center title-primary font-weight-bold portfolio-card-title">{{ Portfolio_titles[index] }}</p>
                        <span class="w-100 d-inline-block text-justify portfolio_introduce">{{ Portfolio_introduce[index] }}</span>
                        <div class="bottom text-center">
                            <a :href="Portfolio_btns[index]" target="_blank" class="btn mt-2 lookup_btn" 
                                @click="index === 6 ? dialog_show() : (index === 7 ? dialog_show2() : null)">
                                查看
                            </a>
                        </div>
                    </div>
                </el-card>
                </div>
            </el-row>
        </div>
    </section>

    <el-dialog v-model="dialogVisible_design" >

        <swiper
            :slides-per-view="1"
            :space-between="50"
            :navigation="true"
            :pagination="true"
            :modules="modules"
            class="Portfolio_swiper_dots"
        >
            <swiper-slide>
                <div class="dialog_photo_box">
                    <img :src="dialog_photo_img[0].src">
                </div>
                <div class="text-center dialog_content_text title-primary font-weight-bold mt-2">《 活動宣傳DM設計 》</div>
                <p class="text-justify dialog_content_text">配合客戶需求擬定合適的主題風格與版面構圖，並將重要資訊及說明細項以層次分明的方式融入到畫面中，在講求完美的視覺呈現下同時達到宣傳DM傳遞資訊的目的。</p>
            </swiper-slide>

            <swiper-slide>
                <div class="dialog_photo_box">
                    <img :src="dialog_photo_img[1].src">
                </div>
                <div class="text-center dialog_content_text title-primary font-weight-bold mt-2">《 社群圖文設計 》</div>
                <p class="text-justify dialog_content_text">考量在有限的版面空間，以及一般使用者對於廣告貼文瀏覽停留的駐足時間，設計能夠在短時間內有效地抓住使用者目光的視覺畫面，以提升廣告圖文的宣傳流量及廣告轉換效益。</p>
            </swiper-slide>

            <swiper-slide>
                <div class="dialog_photo_box">
                    <img :src="dialog_photo_img[2].src">
                </div>
                <div class="text-center dialog_content_text title-primary font-weight-bold mt-2">《 Logo設計 》</div>
                <p class="text-justify dialog_content_text">「InDock 莫水文創」是一間行銷公司，將Ink(墨水)與Dock(碼頭)做結合，期許每個行銷點子都能透過一瓶瓶的墨水表達出去，而碼頭則是一個中轉站，存放著各式各樣的靈感與點子，等待需求後一一配送出去。設計上將英文開頭的i與D做結合，形成一艘帆船乘風破浪的意象，象徵每個行銷點子都能順風散播出去。</p>
            </swiper-slide>

            <swiper-slide>
                <div class="dialog_photo_box">
                    <img :src="dialog_photo_img[3].src">
                </div>
                <div class="text-center dialog_content_text title-primary font-weight-bold mt-2">《 大圖輸出設計 》</div>
                <p class="text-justify dialog_content_text">擁有大型輸出設計經驗，能夠獨立完成從尺寸規格的確定、內容設計、與印刷廠商的洽談和價格協商，一直到成品驗收的全流程工作。</p>
            </swiper-slide>

            <swiper-slide>
                <div class="dialog_photo_box">
                    <img :src="dialog_photo_img[4].src">
                </div>
                <div class="text-center dialog_content_text title-primary font-weight-bold mt-2">《 印刷物品設計 》</div>
                <div class="text-justify dialog_content_text">了解印刷相關的知識，從產品設計、模擬打樣到商品驗收，擁有充分的能力與經驗應付各種印刷項目的需求。</div>
            </swiper-slide>

        </swiper>
    </el-dialog>

    <el-dialog v-model="dialogVisible_video">
        <swiper
            :slides-per-view="1"
            :space-between="50"
            :navigation="true"
            :pagination="true"
            :modules="modules"
            class="Portfolio_swiper_dots"
        >
            <swiper-slide>
                <div class="Portfolio_video_box">
                    <iframe src="https://www.youtube.com/embed/Oah4tH5ua58?si=6T1LzpDJ6cOEqKOE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div class="text-center dialog_content_text title-primary font-weight-bold mt-2">【網紅youtuber】撒醬x日初Sachiko's FirstDay x 金子半之助</div>
                <p class="text-justify dialog_content_text">台日混血Youtuber網紅與「日本第一職人天丼：金子半之助」合作的宣傳影片，在此影片中負責其特效字卡及音效搭配等後製作業。</p>
            </swiper-slide>

            <swiper-slide>
                <div class="Portfolio_video_box">
                    <iframe src="https://www.youtube.com/embed/orvS2KGBhQY?si=daXIxocBaFwYlXdt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div class="text-center dialog_content_text title-primary font-weight-bold mt-2">【公司企業】東稻家居-地理位置&產品介紹</div>
                <p class="text-justify dialog_content_text">將收到的影片素材和腳本，獨立完成從無到有的剪輯工作，並為影片增添特效字卡、背景音樂、運鏡特效及字幕等後期製作工作，將影片更增添其完整性。</p>
            </swiper-slide>

        </swiper>
    </el-dialog>

    <div class="backToTop">
        <a href="#Profile"><font-awesome-icon :icon="['fas', 'circle-up']" /></a>
    </div>

    <Footer></Footer>

</template>

<style>

</style>