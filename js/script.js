

window.onload = init;


function init(){

	var header_item = document.getElementsByClassName("header_container_item");
	var header = document.getElementById("header");
	var menu = document.getElementsByClassName("navigation-item_arrow");
	var navItem = document.getElementsByClassName("navigation-item");
	var menuVisible = document.getElementsByClassName("header-menu");
	var menu_item = document.getElementsByClassName("menu-item-arrow");
	var submenu = document.getElementsByClassName("header-submenu");
	var containerZIndex = document.getElementById("cont");
	var search = document.getElementById("search");
	var mobSearchContainer = document.getElementById("search-mb");
	var footerTitle = document.getElementsByClassName("footer-column_title");
	var footerContainer = document.getElementsByClassName("ftr-column-padding");
	var mobMenuButton = document.getElementById("mobMenuButton");
	var mobileMenu = document.getElementById("mobileMenu");
	var searchInput = document.getElementById("searchInput");
	var footerIcon = document.getElementsByClassName("footer-icon");

	attachEventsToElements(menu, menuToggle);
	attachEventsToElements(menu_item, submenuToggle);

	mobMenuButton.onclick = function(){
		showMobMenu();
		mobSearchContainer.classList.remove("mob_search-show");
	}


	containerZIndex.onclick = function(){
		removeClass(menuVisible, "header_menu-show");
		removeClass(menu, "menu-item_click");
		containerZIndex.classList.remove("contZIndex");
	}

	attachEventsToElements(footerTitle, showFooter);

	search.onclick = function(){
		if(window.innerWidth <= 1024){
			showMobSearch();
			mobileMenu.classList.remove("mob_menu-show");
		}
	}


	
//event cycle function
	function attachEventsToElements(element, func){
		for(var i = 0; i < element.length; i++){
			element[i].onclick = func;
		}
	} 

//function which toggle class
	function classToggle(element, class_to_add){
		element.classList.toggle(class_to_add);
	}

//function shows menu(toggle)
	function menuToggle(event){
		var element = event.target;
		for(var i = 0; i < menu.length; i++){
			if(element == menu[i] || 
				menuVisible[i].classList.contains('header_menu-show') )
			{
				classToggle(menuVisible[i], "header_menu-show");
				highlightNavigation();
				containerZIndex.classList.toggle("contZIndex");
				mobSearchContainer.classList.remove("mob_search-show");
			}
		}
	}		

// function shows submenu(toggle)
	function submenuToggle(event){
		var element = event.target;
		for(var i = 0; i < menu_item.length; i++){
			if( element == menu_item[i]||
				submenu[i].classList.contains('header_submenu-show') )
			{
				classToggle(submenu[i], "header_submenu-show");
			}
		}		
	}

//function which removes class
	function removeClass(element, elClass){
		for(var i = 0; i < element.length; i++){
			element[i].classList.remove(elClass);
		}
	}
//function which adds class
	function addClass(element, elClass) {
		element.classList.add(elClass);
	}

//shows(toggle) search container in mobile version
	function showMobSearch(){	
		classToggle(mobSearchContainer, "mob_search-show");
	}

//shows mobile menu
	function showMobMenu(){
		classToggle(mobileMenu, "mob_menu-show");
	}

//shows footer in mob version
	function showFooter(event){
		var element = event.target;
		for(var i = 0; i < footerTitle.length; i++){
			if(element == footerTitle[i]){
				classToggle(footerContainer[i], "footer_menu-show");
				classToggle(footerIcon[i], "footer-icon-rotate");
			}
		}
	}	

//keep :hover if mouse out of navigation
	function highlightNavigation(){
		for(var i = 0; i < menu.length; i++){
			if( menuVisible[i].classList.contains('header_menu-show') )
			{
				menu[i].classList.add("menu-item_click");
			}else{
				menu[i].classList.remove("menu-item_click");
			}
		}
	}


}







	





