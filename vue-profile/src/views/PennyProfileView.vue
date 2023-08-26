<script>
    import SectionTitle from '../components/SectionTitle.vue'
    import {carousel} from 'vue-owl-carousel'
    export default {
        data() {
            return {
                Portfolio_titles: ["Play One","Pixel Game","Title 3","Title 4","Title 5","Title 6"],
                Portfolio_btns: [
                    "https://www.google.com.tw/?hl=zh_TW",
                    "https://pennypan0111.github.io/pixel-game/pixelGame-easy.html",
                    "https://tw.yahoo.com/",
                    "https://tw.yahoo.com/",
                    "https://tw.yahoo.com/",
                    "https://tw.yahoo.com/"
                ],
                Portfolio_introduce:["介紹Switch遊戲","使用Javascript呈現經典射擊遊戲","","","",""],
                Portfolio_img:[
                    "../../public/img/PlayOne.jpg",
                    "../../public/img/pixelGame.jpg",
                    "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
                    "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
                    "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
                    "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
                ],
                items: ['項目1', '項目2', '項目3', '項目4', '項目5'],
                currentIndex: 0,
                translateX: 0,
                itemsToShow: 0,
            }
        },
        methods:{
            slideLeft() {
                if (this.currentIndex > 0) {
                    // this.currentIndex--;
                    // const containerWidth = this.$refs.container.offsetWidth;
                    // this.translateX = this.currentIndex * -containerWidth // 調整滑動距離
                    this.currentIndex--;
                    const container = document.querySelector('.container'); // 替换 '.container' 为你的容器选择器
                    const containerWidth = container.offsetWidth;
                    const itemWidth = 200; // 假设每个项目的宽度是200px
                    const visibleItems = Math.floor(containerWidth / itemWidth); // 计算可见项目数量
                    this.itemsToShow = visibleItems; // 将可见项目数量存储在组件的数据中
                    this.translateX = this.currentIndex * -itemWidth;
                }
            },
            slideRight() {
                // if (this.currentIndex < this.items.length - 3) {
                //     this.currentIndex++;
                //     const containerWidth = this.$refs.container.offsetWidth;
                //     this.translateX = this.currentIndex * -containerWidth // 調整滑動距離
                // }
                if (this.currentIndex < this.items.length - this.itemsToShow) {
                    this.currentIndex++;
                    const container = document.querySelector('.container'); // 替换 '.container' 为你的容器选择器
                    const containerWidth = container.offsetWidth;
                    const itemWidth = 200; // 假设每个项目的宽度是200px
                    const visibleItems = Math.floor(containerWidth / itemWidth); // 计算可见项目数量
                    this.itemsToShow = visibleItems; // 将可见项目数量存储在组件的数据中
                    this.translateX = this.currentIndex * -itemWidth;
    }
            },
        },
        components:{
            SectionTitle,
            carousel,
        }
    };
</script>

<template>

    <section class="Profile">

    </section>

    <section class="AboutMe">
        <div class="container">
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

    <section class="Experience">
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

    <section class="Skills">
        <div class="container">
            <SectionTitle class="title-secondary" #sectionTitle>SKILLS</SectionTitle>
            <div class="carousel-container pb-5 pt-5" ref="container">
                <div class="carousel-train d-flex justify-content-around" :style="{ transform: `translateX(${translateX}px)` }" >

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

                    <div class="skill_Card px-4">
                        <div class="skill_Title skill_line">設計<br/>軟體</div>
                        <div class="skill_Content mt-4 pt-4">
                            <p class="dolt pl-4">Photoshop</p>
                            <p class="dolt pl-4">Illustrator</p>
                            <p class="dolt pl-4">Figma</p>
                        </div>
                    </div>

                    <div class="skill_Card px-4">
                        <div class="skill_Title skill_fill">版本<br/>控制</div>
                        <div class="skill_Content mt-4 pt-4">
                            <p class="dolt pl-4">GitHub</p>
                            <p class="dolt pl-4">Git</p>
                            <p class="dolt pl-4">Azure DevOps</p>
                        </div>
                    </div>

                    <div class="skill_Card px-4">
                        <div class="skill_Title skill_line">辦公<br/>軟體</div>
                        <div class="skill_Content mt-4 pt-4">
                            <p class="dolt pl-4">Word</p>
                            <p class="dolt pl-4">PowerPoint</p>
                            <p class="dolt pl-4">Excel</p>
                        </div>
                    </div>

                    <div class="skill_Card px-4">
                        <div class="skill_Title skill_fill">剪輯<br/>軟體</div>
                        <div class="skill_Content mt-4 pt-4">
                            <p class="dolt pl-4">Premiere</p>
                        </div>
                    </div>  
                    
                </div>
                <button class="btn arrow-btn arrow-left" @click="slideLeft"><font-awesome-icon icon="fa-solid fa-angle-left" /></button>
                <button class="btn arrow-btn arrow-right" @click="slideRight"><font-awesome-icon icon="fa-solid fa-angle-right" /></button>
            </div>

        </div>
    </section>

    <section class="Portfolio">
        <div class="container">
            <SectionTitle class="title-primary" #sectionTitle>PORTFOLIO</SectionTitle>
            <el-row class="pb-5">
                <div class="col-lg-4 col-md-6 col-12 pt-3" v-for="(o, index) in 6" :key="o" :span="8">
                <el-card :body-style="{ padding: '0px' }">
                    <img :src="Portfolio_img[index]" />
                    <div style="padding: 14px">
                        <p class="w-100 d-inline-block text-center title-primary font-weight-bold portfolio-card-title">{{ Portfolio_titles[index] }}</p>
                        <span class="w-100 d-inline-block text-center">{{ Portfolio_introduce[index] }}</span>
                        <div class="bottom text-center">
                            <a :href="Portfolio_btns[index]" target="_blank" class="btn mt-2 lookup_btn">查看</a>
                        </div>
                    </div>
                </el-card>
                </div>
            </el-row>
        </div>
    </section>

</template>

<style>

</style>