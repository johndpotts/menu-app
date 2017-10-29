
/*saving different sections as variables*/
const viewAll = document.getElementById('view-all-items');

const addItem = document.getElementById('add-an-item');

const viewSection = document.getElementById('view-section');

const addSection = document.getElementById('add-section');

const navigation = document.querySelector('.navigation');

const appetizers = document.getElementById("appetizers");

const entrees = document.getElementById("entrees");

const desserts = document.getElementById("desserts");

const drinks = document.getElementById("drinks");

const itemCategory = document.querySelector("#add-item-form #category");

const itemName = document.querySelector("#add-item-form #item");

const itemDescription = document.querySelector("#add-item-form #description");

const itemPrice = document.querySelector("#add-item-form #price");

const itemHealthy = document.querySelector("#add-item-form #healthy");

var items = [
  {item:"Fish Tacos",
description: "yummy fish tacos with mango salsa",
price:"5.00",
healthy: "yes",
category:"entrees",
id:1
},
{item:"Chips and Hummus",
description: "fresh baked pita chips with pine nut hummus",
price:"3.00",
healthy: "yes",
category:"appetizers",
id:2
},
{item:"Lemon Sorbet",
description: "a light, soothing citrus explosion",
price:"2.00",
healthy: "yes",
category:"dessert",
id:3
},
{item:"White Wine",
description: "a white wine; goes well with fish tacos!",
price:"2.00",
healthy: "yes",
category:"drinks",
id:4
},
{item:"Deep fried grease burgers",
description: "So good that you can feel your arteries close as you eat it",
price:"6.00",
healthy: "no",
category:"entrees",
id:5
},
{item:"Cheese wedge",
description: "Really just a big hunk of cheese",
price:"4.00",
healthy: "no",
category:"appetizers",
id:6
},
{item:"Super Fudge Cake",
description: "One slice weighs 5 lbs. So good yet so heavy.",
price:"10.00",
healthy: "no",
category:"dessert",
id:7
},
{item:"Beer",
description: "a bland and generic yet highly original craft beer. Only hipsters can taste the difference!",
price:"3.00",
healthy: "no",
category:"drinks",
id:8
}
];

window.onLoad= getItems();

/*using event delegation to assign click handler to section rather than individual links*/
navigation.addEventListener('click',
function(event){
if(!event.target.classList.contains('selected')){
viewAll.classList.toggle("selected");
addItem.classList.toggle("selected");
viewSection.classList.toggle("hidden");
addSection.classList.toggle("hidden");
getItems();
}
}
);




function saveItem() {
  if (itemName.value == "") {
      alert("Please provide an item name");
      return false;
}
if (itemPrice.value == "") {
    alert("Please provide an item price");
    return false;
}
if (itemDescription.value == "") {
    alert("Please provide an item description");
    return false;
}

var newItem = {}
newItem.item = itemName.value;
newItem.price = itemPrice.value;
newItem.description = itemDescription.value;
newItem.healthy = itemHealthy.value;
newItem.category = itemCategory.value;
newItem.id = items.length+1;

console.log(newItem);
items.push(newItem);
getItems();
viewAll.click();
alert("Your item has been added!")
  };


function  getItems() {
appetizers.innerText = "";
entrees.innerText = "";
desserts.innerText = "";
drinks.innerText = "";

for (const item of items){

    const tr = document.createElement("tr");
      const tdItem = document.createElement("td");
      const tdDescription = document.createElement("td");
      const tdPrice = document.createElement("td");
      const tdHealthy = document.createElement("td");
      const tdEditDelete = document.createElement("td");

      tdItem.innerText = item.item;
      tdDescription.innerText = item.description;
      tdPrice.innerText = item.price;
      tdHealthy.innerText = item.healthy;
      tdEditDelete.innerHTML = "<button class = 'delete'  onclick='deleteItem("+item.id+")'>Delete</button><button class = 'delete' data-popup-open='popup-edit' onclick='deleteItem("+item.id+")'>Edit</button>"

      tr.appendChild(tdItem);
      tr.appendChild(tdDescription);
      tr.appendChild(tdPrice);
      tr.appendChild(tdHealthy);
        tr.appendChild(tdEditDelete);


  if (item.category == "appetizers"){appetizers.appendChild(tr);}
    if (item.category == "entrees"){entrees.appendChild(tr);}
      if (item.category == "dessert"){desserts.appendChild(tr);}
        if (item.category == "drinks"){drinks.appendChild(tr);}
}


};


function deleteItem(id){
  if(confirm("Do you really want to delete this item?"))
  {items = items.filter(function(a){return a.id != id;});
}
  getItems();
};




/*
$('[data-popup-open]').on('click', function(e)  {
    var targeted_popup_class = jQuery(this).attr('data-popup-open');
    $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

    e.preventDefault();
});

//----- CLOSE
$('[data-popup-close]').on('click', function(e)  {
    var targeted_popup_class = jQuery(this).attr('data-popup-close');
    $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

    e.preventDefault();
});
*/
