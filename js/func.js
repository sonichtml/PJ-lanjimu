/*
 * Markup by Sonic
 * http://www.sonichtml.com
 * sonichtml@gmail.com
 */
// 隐藏地址栏  & 处理事件的时候 ，防止滚动条出现 (jQuery Mobile 默认有此功能)
addEventListener('load', function(){
        //setTimeout(function(){ window.scrollTo(0, 1); }, 100);
});

$(document).ready(function(){
/* switchGender
------------------------*/
if($("#switchGender").html()){
	var switchGenderLi = $("#switchGender li")
	switchGenderLi.click(function(){
		switchGenderLi.removeClass("current");
		$(this).addClass("current");
	})	
}

/* setTopic
------------------------*/
if($("#setTopicBtn").html()){
	var setTopicBtn = $("#setTopicBtn");
	var setTopicBox = $("#setTopicBox");
	var TopicPageWrap = $("#topic");
	setTopicBtn.click(function(){
		if(TopicPageWrap.hasClass("topic_open")){
			console.log("关闭")
			//TopicPageWrap.animate({left:'0'}, 500, function() {setTopicBox.removeClass("box_opened");});
			TopicPageWrap.removeClass("topic_open");
			TopicPageWrap.addClass("topic_close");
		}else{
			console.log("展开")
			//TopicPageWrap.animate({left: '+=85%'}, 500, function() {setTopicBox.addClass("box_opened");});
			TopicPageWrap.removeClass("topic_close");
			TopicPageWrap.addClass("topic_open");
		}
	})
}

});