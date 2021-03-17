window.onload = function() { 
    let path = window.location.href;
    console.log(path);
    if(path.includes('amazon')) {
        console.log('It is amazon');
        let parent = document.getElementById('nav-logo');
        let child = document.getElementById('nav-logo').firstElementChild;
        let replacer = document.createElement("div");
        parent.replaceChildren(replacer, child);
        replacer.innerText = "Amazon Modified";
        replacer.style.cssText="padding:28px;font-size:20px;background:greenyellow;border-radius:17px"
        parent.removeChild(child);
        let uri = location.pathname.substring(1)
        if(uri === '') {
            main_page_child = document.getElementById('gw-content-grid')
            main_page_parent = document.getElementById('gw-layout')
            main_page_parent.removeChild(main_page_child)
            main_page_parent.prepend(main_page_child)
            main_page_child.style.cssText = "border: 5px solid #ff2d2d;"
        } else if( uri === 'gp/bestsellers/' ) {
            document.getElementById('zg_left_col2').style.cssText="float: right;border: 5px solid #ff2d2d;"
            best_history = document.getElementById('rhf')
            best_history.remove()
            best_main_content = document.getElementById('zg')
            best_body = document.getElementsByTagName('body')[0];
            best_body.insertBefore(best_history, best_main_content)
            best_history.style.cssText="border: 5px solid #ff2d2d;"
        }   
    } else if(path.includes('ebay')) {
        let uri = location.pathname.substring(1)
        if(uri === '') {
            ebay_header = document.getElementById('gh-l-h1')
            ebay_logo = document.getElementById('gh-la')
            ebay_logo.remove()
            let ebay_replacer = document.createElement("div");
            ebay_replacer.innerText = "Ebay Modified";
            ebay_replacer.style.cssText="padding:28px;font-size:20px;background:greenyellow;border-radius:17px"
            ebay_header.prepend(ebay_replacer)
            ebay_carousel = document.getElementById('rtm_list1')
            ebay_carousel_replacer = document.createElement('div')
            ebay_carousel_replacer.innerText = "I am the Carousel 🤯"
            ebay_carousel.replaceWith(ebay_carousel_replacer)
            ebay_carousel_replacer.style.cssText="text-align: center;margin-top: 5rem;font-size: 4rem;"
        }
    } 
}