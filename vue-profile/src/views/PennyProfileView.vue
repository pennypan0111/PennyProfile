<script>
    import SectionTitle from '../components/SectionTitle.vue'
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Pagination, Navigation } from 'swiper/modules';
    export default {
        data() {
            return {
                Portfolio_Category:[
                    "Static Page",
                    "Static Pagewith RWD",
                    "Static Page with RWD",
                    "Figma Prototype",
                    "Figma Prototype",
                    "Figma Prototype",
                    "XXX",
                    "XXX",
                ],
                Portfolio_titles: [
                    "Space Inyaders。太空侵略者",
                    "Play One。陪玩",
                    "To Do List。代辦清單",
                    "Juice。果汁",
                    "Lucky Roulette。幸運輪盤",
                    "Wedding Story。幸福物語",
                    "Title",
                    "Title",
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
                    "自行發想打造獨特的品牌主題與風格，並透過原型設計的模擬，生動呈現品牌官網頁面的實際運行畫面",
                    "透過精心構建的原型互動設計，逼真地模擬出完整的網頁抽獎流程，事先洞察可能情境，確保開發後能呈現順暢的抽獎體驗",
                    "xx"
                ],
                Portfolio_img:[
                    "../../public/img/pixelGame.jpg",
                    "../../public/img/PlayOne.jpg",
                    "../../public/img/ToDoList.jpg",
                    "../../public/img/juice.jpg",
                    "../../public/img/Lucky_Roulette.jpg",
                    "./../public/img/wedding_story.jpg",
                    "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
                    "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
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
                dialogVisible: false,
                dialogVisible2: false,
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
                this.dialogVisible = !this.dialogVisible;
            },
            dialog_show2(){
                this.dialogVisible2 = !this.dialogVisible2;
            },
        },
        components:{
            SectionTitle,
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
                    <p class="Profile_introduce my-4">Hi！我是Penny，是一名經歷了自我覺醒後，轉職成功的UI/UX設計師，並且同時能獨立完成前端切版作業及網頁互動效果。
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
            <SectionTitle class="title-secondary" #sectionTitle>ABOUT ME</SectionTitle>
            <div class="aboutMe-content">
                畢業於靜宜大學-企業管理學系，曾任職行銷企劃，後因自我興趣使然，轉職為全職設計，主要以製作平面文宣(DM、海報)、印刷品發包、協助商品拍攝以及後續商品修圖為主。同時順應潮流的趨勢，嘗試自學影片的剪輯及後製，也曾有幸接到Youtuber影片剪輯後製的經驗。
                <br/>
                <br/>
                目前正於資展國際所開設的，互動式網站UI/UX設計師就業養成班，做為期約半年的培訓，學習過程中，對程式方面的相關領域很有興趣，期望未來能朝網頁設計師、前端工程師的道路前進。
                <br/>
                <br/>
                在這種不可避免的衝突下，我們必須解決這個問題。現在，正視UIUX 自我介紹的問題，是非常非常重要的。因為，若能夠欣賞到UIUX 自我介紹的美，相信我們一定會對UIUX 自我介紹改觀。
            </div>
        </div>
    </section>

    <section class="Experience" id="Experience">
        <div class="container">
            <SectionTitle class="title-primary" #sectionTitle>EXPERIENCE</SectionTitle>
            <el-timeline class="pb-5">

                <el-timeline-item timestamp="2022/11 - 至今" placement="top">
                    <el-card>
                        <h4>動力安全資訊股分有限公司｜前端工程師</h4>
                        <p>我還沒想內容</p>
                    </el-card>
                </el-timeline-item>

                <el-timeline-item timestamp="2022/05 - 2022/10 (資歷5個月)" placement="top">
                    <el-card>
                        <h4>資展國際｜互動式網站UI/UX設計師就業養成班</h4>
                        <p>我還沒想內容</p>
                    </el-card>
                </el-timeline-item>

                <el-timeline-item timestamp="2018/11 - 2022/05 (資歷3年6個月)" placement="top">
                    <el-card>
                        <h4>富信大飯店股份有限公司｜設計專員</h4>
                        <p>在擔任設計專員期間，主要負責製作活動專案平面文宣(海報、DM...等)，印刷物輸出發包，以及針對季節新品進行商品拍攝。並曾於同期間兼任行銷職務，將以往所學相關行銷知識與設計技能結合應用。</p>
                    </el-card>
                </el-timeline-item>

                <el-timeline-item timestamp="2017/06 - 2018/10 (資歷1年4個月)" placement="top">
                    <el-card>
                        <h4>金田餐飲股份有限公司｜行銷專員</h4>
                        <p>主要負責代理國外餐飲品牌管理，並擔任門市與進駐百貨之接洽窗口，從中學習到了專案時程的規劃，以及對外應變的溝通能力。</p>
                    </el-card>
                </el-timeline-item>

                <el-timeline-item timestamp="2016/07 - 2017/06 (資歷11個月)" placement="top">
                    <el-card>
                        <h4>喜鴻旅行社｜行銷專員</h4>
                        <p>剛進職場的第一份工作，主要發想規劃官網網頁活動企劃，並與設計部門協同製作出活動網頁，同時負責社群軟體經營、廣告投放，以及內部專案新人教育訓練講師。</p>
                    </el-card>
                </el-timeline-item>

            </el-timeline>
        </div>
    </section>

    <section class="Skills" id="Skills">
        <div class="container">
            <SectionTitle class="title-secondary" #sectionTitle>SKILLS</SectionTitle>
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
            <SectionTitle class="title-primary" #sectionTitle>PORTFOLIO</SectionTitle>
            <el-row class="pb-5">
                <div class="col-lg-4 col-md-6 col-12 pt-3 " v-for="(o, index) in 8" :key="o" :span="8">
                <el-card :body-style="{ padding: '0px' }">
                    <img :src="Portfolio_img[index]" />
                    <div style="padding: 14px">
                        <span class="text-center w-100 d-inline-block title-secondary">— {{ Portfolio_Category[index] }} —</span>
                        <p class="w-100 d-inline-block text-center title-primary font-weight-bold portfolio-card-title">{{ Portfolio_titles[index] }}</p>
                        <span class="w-100 d-inline-block text-justify">{{ Portfolio_introduce[index] }}</span>
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


    <el-dialog v-model="dialogVisible" >
        <!-- <el-carousel trigger="click" height="550px"> 
            <el-carousel-item v-for="item in dialog_photo_img" :key="item.id">
                <div class="dialog_photo_box">
                    <img :src="item.src">
                </div>
                <div>hi</div>
            </el-carousel-item>
        </el-carousel> -->

        <swiper
            :slides-per-view="1"
            :space-between="50"
            :navigation="true"
            :pagination="true"
            :modules="modules"
        >
        <swiper-slide>
            <div class="dialog_photo_box">
                <img :src="dialog_photo_img[0].src">
            </div>
            <div class="text-center dialog_photo_text">111</div>
        </swiper-slide>

        <swiper-slide>
            <div class="dialog_photo_box">
                <img :src="dialog_photo_img[1].src">
            </div>
            <div class="text-center dialog_photo_text">222</div>
        </swiper-slide>

        <swiper-slide>
            <div class="dialog_photo_box">
                <img :src="dialog_photo_img[2].src">
            </div>
            <div class="text-center dialog_photo_text">333</div>
        </swiper-slide>

        <swiper-slide>
            <div class="dialog_photo_box">
                <img :src="dialog_photo_img[3].src">
            </div>
            <div class="text-center dialog_photo_text">444</div>
        </swiper-slide>

        <swiper-slide>
            <div class="dialog_photo_box">
                <img :src="dialog_photo_img[4].src">
            </div>
            <div class="text-center dialog_photo_text">555</div>
        </swiper-slide>

    </swiper>
    </el-dialog>

    <el-dialog v-model="dialogVisible2" title="A2">

</el-dialog>

</template>

<style>

</style>