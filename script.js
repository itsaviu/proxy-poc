window.onload = function() { 
    let path = window.location.href;
    console.log(path);
    const HEADER_STYLE = "padding:28px;font-size:20px;background:greenyellow;border-radius:17px";
    const BORDER_STYLE = "border: 5px solid #ff2d2d;"
    if(path.includes('amazon')) {
        console.log('It is amazon');
        let parent = document.getElementById('nav-logo');
        let child = document.getElementById('nav-logo').firstElementChild;
        let replacer = document.createElement("div");
        parent.replaceChildren(replacer, child);
        replacer.innerText = "Amazon Modified";
        replacer.style.cssText=HEADER_STYLE
        parent.removeChild(child);
        let uri = location.pathname.substring(1)
        if(uri === '') {
            main_page_child = document.getElementById('gw-content-grid')
            main_page_parent = document.getElementById('gw-layout')
            main_page_parent.removeChild(main_page_child)
            main_page_parent.prepend(main_page_child)
            main_page_child.style.cssText = BORDER_STYLE
        } else if( uri === 'gp/bestsellers/' ) {
            document.getElementById('zg_left_col2').style.cssText="float: right;border: 5px solid #ff2d2d;"
            best_history = document.getElementById('rhf')
            best_history.remove()
            best_main_content = document.getElementById('zg')
            best_body = document.getElementsByTagName('body')[0];
            best_body.insertBefore(best_history, best_main_content)
            best_history.style.cssText=BORDER_STYLE
        }   
    } else if(path.includes('ebay')) {
        let uri = location.pathname.substring(1)
        if(uri === '') {
            ebay_header = document.getElementById('gh-l-h1')
            ebay_logo = document.getElementById('gh-la')
            ebay_logo.remove()
            let ebay_replacer = document.createElement("div");
            ebay_replacer.innerText = "Ebay Modified";
            ebay_replacer.style.cssText=HEADER_STYLE
            ebay_header.prepend(ebay_replacer)
            ebay_carousel = document.getElementById('rtm_list1')
            ebay_carousel_replacer = document.createElement('div')
            ebay_carousel_replacer.innerText = "I am the Carousel 🤯"
            ebay_carousel.replaceWith(ebay_carousel_replacer)
            ebay_carousel_replacer.style.cssText="text-align: center;margin-top: 5rem;font-size: 4rem;"
        }
    }  else if(path.includes('better')) {
        better_logo = document.getElementsByClassName('styles_logo-link--corporation__3RnBE')[0]
        let better_replacer = document.createElement("div");
        better_replacer.innerText = "Better.com Modified";
        better_replacer.style.cssText=HEADER_STYLE
        
        // let main = document.querySelector('main');
        // console.log(main.children)
        let uri = location.pathname.substring(1)
        console.log(uri)
        if(uri === '') {
            better_logo.replaceWith(better_replacer)
            let children = document.querySelector('main').children;
            for(var i = 0; i < children.length; i++){
                // console.log(children[i])
                if (children[i].tagName != "HEADER") {
                    let style = ""
                    if(i == 1) {
                        style = "position: relative;top: 0;"
                    }
                    children[i].style.cssText = "margin-left:20%;" + style + BORDER_STYLE
                }
            }
            
            document.getElementsByTagName('footer')[0].style.cssText="margin-left:20%"
            document.getElementsByClassName('styles_nav-link__1P9F7')[0].style.cssText ="margin-left: 4rem;"
            document.getElementsByClassName('styles_mainNav__Albtx')[0].style.cssText = "height: 100vh;width:20%;box-shadow: 0 1px 6px 0 rgb(32 33 36 / 28%);" + BORDER_STYLE
            document.getElementsByClassName('styles_navContent__2aZrc')[0].style.cssText = "display: grid;"
            document.getElementsByClassName('styles_navLinks__10L5C')[0].style.cssText = "display: inline-grid;"
            document.getElementsByClassName('styles_ctas__2CfRX')[0].style.cssText = "display: inline-grid;"
            document.getElementsByClassName('styles_HomeIntro-phoneInner__5yNF8')[0].remove()
            document.getElementsByClassName('styles_HomeHero-textWrapper__3uwox')[0].children[0].style.cssText = "width:100%;text-align:center"
            document.getElementsByClassName('styles_TextLockup-body__oM8iX')[0].style.cssText="max-width:100%"

            let header_children = document.getElementsByClassName('styles_navLinks__10L5C')[0].children
            for(var i = 0; i < header_children.length; i++){
                if(i != 0) {
                    header_children[i].style.cssText = "margin: 1rem 0 1rem 2rem;"
                }
            }
        } else if( uri === 'start') {
            better_logo.replaceWith(better_replacer)
            document.getElementById('startPage').style.cssText="background: #222323;"
            document.getElementsByClassName('styles_StartPage-sectionHolder__X3AbE')[0].style.cssText="grid-template-columns:none;width: 50%;margin: auto;"
            let elements = document.getElementsByClassName('styles_StartPage-section__1QLYL')
            for(let i = 0; i < elements.length; i++) {
                elements[i].style.cssText="width:50%;margin:auto;border-radius:50%"
            }
            elements = document.getElementsByClassName('css-1s4nsni')
            for(let i = 0; i < elements.length; i++) {
                elements[i].style.cssText = "font-size:1px"
            }
        }
        else if( uri != 'preapprovals/purchase' && uri.includes('preapproval')) {
            console.log('start-purchase')
            root = document.getElementById('__next')
            if(root) {
                document.getElementById('__next').addEventListener("DOMCharacterDataModified",
                        function(event) { 
                            nav = document.getElementsByTagName('nav')[0]
                            if(nav) {
                                document.getElementsByTagName('nav')[0].children[0].replaceWith(better_replacer)
                            } else {
                                console.log("Mmmmm .. Nav is not there :(")
                            }
                            content = document.getElementsByClassName('css-8atqhb')[0]
                            if(content) {
                                parent = document.createElement('div')
                                parent.style.cssText="width: 200px;margin: auto;margin-top: 3rem;" + BORDER_STYLE
                                img = document.createElement('img')
                                img.src = "https://images.ctfassets.net/bxq7a6k69auc/7v4G4jc70b59TIbfXl1V0N/b1cdf314a20cc81751aed6f96352c44c/BetterBlogAuthorLogo-500x500px.png"
                                img.width=198
                                text_msg = document.createElement('div')
                                text_msg.innerText = "I am injected dynamically" 
                                parent.appendChild(img)
                                parent.appendChild(text_msg)
                                content.appendChild(parent)
                            }
                    }, )
            }
        }
    }

}