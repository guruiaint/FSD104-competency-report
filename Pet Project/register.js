var salon={
    name:"Fashionable Furry Friends",
    address:{
        street:"Wallaby Way",
        number: "42",
    },
    hours:{
        open:"9:00am",
        closed:"5:00pm",
    },
    pets:[]
}

var c=0;
class Pet{
    constructor(name,age,breed,gender,service,ownerName,contactPhone){
        this.name=name;
        this.age=age;
        this.breed=breed;
        this.gender=gender;
        this.service=service;
        this.ownerName=ownerName;
        this.contactPhone=contactPhone;
        this.id=c++;
    }
}

function displayPet(){
    var tmp="";
    console.log(salon.pets.length)
    document.getElementById("info").innerHTML=`<p>Amount of Pets: ${salon.pets.length}</p>`;
    for(var i=0;i<salon.pets.length;i++){
        
        tmp+=`
        <tr id="${salon.pets[i].id}" class="pet">
            <td class="pet-title">
                <td> Name: ${salon.pets[i].name}</td>
            </td>
            <td> Age: ${salon.pets[i].age}</td>
            <td> Breed: ${salon.pets[i].breed}</td>
            <td> Gender: ${salon.pets[i].gender}</td>
            <td> Service: ${salon.pets[i].service}</td>
            <td> Owner Name: ${salon.pets[i].ownerName}</td>
            <td> Contact Number: ${salon.pets[i].contactPhone}<button onclick="deletePet(${salon.pets[i].id});">🗑️</button></td>
        </tr>`;
    }
    document.getElementById("pets").innerHTML=tmp;       
}

function deletePet(id){
    var div=document.getElementById(id);
    for(var i=0;i<salon.pets.length;i++){
        var aPet=salon.pets[i];
        if(aPet.id==id){
            deleteIndex=i;
        }
    }
    salon.pets.splice(deleteIndex,1);
    div.remove();
    displayPet();
}

function validation(i1,i2,i3,i4,i5,i6,i7){
    if(i1!="" && i2!=""&& i3!=""&& i4!=""&& i5!=""&& i6!=""&& i7!=""){
        var flag=true;
    }
    return flag;
}

function registerPet(){
    //get and store the values
    var inputName=document.getElementById("petName").value;
    var inputAge=document.getElementById("petAge").value;
    var inputBreed=document.getElementById("petBreed").value;
    var inputGender=document.getElementById("petGender").value;
    var inputService=document.getElementById("petServices").value;
    var inputOwnerName=document.getElementById("petOwnerName").value;
    var inputContactPhone=document.getElementById("petContactPhone").value;
    //console.log(inputName,inputAge,inputBreed,inputGender,inputService,inputOwnerName,inputContactPhone);
    //create the generic pet(object)
    if(validation(inputName,inputAge,inputBreed,inputGender,inputService,inputOwnerName,inputContactPhone)){
    var thePet=new Pet(inputName,Number(inputAge),inputBreed,inputGender,inputService,inputOwnerName,inputContactPhone);
    //push the object into the array
    salon.pets.push(thePet);
    //clear the inputs
    clearInputs();
    displayPet();
    var element=document.getElementById('alert');
    element.classList.remove("hide");
    setTimeout(function(){
        element.classList.add("hide");
    },3000);
    }else{
        var fail=document.getElementById('fail');
    fail.classList.remove("hide");
    setTimeout(function(){
        fail.classList.add("hide");
    },3000);
    }
}

//clear the inputs (function)
function clearInputs(){
    document.getElementById("petName").value="";
    document.getElementById("petAge").value="";
    document.getElementById("petBreed").value="";
    document.getElementById("petGender").value="";
    document.getElementById("petOwnerName").value="";
    document.getElementById("petContactPhone").value="";
}

function displayAmountPets(){
    console.log(salon.pets.length);
}
function searchPet(){
    //getting the search string
    var searchString=document.getElementById('searchPet').value;
    //travel the array to search string
    salon.pets.forEach(pet => {
        var petBox=document.getElementById(pet.id);
        console.log(petBox)
        //compare search string with all names
        if(pet.name.toLowerCase().includes(searchString.toLowerCase()) || pet.service.toLowerCase().includes(searchString.toLowerCase())){
            //highlight element in DOM
            petBox.classList.add('show');
        }else{
            console.log('Not Here');
            petBox.classList.remove('show');
            petBox.classList.add('hide');
        }
    });   
}
function init(){
    console.log("init");
    var Elsa=new Pet("Elsa",5,"Bogle","Female","Grooming","Wendy","555-555-5555");
    var Max=new Pet("Max",13,"American Short Hair","Male","Nails","Wendy","555-555-5555");
    var Ruby=new Pet("Ruby",13,"American Short Hair","Female","Nails","Wendy","555-555-5555");
    var Kitten=new Pet("Kitten",7,"Manx","Female","De-Shed","Wendy","555-555-5555");
    salon.pets.push(Elsa);
    salon.pets.push(Max);
    salon.pets.push(Ruby);
    salon.pets.push(Kitten);
    displayPet();
    //hook events
    document.querySelector('#btn-register').addEventListener("click",registerPet);
    document.querySelector('#searchPet').addEventListener("keyup",searchPet);
    /*document.querySelector(`.pet`).addEventListener(`mouseover`,function(){
        document.querySelector(`.pet`).setAttribute(`class`,`selected`);
    })*/
}
window.onload=init;