console.log("var ds = new App.DataStore();");

var ds = new App.DataStore();
console.log(ds);

console.log("ds.add('m@bond.com', 'tea');");
console.log(ds.add('m@bond.com', 'tea'));

console.log("ds.add('james@bond.com', 'eshpressho');");
console.log(ds.add('james@bond.com', 'eshpressho'));

console.log("ds.getAll();");
console.log(ds.getAll());

console.log("ds.remove('james@bond.com');")
console.log(ds.remove('james@bond.com'));

console.log("dc.getAll();");
console.log(ds.getAll());

console.log("ds.get('m@bond.com');");
console.log(ds.get('m@bond.com'));

console.log("ds.get('james@bond.com');");
console.log(ds.get('james@bond.com'));
