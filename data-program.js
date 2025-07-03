const fs = require("fs")



//add Data to the file by command and wirte to the json file
const addPerson = (fname, lname, id, age, city) => {
    const allData = loadData()

    allData.push({
        fname : fname,
        lname,
        id : id,
        age: age,
        city: city 
    }
    )

    // const saveData = savaData(allData)
    savaData(allData)

}
//End

//list to all Data and show it
const listAllData = () => {
    const allData = loadData()
    allData.forEach((obj) => {
        console.log(obj.fname, obj.lname, obj.age, obj.city, obj.id)
    });
}
//list to specific Data by id
const listDataId = (id) => {
    const allData = loadData()
    const person = allData.find((obj) =>
        { return obj.id == id} )
     if (person) {
        console.log(person)
    } else {
        console.log("Person not found with ID:", id)
    }
    
}
//show littel info
 const showInfoData = (id) => {
    const allData = loadData()

    const person = allData.find((obj) =>
        { return obj.id == id} )
      if (person) {
        console.log(person)
    } else {
        console.log("Person not found with ID:", id)
    }
}
//End
//Delete all people 
const deleteAllData = () => {
    const allData = loadData()

    const deleteAll = allData.filter((obj)  =>{
        return obj  == []
    })
    savaData(deleteAll)
}
//Delete by id
const deleteById = (id) => {
    const allData = loadData()

    const dataKept = allData.filter((obj)  =>{
        return obj.id  !== id
    })
    savaData(dataKept)
}


//child functions:

//1:load/read Data and convert it form json to object
const loadData = () => {
    try{
              const dataInfo = fs.readFileSync("data.json").toString()

              return JSON.parse(dataInfo)
    }
    
    catch {
        return []
    }
}
//End
//2: convert data form object to json and wirte to the same file
const savaData = (allData) => {

    const dataJson  = JSON.stringify(allData)
    
    // const dataInfo = fs.writeFileSync("data.json")

    fs.writeFileSync("data.json", dataJson)

    
}
//End

//Exports
module.exports = {
    addPerson,
    listAllData,
    listDataId,
    deleteAllData,
    deleteById,
    showInfoData
}