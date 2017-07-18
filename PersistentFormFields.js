function BindLocalStorage(){
            console.log("Setting up local storage...");

             /*
             * when a form field changes store it's value in local storage
             */            

            var inputTag = document.getElementsByTagName('input');
            for (var i = inputTag.length - 1; i >= 0; i--) {
                var id = inputTag[i].getAttribute("id");
                //console.log(id);                
                //console.log(value);
                if (typeof(Storage) !== "undefined") {
                    var value = localStorage.getItem(id);
                    inputTag[i].value = value;
                }

                inputTag[i].oninput = function() { 
                    var id = this.getAttribute("id");                    
                    //console.log(id);
                    localStorage.setItem(id,this.value);
                    var value = localStorage.getItem(id);
                    //console.log("Local: "+value);
                };
            } 
			$("input").trigger('input'); // Use for Chrome/Firefox/Edge
			//input.trigger('change'); // Use for Chrome/Firefox/Edge + IE11
};

(function() {
    'use strict';
    BindLocalStorage();
    $(document).ready(function () {            
            BindLocalStorage();
        });        
})();
