//创建所有数据的表
function addAll() {
    var n=0;
    for (var i = 0; i < 9; i++) {
        var oTrr = document.createElement('tr');
        oTrr.setAttribute('dq', sourceData[i].region);
        oTrr.setAttribute('sp', sourceData[i].product);
        oTrr.style.display = 'none';
        oTbody.appendChild(oTrr);
        for (var j = 0; j < 14; j++) {
            var oTrd = document.createElement('td');
            oTrr.appendChild(oTrd);
            if (j == 0) {
                oTrd.innerHTML = sourceData[i].product;
            }
            else if (j == 1) {
                oTrd.innerHTML = sourceData[i].region;
            }
            else {
                if (localStorage.length==0){
                    oTrd.innerHTML = '<input type="text" class="myInput" value= '+ Number(sourceData[i].sale[j - 2] )+ ' style="width:40px;height:40px ;text-align:center;font-size:20px;border:0px;display:none"><span class="span1" style="font-size:20px;display:block"><div style="display: inline-block">'+Number(sourceData[i].sale[j - 2])+'</div><img src="img/edit.jpg" alt="" style="width: 14px;height: 14px;position: absolute;right: 0;top: 0;display: none;cursor: pointer"></span><input id="butt" class="buttC" type="button" value="Y"><input id="butt1" type="button" class="buttC buttC1" value="N">'
                }
                else{
                    oTrd.innerHTML = '<input type="text" class="myInput" value= '+ localStorage.getItem('data'+n)+ ' style="width:40px;height:40px ;text-align:center;font-size:20px;border:0px;display:none"><span class="span1" style="font-size:20px;display:block"><div style="display: inline-block">'+localStorage.getItem('data'+n)+'</div><img src="img/edit.jpg" alt="" style="width: 14px;height: 14px;position: absolute;right: 0;top: 0;display: none;cursor: pointer"></span><input id="butt" class="buttC" type="button" value="Y"><input id="butt1" type="button" class="buttC buttC1" value="N">'
                    n++;
                }

                /*sourceData[i].sale[j - 2]*/

            }

        }

    }
    var ininput = document.querySelectorAll('.myInput');
    var allImg=document.querySelectorAll('img');
    var oSpan=document.querySelectorAll('span');
    var oButt=document.querySelectorAll('#butt');
    var oButt1=document.querySelectorAll('#butt1');

   for (var i=0;i<oSpan.length;i++){
       oSpan[i].index=i;
       oSpan[i].onmouseenter=function (e) {

           for (var j=0;j<allImg.length;j++){
               allImg[j].style.display='none';
           }
           var _this=this;
           allImg[this.index].style.display='block';
           allImg[this.index].onclick=function () {
               for (let i=0;i<allImg.length;i++){
                   ininput[i].style.display='none';
                   oSpan[i].style.display='block';
                   var button3=oSpan[i].parentNode.childNodes[2];
                   var button4=oSpan[i].parentNode.childNodes[3];
                   button3.style.display='none';
                   button4.style.display='none';
               }
               this.style.display='none';
               ininput[_this.index].style.display='block';
               oSpan[_this.index].style.display='none';
               var button1=oSpan[_this.index].parentNode.childNodes[2];
               var button2=oSpan[_this.index].parentNode.childNodes[3];
               button1.style.display='block';
               button2.style.display='block';
               button2.onclick=function () {
                   ininput[_this.index].style.display='none';
                   oSpan[_this.index].style.display='block';
                   button1.style.display='none';
                   button2.style.display='none';
               };
               button1.onclick=function () {
                   if (isNaN(Number(ininput[_this.index].value))==true){
                       alert('请输入数字')
                   }
                   else {
                       ininput[_this.index].style.display='none';
                       oSpan[_this.index].style.display='block';
                       button1.style.display='none';
                       button2.style.display='none';
                       oSpan[_this.index].getElementsByTagName('div')[0].innerHTML=ininput[_this.index].value;
                   }

               };
               document.onclick=function (ev) {
                   var ev=ev||window.event;
                   var target=ev.target||ev.srcElement;
                   if (target.nodeName.toLowerCase()!='img'&&target.nodeName.toLowerCase()!='span'&&target.className!='myInput'&&target.id!='butt'){
                       ininput[_this.index].style.display='none';
                       oSpan[_this.index].style.display='block';
                       button1.style.display='none';
                       button2.style.display='none';

                   }
               };
                   ininput[_this.index].onkeydown=function (ev) {
                   var ev=ev||window.event;
                   if (ev.keyCode==13){
                       if (isNaN(Number(ininput[_this.index].value))==true){
                           alert('请输入数字');
                       }
                       else {
                           ininput[_this.index].style.display='none';
                           oSpan[_this.index].style.display='block';
                           var button1=oSpan[_this.index].parentNode.childNodes[2];
                           var button2=oSpan[_this.index].parentNode.childNodes[3];
                           button1.style.display='none';
                           button2.style.display='none';
                           oSpan[_this.index].getElementsByTagName('div')[0].innerHTML=ininput[_this.index].value;
                       }
                   }
                   if (ev.keyCode==27){
                       var button1=oSpan[_this.index].parentNode.childNodes[2];
                       var button2=oSpan[_this.index].parentNode.childNodes[3];
                       ininput[_this.index].style.display='none';
                       oSpan[_this.index].style.display='block';
                       button1.style.display='none';
                       button2.style.display='none';
                       return false
                   }
               }

           };




       };
       oSpan[i].onmouseleave=function () {
           allImg[this.index].style.display='none';

       };


   }

    for (var i = 0; i < ininput.length; i++) {
    var oBtn=document.getElementById('btn');
    var oBtn1=document.getElementById('btn1');
    oBtn.onclick=function () {
        for (var i=0;i<ininput.length;i++){
            localStorage.setItem('data'+i,ininput[i].value)
        }
    };
        oBtn1.onclick=function () {
            localStorage.clear()
        };


    }
    console.log(localStorage);
}


//创建表头
function addMonth() {
    for (var i = 0; i < 14; i++) {
        var oTh = document.createElement('th');
        oTr.appendChild(oTh);
        oTh.innerHTML = arrMonth[i];
    }
}

//如果checkbox是选中的，就将他的value放入一个数组
function checkeds(arr) {
    var arrCheckeds = [];
    for (var i = 1; i < 4; i++) {
        if (arr[i].checked == true) {
            arrCheckeds.push(arr[i].value);
        }
    }
    return arrCheckeds;

}

//挑选一组数组中有且另一组数组中也有的行
function serchData() {
    for (var i = 1; i < 10; i++) {

        if (checkeds(oInp1).indexOf(oTrrr[i].getAttribute('dq'))!=-1&&checkeds(oInp2).indexOf(oTrrr[i].getAttribute('sp'))!=-1){
            oTrrr[i].style.display = 'table-row';


        } else {
            oTrrr[i].style.display='none';
        }

    }
}

//判断chenkBox的选中的数量
function checkedBox(checks){
    var n = 0;
    for(var i=0;i<checks.length;i++){
        if(checks[i].checked==true)
            n++;
    }
    return n;
}

//商品和地区都选择了多于一个的情况下，以商品为第一列，地区为第二列，商品列对同样的商品单元格进行合并
function more() {
    var creat=document.createElement('tr');
    creat.setAttribute('sp','p');
    creat.style.display='table-row';
    oTbody.appendChild(creat);
    var oTrrr = oTbody.querySelectorAll('tr');
    var arr1 = [];
    var n=0;

    //如果样式是table-row的就把他放到数组arr1中，再操作数组arr1.
    for (var i = 0; i < 10; i++) {
        if (oTrrr[i].style.display == 'table-row') {
            arr1.push(oTrrr[i]);
        }
    }

    for (var i=1;i<arr1.length;i++){
        if (arr1[i-1].getAttribute('sp')==arr1[i].getAttribute('sp')){
            arr1[i].children[0].style.display = 'none';
        }
        else {
            n++;
            if (arr1.length>7) {

                if (i == 3 || i == 6 || i == 9) {
                    arr1[i - 3].children[0].rowSpan = 3;

                }
            }
            else{
                if(i==2||i==4||i==6){
                    arr1[i-2].children[0].rowSpan=2;
                }
                if (i==3||i==6){
                    arr1[i-3].children[0].rowSpan=3;
                }
            }


        }

    }
}

//创建一组checkbox
function createdCheckBox(contain, arr) {
    var result = [];
    for (var i = 0; i < 3; i++) {
        var a = i + 1;
        result.push(arr[i] + '<input type="checkbox" value="' + arr[i] + '" dq="' + arrCheckBox1[i] + '" sp="' + arrCheckBox2[i] + '">');
    }
    contain.innerHTML = ' 全选<input type="checkbox" check-types="all" >' + result[0] + result[1] + result[2];
    var oInput = contain.getElementsByTagName('input');
    if (contain==oDiv1){
        var oInpp1 = contain.getElementsByTagName('input');
        for (var i=0;i<4;i++){
            oInpp1[i].setAttribute('index',i)
        }
    }
    else{
        var oInpp2 = contain.getElementsByTagName('input');
        for (var i=0;i<4;i++){
            oInpp2[i].setAttribute('index',i)
        }
    }

    contain.onclick = function (ev) {
        var ev = ev || window.event;
        var target = ev.target || ev.srcElement;
        var oInputs = contain.getElementsByTagName('input');
        /*console.log(checkeds(oInputs));*/
        var index = target.value;
        if (target.nodeName.toLowerCase() == 'input') {
            oTbody.innerHTML = '';
            oTr.innerHTML = '';
            addMonth();
            addAll();


            /*addProCheckBox()*/
            if (target.getAttribute('check-types') == 'all' && target.checked === true && target.nodeName.toLowerCase() == 'input') {
                for (var i = 1; i < 4; i++) {
                    oInput[i].checked = true;
                }
                serchData();


            }
            if (oInputs[0].checked == false && oInputs[1].checked == true && oInputs[2].checked == true && oInputs[3].checked == true && target.nodeName.toLowerCase() == 'input') {

                oInputs[0].checked = true;
                serchData();
            }
            if (oInput[1].checked == false || oInput[2].checked == false || oInput[3].checked == false && target.nodeName.toLowerCase() == 'input') {
                location.hash=target.getAttribute('index');
                oInput[0].checked = false;
                serchData();
            }
            if (oInput[1].checked == false && oInput[2].checked == false && oInput[3].checked == false && target.nodeName.toLowerCase() == 'input') {
                target.checked = true;
                serchData();
            }


            //判断CheckBox选中的数量优化表格

            if (target.nodeName.toLowerCase() == 'input') {

                //当地区选择了一个，商品选择了多个的时候
                if (checkedBox(oInp1) == 1 && checkedBox(oInp2) > 1) {

                    var oTH = document.getElementsByTagName('th');
                    var oTrrr = oTbody.querySelectorAll('tr');

                    for (var i = 0; i < 9; i++) {
                        oTrrr[i].children[0].innerHTML = sourceData[i].region;
                        oTrrr[i].children[1].innerHTML = sourceData[i].product;
                    }

                    oTH[0].innerHTML = arrMonth[1];
                    oTH[1].innerHTML = arrMonth[0];
                    var arr1 = [];

                    //如果样式是table-row的就把他放到数组arr1中，再操作数组arr1.
                    for (var i = 0; i < 9; i++) {
                        if (oTrrr[i].style.display == 'table-row') {
                            /* oTrrr[i].style.backgroundColor='blue';*/
                            arr1.push(oTrrr[i]);
                        }
                    }
                    arr1[0].children[0].rowSpan = arr1.length;
                    for (var i = 1; i < arr1.length; i++) {
                        arr1[i].children[0].style.display ='none'
                    }

                }


                //当商品选择了一个，地区选择了多个的时候
                if (checkedBox(oInp1) > 1 && checkedBox(oInp2) == 1) {
                    var oTrrr = oTbody.querySelectorAll('tr');
                    var arr1 = [];
                    //如果样式是table-row的就把他放到数组arr1中，再操作数组arr1.
                    for (var i = 0; i < 9; i++) {
                        if (oTrrr[i].style.display == 'table-row') {
                            arr1.push(oTrrr[i]);
                        }
                    }
                    arr1[0].children[0].rowSpan = arr1.length;
                    for (var j = 1; j < arr1.length; j++) {
                        arr1[j].children[0].style.display = 'none'
                    }

                }

                //商品和地区都选择了多于一个的情况下，以商品为第一列，地区为第二列，商品列对同样的商品单元格进行合并
                if (checkedBox(oInp1) > 1 && checkedBox(oInp2) > 1) {
                    more();
                }

            }


        }
    }
}