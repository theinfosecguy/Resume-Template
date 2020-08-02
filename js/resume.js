//  For Smooth Scroll
//  Smooth Scroll JS Added for Better Performance

// var anchorTags = document.querySelectorAll('nav a');
// // console.log(anchorTags);

// for(var i=0;i<anchorTags.length;i++){
//     // console.log(anchorTags[i]);
//     anchorTags[i].addEventListener('click' , function(event){
//         event.preventDefault();
//         var sectionId = this.textContent.trim().toLowerCase();
//         var sectionName = document.getElementById(sectionId);
//         console.log(sectionName);
//         var scrollInterval = setInterval(function(){
//             var cords = sectionName.getBoundingClientRect();
//             if(cords.top<=0){
//                 clearInterval(scrollInterval);
//                 return;
//             }
//             window.scrollBy(0,100);
//         },50);
//     });
// }

// Auto Filling of the skills bar
// Added Auto Fill Bars via jQuery
// var progressBars = document.querySelectorAll('.skills-progress > div');
// var skillsContainer = document.getElementById('skills-container');
// console.log(skillsContainer);
// console.log(progressBars);

// window.addEventListener('scroll' , checkScroll);
// var animFire = true;

// var skillsCords = skillsContainer.getBoundingClientRect();

// function initBars(){
//     for(var bar of progressBars){
//         bar.style.width = 0 + '%';
//     }
// }

// initBars();

// function checkScroll(){

//     if(skillsCords.top < window.innerHeight && animFire){
//         animFire = false;
//         fillBars();
//     }
//     else if(skillsCords.top > window.innerHeight){
//         animFire = true;
//         initBars();
//     }
// }

// function fillBars(){

//     for(let bar of progressBars){
//         let targetWidth = bar.getAttribute('data-bar-width');
//         let currentWidth = 0;
//         let skillsInterval = setInterval(function(){
//             if(currentWidth>=targetWidth){
//                 clearInterval(skillsInterval);
//                 return;
//             }
//             currentWidth++;
//             bar.style.width = currentWidth + '%';
//         },5);
//     }
// }


var scrolled = false
$(window).scroll(function() {
    if ($('#skills').is(':visible')) {
        // do your special stuff here
        var skillbar = $('.skills-percent');
        var per = skillbar.attr('data-bar-width');
        console.log(per)
        skillbar.css("width",per+'%');
    }
});