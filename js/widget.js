function getJSON(url) {
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onreadystatechange = handleResponse;
        xhr.onerror = function(error) { reject(error); };
        xhr.send();
 
        function handleResponse() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var employees = JSON.parse(xhr.responseText);
                    resolve(employees);    
                } else {
                    reject(this.statusText);
                }
            }
        }
    });
}

// var ajaxPromise = getJSON('../data/employees.json'); 
// this Ajax Promise doesn't need to be instantiated at all

function generateListItems(employees) {
    var statusHTML = '';
    for (var i = 0; i < employees.length; i++) {
        if (employees[i].inoffice === true) {
            statusHTML += '<li class="in">';
        } else {
            statusHTML += '<li class="out">';
        }
        statusHTML += employees[i].name;
        statusHTML += '</li>';
    }
    return statusHTML;
}

function generateUnorderedList(listItems) {
    return '<ul class="bulleted">' + listItems + '</ul>';
}

function addEmployeesToPage(unorderedList) {
    document.getElementById('employeeList').innerHTML = unorderedList;
    //this is not ideal is hard to read from left to right.
}
 
getJSON('../data/employees.json')
            .then(generateListItems)
            .then(generateUnorderedList)
            .then(addEmployeesToPage)
            .catch(function(e) {
                console.log(e);
            });
