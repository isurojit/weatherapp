//Defining UI
    const UIlogo = document.querySelector('.logo');
    const UInavBrand = document.querySelector('.navbar-brand');
    const UInavMenu = document.querySelector('.navbar');
    const UImenus = document.querySelector('.nav-item');
    const UIsearchLabel = document.querySelector('.search_label');
    const UIdarkModeSwitch = document.querySelector('.dark_mode');
    const UIdarkModeMsg = document.querySelector('.dark_mode_msg');
    const UIdarkModeIcon = document.querySelector('.dark_mode_switch');
    const UIsearchIcon = document.querySelector('#search_icon');
    const UItemp = document.querySelector('#w-strings');
    // const UItempIcons = document.querySelector('#w-icon');
    const UIsecondaryItems = document.querySelectorAll('.secondary-items');

//Setting Flag Value
let toggled = false;



//Applying default styles
    UIlogo.style.cssText = `font-size: 3rem`;
    UInavBrand.style.cssText = 'font-size: 2rem';
    UIsearchLabel.style.cssText = 'font-size: 2rem';
    UIdarkModeSwitch.style.cssText = 'font-size:1.2rem;text-align:right; margin-right: 3rem';
    UIdarkModeIcon.style.cssText ='font-size:3rem !important;cursor: pointer;';
    UItemp.style.cssText = 'font-size:4rem !important;';
    UIsecondaryItems.forEach((items) =>{
        items.style.cssText = 'font-size:1.5rem !important';
    })

//Event Listner For Dark Mode
UIdarkModeIcon.addEventListener('click', swtichToggle);



//Toggle function
function swtichToggle(e){
    if(!toggled){
        //Changing to black background
        document.body.style.cssText = "background-color:#303030";
       
        //Changing the Bootstrap primany settings of navabar
        UInavMenu.style.cssText= 'background-color:#424242 !important';

        //Changing the toggle msg and icon color
        UIdarkModeMsg.innerHTML=`<span>Switch To Normal Mode</span>`;
        UIdarkModeMsg.style.cssText = "color:white;";
        UIdarkModeIcon.style.cssText = "color:white;font-size:3rem !important;cursor: pointer;";

        //Changing Search Lable
        UIsearchLabel.style.cssText = "color:#fff;font-size: 2rem;";

        //changing the output variables
        UItemp.style.cssText = 'font-size:4rem !important;color:#fff';
        UIsecondaryItems.forEach((items) =>{
            items.style.cssText = 'font-size:1.5rem !important;color:white';
        })

        toggled=true;
    }else{
        //Changing to white background
        document.body.style.cssText = "background-color:white";

        //Applying the Bootstrap primany settings of navabar
        UInavMenu.style.cssText= 'background-color:#4545ff !important';

        //Changing the toggle msg and icon color
        UIdarkModeMsg.innerHTML=`<span>Switch To Dark Mode</span>`;
        UIdarkModeMsg.style.cssText = "color:black;";
        UIdarkModeIcon.style.cssText = "color:black;font-size:3rem !important;cursor: pointer;";

        //Changing Search Lable
        UIsearchLabel.style.cssText = "color:#000;font-size: 2rem;";

        //changing the output variables
        UItemp.style.cssText = 'font-size:4rem !important;color:#000';
        UIsecondaryItems.forEach((items) =>{
            items.style.cssText = 'font-size:1.5rem !important;color:black';
        })

        toggled = false;
    }
}