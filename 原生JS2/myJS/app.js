let sourceData = [{
    product: "手机",
    region: "华东",
    sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]
}, {
    product: "手机",
    region: "华北",
    sale: [80, 70, 90, 110, 130, 145, 150, 160, 170, 185, 190, 200]
}, {
    product: "手机",
    region: "华南",
    sale: [220, 200, 240, 250, 260, 270, 280, 295, 310, 335, 355, 380]
}, {
    product: "笔记本",
    region: "华东",
    sale: [50, 60, 80, 110, 30, 20, 70, 30, 420, 30, 20, 20]
}, {
    product: "笔记本",
    region: "华北",
    sale: [30, 35, 50, 70, 20, 15, 30, 50, 710, 130, 20, 20]
}, {
    product: "笔记本",
    region: "华南",
    sale: [80, 120, 130, 140, 70, 75, 120, 90, 550, 120, 110, 100]
}, {
    product: "智能音箱",
    region: "华东",
    sale: [10, 30, 4, 5, 6, 5, 4, 5, 6, 5, 5, 25]
}, {
    product: "智能音箱",
    region: "华北",
    sale: [15, 50, 15, 15, 12, 11, 11, 12, 12, 14, 12, 40]
}, {
    product: "智能音箱",
    region: "华南",
    sale: [10, 40, 10, 6, 5, 6, 8, 6, 6, 6, 7, 26]
}];


var oSel = document.getElementById('region-select');
var oSelP = document.getElementById('product-select');
var oTr = document.getElementsByTagName('tr')[0];
var oTbody = document.getElementsByTagName('tbody')[0];
var oThead = document.getElementsByTagName('thead')[0];
var oDiv1 = document.getElementById('region-radio-wrapper');
var oDiv2 = document.getElementById('product-radio-wrapper');
var oDiv = document.getElementById('box');
var oInp=oDiv.getElementsByTagName('input');
var oInp1 = oDiv1.getElementsByTagName('input');
var oInp2 = oDiv2.getElementsByTagName('input');
var arrPhone = [];
var arrCom = [];
var arrLis = [];
var arrMonth = ['商品','地区','1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
var arrCheckBox1 = ['华东', '华南', '华北'];
var arrCheckBox2 = ['手机', '笔记本', '智能音箱'];
var ak=[];
var ak1=[];

addAll();
more();
var oTrrr = document.getElementsByTagName('tr');
addMonth();
createdCheckBox(oDiv1, arrCheckBox1);

createdCheckBox(oDiv2, arrCheckBox2);
for (var i = 0; i < 4; i++) {
    oInp1[i].checked = true;
    oInp2[i].checked = true;
}
serchData();
oInp[location.hash.slice(1,2)].checked=false;
/*
if (target.getAttribute('check-types') == 'all' && target.checked === true && target.nodeName.toLowerCase() == 'input') {
    for (var i = 1; i < 4; i++) {
        oInput[i].checked = true;
    }
    serchData();
}*/
/*if (oInp1[0].checked == false && oInp1[1].checked == true && oInp1[2].checked == true && oInp1[3].checked == true ) {

    oInp1[0].checked = true;
    serchData();
}*/
if (oInp1[1].checked == false || oInp1[2].checked == false || oInp1[3].checked == false ) {
    oInp1[0].checked = false;
    serchData();
}
/*if (oInp2[1].checked == false || oInp2[2].checked == false || oInp2[3].checked == false ) {
    oInp2[0].checked = false;
    serchData();
}*/





