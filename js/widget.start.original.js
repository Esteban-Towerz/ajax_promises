var xhr = XMLHttpRequest();
xhr.open('GET', '../data/employees.json');
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        var employees = JSON.parse(xhr.responseText);
        var statusHTML = '<ul class="bulleted">';
        for (let i=0; i<employees.length; i += 1) {
            if (employees[i].inoffice = true) {
                statusHTML += '<li class="in">';
            } else {
                statusHTML += '<li class="on">';
            }
            statusHTML += employees[i].name;
            statusHTML += '</li>';
        }
        statusHTML += '</ul>';
        document.getElementById('employeeList').innerHTML = statusHTML;
    }
};
xhr.send();