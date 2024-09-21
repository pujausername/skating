//$('document').on('Click','.menu_img img')
$('.menu_img').on('click',function(){
    $('.nav_info').show(300);
})
$('.fa-times').on('click',function(){
    $('.nav_info').hide(300);
})