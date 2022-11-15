function liste(list) {
	var dl = document.createElement("dl");
	var dt = document.createElement("dt");
	var dd = document.createElement("dd");
	var ul = document.createElement("ul");
	var li;
    var dtContent = document.createTextNode(list.title);
	var liContent;
    dt.appendChild(dtContent);
	dl.appendChild(dt);
	dl.appendChild(dd);
	dd.appendChild(ul);
	for (var i in list.items) {
		li = document.createElement("li");
		if (typeof list.items[i] == 'string'){
			liContent = document.createTextNode(list.items[i]);
            li.appendChild(liContent);
		}
		else {
            li.appendChild(liste(list.items[i]));
		}
		ul.appendChild(li);
	}
    return dl;
}
function write(i) {
	let list= getDefinition(i);
	var contents = document.getElementById('contents');
	var htmlList = liste(list);
	contents.appendChild(htmlList);

}
window.onload = () => {
    var rad = document.forms[0].list;
    var prev = null;
    var valeur;
    for(var i = 0; i < rad.length; i++) {
        rad[i].onclick = function() {
            if(this !== prev) {
                prev = this;
            }
            valeur = parseInt(prev.value);
            write(valeur);
        }
    }
}