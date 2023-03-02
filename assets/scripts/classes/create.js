class Create {

    /**
     * egy elem létrehozása
     * 
     * @param {object} o 
     * @param {string} body 
     * @returns 
     */
    createElement(o, body) {
        this.element = document.createElement(o.tag);
        
        element.setAttribute("id", o.id)
        element.setAttribute("class", o.cls);
        
        let attrs = o.attributes || {}
        for (const key in attrs)
            element.setAttribute(key, attrs[key]);

        if (o.datakey)
            element.setAttribute(o.datakey, o.dataval);
        if (body)
            element.innerText = body;
        
        

        return element;
    }
    
    appendChild(child){
        this.element(child.element)
    }
}

let newElement = new Create({
    id: "lista",
    tag: "ul",
    parentElement: "#content" // selector ebbe rendereli bele a peldanyt
    attributes:{
        name: "sajatlista"
    },
    children: [
    ]
})
