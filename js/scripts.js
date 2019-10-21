var modalWindow = document.getElementById("modal_wrapper");
var modalCloseLink = document.getElementById("modal_close-link");
var header = document.getElementById("header");
var footer = document.getElementById("site_footer");
var siteDescription = document.getElementsByClassName("site_description");
var menuList = document.getElementById("menu_list");
var menuElem = document.getElementsByClassName("menu_elem");
var siteNameSwapper = document.getElementById("site_name_swap");
var siteNameLinks = document.getElementById("site_swap_link"); 
var siteMenuDes = document.getElementsByClassName("des_menu_elem");
var lastHovered;
let textFill = siteNameSwapper.children[0].innerHTML;


document.addEventListener("DOMContentLoaded", function() {
    terry();
}, false);

function openModal() {
    modalWindow.style.display = "initial";
    setTimeout(function(){ modalWindow.classList.remove("modal_display_off"); }, 100);
}

window.onclick = function (event) {
    if (event.target == modalWindow || event.target == header /*|| event.target == document.getElementById("modal_activator")[0]*/) {
        closeModal();
    }
}
modalCloseLink.addEventListener("click", closeModal);

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        closeModal();
    }
};

let animateElemsList = document.getElementsByClassName("des_menu_list");
////////////////////////////////
for(let i=0; i< (menuElem.length); i++) {
    menuElem[i].addEventListener("mouseover", function() {
        siteNameLinks.innerHTML = this.children[0].innerHTML;
        siteNameLinks.style.opacity = 1;
        if(i != menuElem.length-1) {
            siteMenuDes[i].style.opacity = 1;
        }
        if(i != menuElem.length-1) {
            var animatedElems = animateElemsList[i].getElementsByTagName("li");
        
            for(let f=0; f < animatedElems.length; f++) {
                animatedElems[f].classList.add("run");
            }
        }
    });
    if(i != menuElem.length-1) {
        menuElem[i].addEventListener("mouseleave", function() {
            // if(i != menuElem.length-1) {
                siteMenuDes[i].style.opacity = 0;
            // }
            var animatedElems = animateElemsList[i].getElementsByTagName("li");
            for(let f=0; f < animatedElems.length; f++) {
                animatedElems[f].classList.remove("run");
            }
        });
    }
}
menuElem[menuElem.length-1].addEventListener("mouseover", function() {
    // site_name_swap.children[0].textContent = "Kontakt";
    siteNameSwapper.children[0].textContent = "";
    // siteNameLinks.innerHTML = "";
});
menuElem[menuElem.length-1].addEventListener("click", function() {
    siteNameSwapper.children[0].textContent = "";
});
menuElem[menuElem.length-1].addEventListener("mouseleave", function() {
    siteNameSwapper.children[0].innerHTML = textFill;
});
///////////////////////////////

footer.addEventListener("mouseover", function() {
    siteDescription[0].style.opacity = 0; 
    siteNameSwapper.style.opacity = 1;
});
footer.addEventListener("mouseleave", function() {
    siteNameSwapper.style.opacity = 0;
    // siteNameLinks.innerHTML = "";
    setTimeout(function() { siteDescription[0].style.opacity = 1; }, 10); //classList.remove("opacityAnimation");
    setTimeout(function() { siteNameLinks.innerHTML = " "; }, 200);
    siteNameLinks.style.opacity = 0;
});

if(window.attachEvent) {
    window.attachEvent('onresize', function() {
        terry();
    });
}
else if(window.addEventListener) {
    window.addEventListener('resize', function() {
        terry();
    }, true);
}

function terry() {
    // setTimeout(function() {
    if(window.innerWidth>1200) {
        for(let i=0; i< (menuElem.length); i++) {
            menuElem[i].addEventListener("mouseover", function () {
                if (i - 1 >= 0) {
                    neighbourStyle(i-1, 45 + "vh", 33 + "vw");
                }
            });
            menuElem[i].addEventListener("mouseleave", function () {
                if(menuList.children[i-1] != null) {
                    neighbourStyle(i-1, "",  "");
                }
            });
            lastHovered = i;
        }
    }
    else if(window.innerWidth>800 && window.innerWidth<1200) {
        for(let i=0; i< (menuElem.length); i++) {
            menuElem[i].addEventListener("mouseover", function () {
                if (i - 1 >= 0) {
                    neighbourStyle(i-1, 45 + "vh", 55 + "vw");
                }
            });
            menuElem[i].addEventListener("mouseleave", function () {
                if(menuList.children[i-1] != null) {
                    neighbourStyle(i-1, "",  "");
                }
            });
            lastHovered = i;
        }
    }
    else if(window.innerWidth<800) {
        console.log("do nothing please");
        for(let i=0; i< (menuElem.length); i++) {
            menuElem[i].addEventListener("mouseover", function () {
                if (i - 1 >= 0) {
                    neighbourStyle(i-1, "inherit", "65vw");
                }
            });
            lastHovered = i;
        }
    }
// }, 500);
}

function neighbourStyle(index, minHeight, width) {
    menuList.children[index].style.minHeight = minHeight;
    menuList.children[index].style.width = width;
}

function closeModal() {
    modalWindow.classList.add("modal_display_off");
    setTimeout(function(){ modalWindow.style.display = "none"; }, 620);
}

let inp = document.getElementsByClassName("modal_input");
let lab = document.getElementsByClassName("modal_label");
function formStyler() {
	for (let j = 0; j < inp.length; j++) {
		(function (index) {
			inp[index].onfocus = function () {
				if (this.value.length == 0) {
					lab[index].classList.toggle("modal_label-active");
					this.classList.toggle("modal_input-toggle"); //BACKGROUNDOWE ZMIANY
				}
				if (this.value.length != 0) {
					this.classList.add("modal_input-active");
				}
				else {
					this.classList.remove("modal_input-active");
				}
			}
			inp[index].onblur = function () {
				if (this.value.length == 0) {
					lab[index].classList.toggle("modal_label-active");
					this.classList.toggle("modal_input-toggle"); //BACKGROUNDOWE ZMIANY
				}
				if (this.value.length != 0) {
					this.classList.add("modal_input-active");
				}
				else {
					this.classList.remove("modal_input-active");
				}
			}
		})(j);
	}
}
formStyler();

// document.getElementById("modal_container").innerHTML='<iframe src="../tester.html" frameborder="0" ></iframe>';