let path = window.location.href
if(path.includes('amazon')) {
    console.log('It is amazon')
    let parent = document.getElementById('nav-logo')
    let child = document.getElementById('nav-logo').firstElementChild
    let replacer = document.createElement("div")
    parent.replaceChildren(replacer, child)
    replacer.innerText = "Modified"
    replacer.style.padding="28px"
    replacer.style.fontSize="20px"
    replacer.style.background="greenyellow";
    replacer.style.borderRadius="17px"
    parent.removeChild(child);

} else if(path.includes('relicx')) {
    document.getElementById("sidebar-container").style.right=0
    document.getElementsByClassName('makeStyles-pageContent-2')[0].style.marginLeft=0
    document.getElementsByClassName('makeStyles-pageContent-2')[0].style.width="80vw"
} else {
    body = document.getElementsByTagName('body')[0];
    notcreated = document.createElement('marquee')
    notcreated.innerText = 'NO SCRIPT TO MODIFY THE WEBSITE'
    notcreated.style.background="greenyellow"
    notcreated.style.zIndex="1000"
    notcreated.style.position="absolute"
    body.prepend(notcreated)
    console.log('Random website !!!')
}

