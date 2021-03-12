function newProjectExpand(anchor) {
    
    let projectInput = document.createElement("div");
    projectInput.classList.add("projectNewButtonPressed");
    anchor.appendChild(projectInput);

    let input = document.createElement("input");
    input.setAttribute("class", "projectInput");
    input.setAttribute("type", "text");
    input.setAttribute("id", "newProject");
    projectInput.appendChild(input);
    input.focus();

    let buttonAdd = document.createElement("div");
    buttonAdd.setAttribute("class", "addButton");
    buttonAdd.setAttribute("id", "projectSubmit");
    buttonAdd.textContent = "Add";
    anchor.appendChild(buttonAdd);

    return {input, buttonAdd};

}

// Module resposible for rendering new project inputs.
// DOM elements are returned. 
// Event listeners are added locally as they need access to local function: addToProjectsList.



export default newProjectExpand