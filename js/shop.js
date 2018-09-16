window.onload=function () {
    let jia=document.querySelectorAll("main .content ul li .song .pic")[0];
    console.log(jia);
    let btn=document.querySelector("main .bottom .money");
    let text1=document.querySelector("main .bottom .text");
    let white=document.querySelector(".white");
    console.log(btn);
    console.log(text1);
    console.log(white);
    jia.onclick=function () {
        btn.style.background="#ff421c";
        btn.innerHTML="";
        btn.innerHTML="19元";
        text1.innerHTML="";
        text1.innerHTML="15元<br><span>另需配送费4元</span>";

        // let p=document.querySelector("main .bottom .text p");
        // console.log(p);
        text1.style.color="#ff421c";

    }
    let box=document.querySelector(".box")
    btn.onclick=function () {
        box.style.display="block";
        white.style.display="block";
        document.body.style.overflow="hidden";
    }


}