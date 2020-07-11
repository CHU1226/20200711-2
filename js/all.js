$(document).ready(function() {
	$('.logon button').click(function(){
		alert('目前沒有網路請稍後再試')
	});
	$('#log').click(function(){
		$('form#logon').fadeIn();
		$('.dark-bg').fadeIn();
	});
	$('.logon .change').click(function(){
		$('form.logon').fadeOut();
		$('.dark-bg').fadeOut();
	});
	$('#clear').click(function(){
		$('#total').text('0')
	});
	$('.product-box').click(function(){
		var productTab = $(this).attr("href");
		$(productTab).fadeIn();
		$('.dark-bg').fadeIn();
	});
	$('.pd-close').click(function(){
		$('.check').fadeOut();
		$('.dark-bg').fadeOut();
	});
	$('.contact-btn').click(function(){
		alert('資料已送出');
	});
	$('#car').click(function(){
		$('form#logon').fadeIn();
		$('.dark-bg').fadeIn();
	});
	$('.join').click(function(){
		$('#joinus').fadeIn();
		$('.dark-bg').fadeIn();
	});
	$('.register').click(function(){
		$('#register').fadeIn();
		$('.dark-bg').fadeIn();
	});
	$('.heart').click(function(){
		$(this).toggleClass("h-check");
		if($(this).hasClass("h-check")){
			$("body").append("<div class='alert01'>加入最愛</div>")
		}
		else{
			$("body").append("<div class='alert01'>取消最愛</div>")
		}
	});
	$('.add').click(function(){
		var	amount = $('.amount').val();
		$('#car').text("購物車("+amount+")");
	});
});

document.getElementById('all').onclick = function(){
	var el1 = document.getElementById('num1');
	var el2 = document.getElementById('num2');
	var el3 = document.getElementById('num3');
	var el4 = document.getElementById('num4');
	var el5 = document.getElementById('num5');
	var el6 = document.getElementById('num6');
	var el7 = document.getElementById('num7');
	var el8 = document.getElementById('num8');
	var el9 = document.getElementById('num9');
	shop = [
	{
		num: Number(el1.value),
		price: 30,
	},
	{
		num: Number(el2.value),
		price: 200,
	},
	{
		num: Number(el3.value),
		price: 80,
	},
	{
		num: Number(el4.value),
		price: 50,
	},
	{
		num: Number(el5.value),
		price: 50,
	},
	{
		num: Number(el6.value),
		price: 60,
	},
	{
		num: Number(el7.value),
		price: 40,
	},
	{
		num: Number(el8.value),
		price: 20,
	},
	{
		num: Number(el9.value),
		price: 25,
	},
	]
	var shoplen = shop.length;
	var total = 0;

	for(var i=0; i<shoplen; i++){
	 total += shop[i].num*shop[i].price;
	}
	document.getElementById('total').textContent = total;

	if(total<0){
		document.getElementById('total').textContent = "請輸入正確數值";
	}
}