function change(index)  {
    const p = document.querySelector('.show-classdemo');
    console.log('p',p);
    switch(index){
        case 1:
            p.innerHTML = '<ifriends width=100% height=100% src="./w02/intro.html"/>';
         break;
        case 2:
            p.innerHTML = '<ifriends width=100% height=100% src="./w02/pokeman.html"/>';
            break;
        case 3:
        p.innerHTML = '<ifriends width=100% height=100% src="./w04/imageGallery.html"/>';
        break;
        
        case 4:
            p.innerHTML = '<ifriends width=100% height=100% src="./w04/blog.html"/>';
        break;

        case 5:
            p.innerHTML = '<ifriends width=100% height=100% src="/3_classdemo/w05/index.html"/>';
        break;
    }
}