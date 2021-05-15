const transition_time = 333;
var viewport = document.querySelector('.viewport'),
navigating = false;
function changeView(page){
    if(navigating == false){
        let newView = `view-${page}`;
        if(!viewport.classList.contains(newView)){
            navigating = true;
            if(viewport.classList.contains('view-landing')){
                viewport.className = `viewport ${newView}`;
                setTimeout(() => {
                    navigating = false;
                }, transition_time);
            }
            else{
                viewport.className = 'viewport view-landing';
                setTimeout(() => {
                    viewport.className = `viewport ${newView}`;
                    setTimeout(() => {
                        navigating = false;
                    }, transition_time);
                }, transition_time);
            }
        }
    }
}