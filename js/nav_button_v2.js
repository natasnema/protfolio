var design
var contents = document.querySelector('.contents')
var infos = document.querySelector('.info')
var aboutme = document.querySelector('.about')
var webs = document.querySelector('.websites')
var anis = document.querySelector('.animations')
var games = document.querySelector('.boardgames')
var others = document.querySelector('.others')

// fetch('https://natasnema.github.io/protfolio/json/design.json')
fetch('./json/design.json')
    .then(function (design_response) {
        return design_response.json();
    })
    .then(function (design_myJson) {
        design = design_myJson;
        return design
    });

function navclick() {

    infos.style = "display: flex;"
    aboutme.style = "display: none;"
    webs.style = "display: none;"
    anis.style = "display: none;"
    games.style = "display: none;"
    others.style = "display: none;"

    infos.innerHTML =
        `
            <div class="info_banner">
                <div class="info_logo"></div>
            </div>

            <div class="info_nema">

                <div class="info_photo"></div>
                <div class="info_name_en">NEMA LIN</div>
                <div class="info_profession_en">Frontend Developer / Boardgame Designer / Graphic Designer / 3D
                    Animation
                </div>
                <div class="info_name_ch">林宸裕　CHEN-YU, LIN</div>
                <div class="info_profession_ch">前端工程師 / 桌遊設計 / 平面設計 / 3D動畫</div>
                <div class="info_skill">
                    HTML5 / CSS / SCSS / JavaScript / Vue<br>Illustrator / Photoshop / AfterEffects / Premiere<br>Maya /
                    Blender</div>

            </div>
    `
}

function aboutclick() {

    infos.style = "display: none;"
    aboutme.style = "display: block;"
    webs.style = "display: none;"
    anis.style = "display: none;"
    games.style = "display: none;"
    others.style = "display: none;"

    aboutme.innerHTML =
        `
            <div class="about_cat"></div>
            <div class="about_title">ABOUT ME</div>
            <div class="about_subtitle">斜斜斜槓設計師</div>
            <div class="about_content">
                我叫林宸裕，1992年生。<br>
                2014年與好友合夥登記成立了「草原遊戲設計有限公司」，<br>
                除開發桌上遊戲外，也接洽桌上遊戲設計相關商案。<br>
                還興趣使然地當了一陣子的桌遊店店長。<br>
                在人來人往的西門町協助經營一間年淨利達百萬的桌遊店。<br>
                也曾斜槓到義大利餐廳烤手工披薩、義大利麵與甜點。<br>
                2022年開始學習網頁設計與製作。<br>
                <br>
                如有以下商案需求：<br>
                桌遊相關 / 機制設計、桌遊講師、桌遊活動主持人等<br>
                平面相關 / LOGO、名片、海報、手冊及其他印刷品設計等<br>
                網站相關 / 網頁設計、網頁切版<br>
                ​或 網站、設計類公司有相關職缺 也歡迎與我聯繫：<br>
                <br>
                E-mail：natasnema@gmail<br>
                手機：+886 910 692 320
            </div>

            <div class="about_sub">
                <ul>經歷
                    <li>2010/05 畢業 於 台中第一高級中學</li>
                    <li>2015/05 畢業 於 實踐大學 媒體傳達設計學系</li>
                    <li>2014 - 2018 擔任 草原遊戲設計有限公司 設計師/業務</li>
                    <li>2015 - 2018 擔任 漫果子桌上遊戲 店長</li>
                    <li>2018 - 2020 擔任 義麵坊 廚師</li>
                    <li>2020 - 2022 擔任 六本木鍋物食堂 主廚</li>
                    <li>2022 - NOW 自由工作者</li>
                </ul>
                <ul>遊戲開發
                    <li>2014/12 桌遊　《Guja Hunt! 好獵手》 上市</li>
                    <li>2015/12 桌遊　《CrowdFun! 募樂》 嘖嘖募資成功並上市</li>
                    <li>2016/01 桌遊　《Workers! 工人危機》 上市</li>
                    <li>2017/01 與 獨家文化 合作桌遊　《伯利恆之星》發行</li>
                    <li>2017/09 與 獨家文化 合作桌遊　《五十二日》發行</li>
                    <li>2017/09 與 典華me2we 合作桌遊　《冰山美喵》發行</li>
                </ul>
                <ul>展覽活動
                    <li>2015/01 2015 臺北國際電玩展</li>
                    <li>2015/11 2015 臺南寶島桌遊來襲</li>
                    <li>2016/01 2016 臺北國際電玩展</li>
                    <li>2016/02 2016 臺北國際書展</li>
                    <li>2016/05 2016 Tokyo Game Market</li>
                    <li>2016/05 2016 臺中寶島桌遊家庭日</li>
                    <li>2017/01 2017 臺北國際電玩展</li>
                    <li>2017/02 2017 臺北國際書展</li>
                    <li>2017/02 2017 臺南寶島桌遊來襲</li>
                    <li>2018/01 2018 臺北國際電玩展</li>
                    <li>2020/10 2020 新銳桌遊設計展</li>
                </ul>
            </div>
    `
}

function webclick() {

    infos.style = "display: none;"
    aboutme.style = "display: none;"
    webs.style = "display: flex;"
    anis.style = "display: none;"
    games.style = "display: none;"
    others.style = "display: none;"

    design.web.forEach(webs => {
        websites.innerHTML +=
            `
                <div class="web_card">

                    <div class="web_name">${webs.name}</div>
                    <div class="web_info">${webs.info}</div>

                    <div class="web_img" style="background-color: ${webs.color};">
                        <a target="_blank" href="${webs.link}">
                            <div class="web_pic" style="background-image: url(${webs.img});"></div>
                        </a>
                    </div>
                </div>
            `
    });

}

function aniclick() {
    var animations = document.querySelector('.animations')
    animations.style = "display:flex;"

    // contents.innerHTML = 
    // `<section class="animations"></section>`

    // var animations = document.querySelector('.animations')

    // design.ani.forEach(anis => {
    //     animations.innerHTML +=
    //     `
    //         <div class="ani_card">

    //             <div class="ani_name">${anis.name}</div>
    //             <div class="ani_poster" style="background-image:url(${anis.poster});"></div>
    //             <div class="ani_info" style="background-image:url(${anis.info});"></div>
    //             <iframe class="ani_video" src="${anis.link}" frameborder="0"></iframe>
    //         </div>
    //     `
    // });
}

function gameclick() {
    contents.innerHTML =
        `<section class="boardgames"></section>`

    var animations = document.querySelector('.boardgames')

    design.game.forEach(games => {
        boardgames.innerHTML = +
            `
        
        `
    });
}


