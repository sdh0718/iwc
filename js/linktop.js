$(function(){
  var bodyHeight=$('body').height();
  var foonterHeight=$('footer').height();
  var scrollHeight=bodyHeight-foonterHeight;
  console.log(scrollHeight)

  $(document).scroll(function(){
    var docTop=$(document).scrollTop();
    
    if(docTop>=scrollHeight+600){
      $('#link_top>a').addClass('active').css('padding','0');
      $('#link_top').addClass('active').css('right','30%').css('top','94.75%');
      $('.header>.content1').slideUp(300);
    }else if(docTop>=80){
      $('#link_top>a').removeClass('active').css('padding','20px');
      $('#link_top').addClass('active').css('right','0%').css('top','80%');
      $('.header>.content1').slideUp(300);
    }else{
      $('#link_top>a').removeClass('active');
      $('.header>.content1').slideDown(300);
    }

  });
})