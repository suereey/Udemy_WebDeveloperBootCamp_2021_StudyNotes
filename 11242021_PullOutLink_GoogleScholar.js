// Lei get google scholar link

//Step 1 get all links
// getElement is not commonly used, query selector is often used
const allLinks = document.getElementsByClassName('gsc_a_at')

for (let link of allLinks) {
    console.log(link.href)
}

//Step 2 go into each link 

//extract out the author name
const allAuthor = document.querySelector('.gsc_oci_value'); //select by class name

textContent = allAuthor.textContent; //get all author names, the return type is string

typeof(textContent) //return "string"

// the author names are stored as a list, example
// 'Mohammad Noori, Haifeng Wang, Wael A Altabey, Ahmad IH Silik'