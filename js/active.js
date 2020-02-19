$(function(){
    window.onresize=function(){
        setfontsize();
    }
    function setfontsize()
    {
        if(document.documentElement.clientWidth>1920)
        {
            document.documentElement.style.fontSize = document.documentElement.clientWidth / 80 + 'px';
        }
        else
        {
            document.documentElement.style.fontSize = '';
        }
    }
    setfontsize();
    $(".menu .menubtn").click(function(){
        $(".menu").addClass("active")
    })
    $(".menubg,.menuclose").click(function(){
        $(".menu").removeClass("active")
    })
    $(".tutor_box ul li").hover(function(){
        $(this).addClass("active");
    },function(){
        $(this).removeClass("active");
    });
})