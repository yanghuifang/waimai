window.onload=function () {
    let jia=document.querySelectorAll("main .content ul li .song .pic")[0];
    let jian=document.querySelectorAll("main .content ul li .song .pic1")[0];
    let shu=document.querySelectorAll("main .content ul li .song .shu")[0];
    console.log(jia);
    let btn=document.querySelector("main .bottom .money");
    let text1=document.querySelector("main .bottom .text");
    let white=document.querySelector(".white");
    let i=0;
    let j=15;
    console.log(btn);
    console.log(text1);
    console.log(white);

    jia.onclick=function () {

        btn.innerHTML="";

        text1.innerHTML="";
        i++;
        if(i>=1){
            shu.style.display="block";
            jian.style.display="block";
            btn.style.background="#ff421c";
            text1.style.color="#ff421c";
            shu.innerHTML=i;
            btn.innerHTML=j*i+ 2 +"元";
            text1.innerHTML=i*j+"<br><span>另需配送费2元</span>";

        }


        // let p=document.querySelector("main .bottom .text p");
        // console.log(p);

        let box=document.querySelector(".box")
        btn.onclick=function () {
            box.style.display="block";
            white.style.display="block";
            document.body.style.overflow="hidden";
        }

    }
    jian.onclick=function () {
        i--;
        if(i<=0){
            shu.style.display="none";
            jian.style.display="none";
            btn.style.background="#4c4c4c";

            // btn.innerHTML="￥20元起送";
            text1.innerHTML="还未选购商品另需配送费";
            text1.style.color="#000";

            // text1.style.color="#000";
        }
        btn.innerHTML=j*i+2+"元";
        text1.innerHTML=i*j+"<br><span>另需配送费2元</span>";
         shu.innerHTML=i;
    }
    if(i*j==0){
        btn.innerHTML="￥20元起送";
        text1.innerHTML="还未选购商品另需配送费";
    }

//列表
    let lis=$("main .list ul li");
    let content=$("main .content ul");
    content[0].style.display="block";
    console.log(content[0]);
    for(let i=0;i<lis.length;i++){
        lis[i].onclick=function () {
            for(let j=0;j<lis.length;j++){
                lis[j].classList.remove("actives");
                content[j].style.display="none";
            }
            lis[i].classList.add("actives");
            content[i].style.display="block";
            // content

        }
    }
    //加入购物车
    // let jia=document.querySelector(".jia");
    // let jie=document.querySelector(".jie");
    // let shu=document.querySelector("main .content .section2 .all ul li .jiashu");
    // let i=0;
    // jia.onclick=function(){
    //     jie.style.display="block";
    //     i++;
    //     shu.innerHTML=i;
    //     if(i>=1){
    //         dj.style.background="red";
    //     }
    //
    // }
    // jie.onclick=function(){
    //     i--;
    //     if(i==0){
    //         jie.style.display="none";
    //         shu.style.display="none"
    //     }
    //     shu.innerHTML=i;
    // }




}