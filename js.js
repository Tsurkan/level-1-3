function DataTable(config, data) {
    // содержимое этой функции вам и нужно написать :)
    let parent = document.querySelector(config.parent);
    let table = document.createElement('table');
   
    let head_tr = document.createElement('tr');
    let th = document.createElement('th');
    th.innerHTML = "№";
    head_tr.appendChild(th);

    for (let i = 0; i < config.columns.length; i++) {
        let th = document.createElement('th');
        th.innerHTML = config.columns[i].title;
        head_tr.appendChild(th);
    }
    table.appendChild(head_tr);
    
    let num = 1;
    for (let i = 0; i < data.length; i++) {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td'); 
        td1.innerHTML = num++;
        tr.appendChild(td1);

        for (let j = 0; j < config.columns.length; j++) {
            let td = document.createElement('td');
            td.innerHTML = data[i][config.columns[j].value]
            tr.appendChild(td)
        }
        table.appendChild(tr);
    }
    parent.appendChild(table);
}
 
const config1 = {
    parent: '#usersTable',
    columns: [
     {title: 'Имя', value: 'name'},
     {title: 'Фамилия', value: 'surname'},
     {title: 'Возраст', value: 'age'},
   ]
 };
 
 const users = [
   {id: 30050, name: 'Вася', surname: 'Петров', age: 12},
   {id: 30051, name: 'Вася', surname: 'Васечкин', age: 15},
 ];
 
 DataTable(config1, users);
 