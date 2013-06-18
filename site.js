$(function(){
  		
			//jsfollow plugin for cart
			//Sticky Shopping Cart, shopping cart has a follow effect
			$('#scart').jfollow('#cartfollow', 20);
	
	//drag functionality, each product is a draggable item				
			$('.productitem').draggable({
				zIndex: 1000, 
				cursor: 'move',
				cursorAt: {top: -5, left: -5},
				revert: true,
				revert: 'invalid',
				helper: function(e, ui){
					var that = $(this); //the (this) object is the product being dragged
					//getting the combined text contents of each element, including their descendants.
			
					//returns productid, images/tshirticon.png, title, kind & listprice
					return $('<div class="ui-draggable-helper" rel='+ that.find(".productid").text() +'><img src="images/tshirticon.png"><span class="title">'+ that.find('h4').text() + '</span></br>' + that.find('.kind').text() + '</br><span class="price">' + that.find('.listprice').text() +'</span></div>');
					
				}
				
			});

	//droppable area functionality
			$('.cartdropbox').droppable({
				zIndex: 1000,
				drop: function(e, ui){
					
					$('.emptycart').hide(); //hide the cart since it is no longer empty
					
					
					//Getting the descendants of each element in the current set of matched 
					//elements,  filtered by a selector, jQuery object, or element.
					var item = $('<div class="cartitem" productid="' + $('.ui-draggable-helper').attr('rel') + '"><span class="ui-state-default trashitem"><span class="ui-icon ui-icon-trash"></span></span><span class="title">'+ $('.ui-draggable-helper').find('.title').text() + '</span><input type="text" class="amount" value="1" /><span class="price">' + $('.ui-draggable-helper').find('.price').text() + '</span><div class="clear"></div></div>');
				
				 //.show animation method
					item.show(100).appendTo('.cartitems');
						$('.ui-state-default').bind('click', function(){					
							$(this).parent().hide('fast', function(){
								$(this).remove();
								if($('.cartitem[productid]').length < 1){
									$('.emptycart').show('fast');
								}
							});	
								
							return false;
						});
					
				}
			
			});
			
			
						
	//if you clear items from cart, "Your cart is empty." dialog appears		
$('#clearcart a').bind('click', function(){
				dlg.dialog('open');
				return false;	
			});

			
			
			
				
	//empty your cart button functionality and dialog popup appears
	
			var dlg = $('<div id="emptycartdg"></div>').dialog({
				title: "Are You Sure You Want To Empty Your Cart?",
				resizable: false,
				modal: true,
				show: 'slide',
				height: 145,
				width: 250,
				position: 'top', 
				autoOpen: false,
				closeOnEscape: true,
				buttons: {	
					
					//okay closes popup dialog and removes all the cart items
					//then shows .emptycart div again
					"OKay": function(){				
					$('.cartitem[productid]').remove();
					$('.emptycart').show();
					$(this).dialog('close');
					
					},
					//cancel only closes popup dialog
					"Cancel": function(){
					$(this).dialog('close');
					
							
						}	
					}
			
			
			});
			

		
		

		
		
		
		
		
		
		
		
		
		
});

//cited code 
//api.jquery.com
