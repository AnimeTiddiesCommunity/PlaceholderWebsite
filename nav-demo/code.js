const transition_time = 500;
var viewport = document.querySelector('.viewport'),
navigating = false;
directMode = false;
window.onload = () => {
    document.body.classList.add('page-transitions-ready')
}
function toggleMode(){
    directMode = !directMode;
}
function changeView(page){
    if(navigating == false){
        let newView = `view-${page}`;
        if(!viewport.classList.contains(newView)){
            navigating = true;
            if(viewport.classList.contains('view-landing') || directMode == true){
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