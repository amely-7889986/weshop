$(function(){
	//首页页面和产品列表页面的底部
	//var pic_length=$('.index-clasfy-pro ul li').length;
	var liHeight = $('.weiTab').outerHeight(true);
	//var ulWidth = pic_length * liWidth;
	$('.index-hot').css({'margin-bottom':''+liHeight+'px'}); 
		
	//.listPro-con-fliter的top值：.listPro-con-nav的高度
	//获取.listPro-con-nav的高度	
	var listproHeight = $('.headfirstHeight').outerHeight(true);
	$('.listPro-con-fliter').css({'top':''+listproHeight+'px'}); 
	
	
	//.listPro-con-pro的margin-top的值：.listPro-con-nav的高度、.listPro-con-fliter的高度	
	var myfliHeight = $('.headsecondHeight').outerHeight(true);
	var listProConHeight = $('.listPro-con').outerHeight(true);
	$('.listPro-con-pro').css({'margin-top':''+listProConHeight+'px'}); 
	
	
	//.productShow-con-pic的margin-top的值：.productShow-con-nav的高度
	var proShowHeight = $('.productnavHeight').outerHeight(true);
	var proShowBotHeight = $('.probotBtnHeight').outerHeight(true);
	$('.productShow-conIn-pic').css({'margin-bottom':''+proShowBotHeight+'px'});
	
	
	
	/*商品评论*/
	var pronavHeight  = $('.productShow-con-nav').outerHeight(true);
	$('.productRev-con-cate').css({'top':''+pronavHeight+'px'});
	var myproShwoListHeight = pronavHeight + myfliHeight;
	$('.productShow-con-list').css({'margin-top':''+myproShwoListHeight+'px'}); 
	/*productRev-con-list的margin-top: productnavHeight  headsecondHeight*/
	var produRevListHeight = proShowHeight + myfliHeight;
	$('.productRev-con-list').css({'margin-top':''+produRevListHeight+'px'});  
	//productRev-con-list 的margin-bottom： probotBtnHeight的高度
	$('.productRev-con-list').css({'margin-bottom':''+proShowBotHeight+'px'}); 
	$('.productShow-conIn').css({'margin-top':''+pronavHeight+'px'});  //商品展示的顶部
	//search-con-top的margin-top
	var searchHeight  = $('.search-con-top').outerHeight(true);
	$('.search-con-bot').css({'margin-top':''+searchHeight+'px'});  //搜索页面的顶部

//	//点击收藏按钮 效果不行
//	$('.index-hot-pro-con-like').click(function(e) {
//		var like = $('.index-hot-pro-con-like').css('background-image');
//		if( like == 'none' ){
//			$('.collection-icon').addClass('collection-icon-sel');
//		}else{
//			$('.collection-icon').removeClass('collection-icon-sel');
//		}
//       
//    });	
	
	
	//商品展示和商品详情
	
	
	//我的订单页面
	//listOrder-list的margin-top：listOrder-top 的高度
	var listorderTopHeight = $('.listOrder-top').outerHeight(true);
	$('.listOrder-list').css({'margin-top':''+listorderTopHeight+'px'}); 
	$('.listReview-list').css({'margin-top':''+listorderTopHeight+'px'});  //我的评论页面顶部
	$('.listColle-list').css({'margin-top':''+listorderTopHeight+'px'});  //我的收藏页面顶部
	
	var listAddressTopHeight = $('.listAddress-top').outerHeight(true);    //我的地址页面顶部
	$('.listAddress-list').css({'margin-top':''+listAddressTopHeight+'px'}); 
	$('.personal-con').css({'margin-top':''+listAddressTopHeight+'px'});   //个人信息页面顶部
	$('.shoppCart').css({'margin-top':''+listAddressTopHeight+'px'});
	$('.conPayment-con').css({'margin-top':''+listAddressTopHeight+'px'});   //确认支付页面顶部
	//$('.submitPay').css({'margin-top':''+listAddressTopHeight+'px'}); 
	
	//规格选择页面  specifica-pro的margin-top
	$('.specifica-pro').css({'margin-top':''+listorderTopHeight+'px'}); 
	
	
	
	var myHeigt = $('.shoppCart-con-mid').height();
	$('.shoppCart-con-left p').css({'height':''+myHeigt+'px'}); 
	
	//产品列表页面
	$('.listPro-con-nav-sel-icon').click(function(e) {
        var myListProNavSel = $('.listPro-con-nav-sel-part').css('display');
		if( myListProNavSel == 'none'){
			$('.listPro-con-nav-sel-part').stop().slideToggle();
			$('.listPro-con-nav-sel-icon').css({'background-image':'url(img/classifyMore-btn-sel.png)'});
		}else{
			$('.listPro-con-nav-sel-part').stop().slideToggle();	
			$('.listPro-con-nav-sel-icon').css({'background-image':'url(img/classifyMore-btn.png)'});
		}
    });
	
	
	


})