var imgName = ['img/starnav.jpg', 'starrySky', '戦場ヶ原',
                'img/odaiba.jpg', 'landscape', 'お台場の夜景',
                'img/inubousaki.jpg', 'starrySky', '犬吠埼の灯台',
               'img/yamanakako.jpg', 'starrySky', '山中湖からの星空',
                'img/DSC_7736.jpg', 'landscape', '目黒川の桜',
                'img/DSC_7776.jpg', 'landscape', '目黒川の桜',
                'img/DSC_7785.jpg', 'landscape', '橋から見た目黒川',
                'img/DSC_7866_01.jpg', 'starrySky', '戦場ヶ原',
                'img/DSC_7924.jpg', 'starrySky', '戦場ヶ原',
                'img/DSC_7963_00001.jpg', 'landscape', '王子駅の猫',
                'img/DSC_8027_00001_00009.jpg', 'landscape', '飛鳥山公園のアジサイ',
                'img/DSC_8149_00001.jpg', 'landscape', '飛鳥山公園のアジサイ'
               ]

window.onload = () => {
    const galary = document.getElementById('galary');
    var htmlForm = "";
    for (var i = 0; i < imgName.length; i = i + 3) {
        htmlForm += "<a href='" + imgName[i] + "' data-lightbox='star' data-title=" + imgName[i + 2] + " class='galaries'>" + imgName[i + 2] + "<img src='" + imgName[i] + "' alt='hoge画像'></a>";
    }
    //    console.log(htmlForm);
    galary.innerHTML = htmlForm;
};

function OnclickTitle() {
    
    const galary = document.getElementById('galary');
    var htmlForm = "";
    for (var i = 0; i < imgName.length; i = i + 3) {
        htmlForm += "<a href='" + imgName[i] + "' data-lightbox='star' data-title=" + imgName[i + 2] + " class='galaries'>" + imgName[i + 2] + "<img src='" + imgName[i] + "' alt='hoge画像'></a>";
    }
    galary.innerHTML = htmlForm;
    
}

function OnclickStarrySky() {
    console.log("test");
    const galary = document.getElementById('galary');
    var htmlForm = "";
    for (var i = 0; i < imgName.length; i = i + 3)
        if (imgName[i + 1] === "starrySky") {
            htmlForm += "<a href='" + imgName[i] + "' data-lightbox='star' data-title=" + imgName[i + 2] + " class='galaries'>" + imgName[i + 2] + "<img src='" + imgName[i] + "' alt='hoge画像'></a>";
        }
    galary.innerHTML = htmlForm;
}

