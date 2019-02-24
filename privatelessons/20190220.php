<?
	include $_SERVER["DOCUMENT_ROOT"]."/head.lib.php";
	include $_SERVER["DOCUMENT_ROOT"]."/newwin/newwin.php";  //메인에서만 삭제하지말아주세요 (서브에서는 삭제)
	#################### SSL관련코드 삭제하지말아주세요 ###########################
	if($default[ssl_flag] == "Y"){
		if($_SERVER[SERVER_PORT] == $ssl_port) goto_url("http://".$new_sever_name);
	}
	#################### SSL관련코드 삭제하지말아주세요 ###########################

?>

  <script src="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.min.js"></script>

	<script>
	    $(document).ready(function(){

	    	function insertCount(slide_curr,slide_count){
	    					$('#slide-counter').html('<strong>'+ (slide_curr + 1) +'</strong>/'+ slide_count);
	    				};

	  		$('.box .slider').bxSlider({
	  			auto: true,
	  			pagerCustom : '.pagerCustom',
	  			onSliderLoad: function ($slideElement, oldIndex, newIndex){
	  				var slide_count = this.getSlideCount();
	  				var slide_curr = this.getCurrentSlide();
	  				insertCount(slide_curr,slide_count);
	  			},
	  			onSlideAfter: function ($slideElement, oldIndex, newIndex){
	  				var slide_count = this.getSlideCount();
	  				var slide_curr = this.getCurrentSlide();
	  				insertCount(slide_curr,slide_count);
	  			}
	  		});



	    });
	  </script>

</head>
<body>





 <div class="box">
	<ul class="slider">
		<li><img src="https://www.sambamall.com/cdn/product/20181218/QB20181218052528147_org.jpg" alt=""></li>
		<li><img src="https://www.sambamall.com/cdn/product/20180410/IT20180410065649200_org.jpg" alt=""></li>
		<li><img src="https://www.sambamall.com/cdn/product/20181218/QB20181218052528147_org.jpg" alt=""></li>
		<li><img src="https://www.sambamall.com/cdn/product/20180410/IT20180410065649200_org.jpg" alt=""></li>
	</ul>
	<div id="slide-counter"></div>




	<div class="pagerCustom">
		<a data-slide-index="0"><img src="https://www.sambamall.com/cdn/product/20181218/QB20181218052528147_org.jpg" alt=""></a>
		<a  data-slide-index="1"><img src="https://www.sambamall.com/cdn/product/20180410/IT20180410065649200_org.jpg" alt=""></a>
		<a  data-slide-index="2"><img src="https://www.sambamall.com/cdn/product/20181218/QB20181218052528147_org.jpg" alt=""></a>
		<a data-slide-index="3"><img src="https://www.sambamall.com/cdn/product/20180410/IT20180410065649200_org.jpg" alt=""></a>
	</div>




</div>


<style>

	.box{
		position: relative;
		width: 728px;
		height: 728px;

	}
	.slider > li > img{ height:728px; width:728px;}
	.box .pagerCustom{position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%);font-size: 0;}
	.box .pagerCustom > a {display: inline-block; width: 80px; height: 80px;}	.box .pagerCustom > a > img{width: 100%; height: 100%;}
	#slide-counter{position: absolute; bottom: 130px; width: 50px; left: 50%; margin-left: -25px; height: 30px; background-color: white; border-radius: 30px; border:1px solid red;}

</style>


<? include $_SERVER["DOCUMENT_ROOT"]."/foot.lib.php";  ?>
