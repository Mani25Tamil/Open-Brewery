let url=`https://api.openbrewerydb.org/v1/breweries`
console.log(url)

var cityName=document.getElementById('cityName')

/*function selectOption()
{
    var stype=document.getElementById('dropdown').value
    console.log(stype)
}*/


var itemList=document.getElementById('itemList')


function createTableRow(value1,value2,value3,value4,value5,value6,value7,id){
   // itemList.innerHTML=" "
    console.log(id)
    var tr=document.createElement('tr')
    var td1=document.createElement('td')
    var td2=document.createElement('td')
    var td3=document.createElement('td')
    var td4=document.createElement('td')
    var td5=document.createElement('td')
    var td6=document.createElement('td')
    var td7=document.createElement('td')
   /* td1.setAttribute('id',`name${id}`)
    td2.setAttribute('id',`brewery_type${id}`)
    td3.setAttribute('id',`address_1${id}`)
    td4.setAttribute('id',`website_url${id}`)*/

    td1.innerHTML=value1;
    td2.innerHTML=value2;
    td3.innerHTML=value3;
    td4.innerHTML=value4;
    td5.innerHTML=value5;
    td6.innerHTML=value6;
    td7.innerHTML=value7;
    tr.append(td1,td2,td3,td4,td5,td6,td7)
    itemList.append(tr)
}

function cldata(){
    document.getElementById('itemList').innerHTML=" "

}

function changeopt(){
    let dropdown = document.getElementById('dropdown');
         // get the index of the selected option
         let selectedIndex = dropdown.selectedIndex;
         // get a selected option and text value using the text property
         let selectedValue = dropdown.options[selectedIndex].text;
         console.log(selectedValue)
         var btval=document.getElementById('Bt')
         btval.placeholder=`Enter ${selectedValue}`
}

function slectsearch(val,skey){
       switch(val){
        
        case "Name":
            return(` https://api.openbrewerydb.org/v1/breweries?by_name=${skey}`)
        case "Type":
            return(` https://api.openbrewerydb.org/v1/breweries?by_type=${skey}`)
        case "State":
            return(` https://api.openbrewerydb.org/v1/breweries?by_state=${skey}`)
        case "City":
            return(` https://api.openbrewerydb.org/v1/breweries?by_city=${skey}`)
        }
     }



// async await
// Read

async function getData(){
    let data=await fetch(url)
    let res=await data.json()
    console.log(res)
    console.table(res)

    res.map((element)=>{
        console.log(element)
        createTableRow(element.name,element.brewery_type,element.state,element.city,element.address_1,
            element.website_url,element.phone,element.id)
    })
}




async function search(){

    try{
    cldata()
    var stype=document.getElementById('dropdown').value
    var skey=document.getElementById('Bt').value
    console.log(skey)
    console.log(stype)
   
    
    let data=await fetch(slectsearch(stype,skey))
    let res=await data.json()
    console.log(res)

    
    res.map((element)=>{
        createTableRow(element.name,element.brewery_type,element.state,element.city,element.address_1,
            element.website_url,element.phone,element.id)
    })
    }
    catch(err){
        console.log("Error Found:",err)
        itemList.append("No Data Found")
}
}




