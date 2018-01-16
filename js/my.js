window.onload = function(){
	
	var form = document.querySelector('#userForm');
var selectOption = form.querySelectorAll('.column1 select option');

var selectSpan = form.querySelector('#selected');
var liOption = form.querySelectorAll('#listOption>li');

var ul = form.querySelector('div.select ul');
var arrow = form.querySelector('div.select>section>i');


arrow.addEventListener('click', function(e){

	ul.classList.toggle('visible');
	if(ul.classList.contains('visible')){
		e.target.classList.remove('fa-arrow-down');
		e.target.classList.add('fa-arrow-up');
	}else{
	    e.target.classList.add('fa-arrow-down');
		e.target.classList.remove('fa-arrow-up');	
	}
	
});


/*console.log(listOption.length);*/

/*
добавляет обработчики каждому элементу списка 
 */
function addEvent(listTags){
	for(var i = 0; i < listTags.length; i++){
	

	listTags[i].addEventListener('click', function(e){

		e.target.classList.toggle('active');

		liList = selectionVal(liOption, 'dataset');

		changeSelect(selectOption, liList);
	});

    }
}

/*
выбирает атрибуты 
возвращает массив с их значениями
 */
function selectionVal(listTags, attr){
	var list = [];
	var myAttr = 'myval';
	for(var i = 0; i < listTags.length; i++){

		if(attr == 'dataset' && listTags[i].classList.contains("active")){
			list[i] = listTags[i].dataset[myAttr];
			continue;
		}
		list[i] = listTags[i].getAttribute(attr);
	}

	return list;
}

function changeSelect(optionVal, liVal){

	console.log(optionVal);
	console.log(selectionVal(liOption, 'dataset'));
	for(var i = 0; i < optionVal.length; i++){

        optionVal[i].removeAttribute('selected');

		for(var j = 0; j < liVal.length; j++){
		if(optionVal[i].value === liVal[j]){

			optionVal[i].setAttribute('selected', '');

		}

	    }
	}

}



    addEvent(liOption);




    var hideMenu = document.querySelector('div.hideMenu');
	var hideMenuIcon = hideMenu.querySelector('.menuIcon');
	var menuIcon = document.body.querySelector('.hideMenu + .menuIcon');
	
	console.log(menuIcon);

	menuIcon.addEventListener('click', function(e){
	  menuIcon.style.display = 'none';
	  hideMenu.style.display = 'flex';
	  
	});

	hideMenuIcon.addEventListener('click', function(){
	  menuIcon.style.display = 'flex';
	  hideMenu.style.display = 'none';
	});

};












