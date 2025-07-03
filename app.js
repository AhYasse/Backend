const yargs = require("yargs")

const addData = require("./data-program.js")
///////////////////////////////////
yargs.command({
    command: "add",
    describe: "add item.",
    builder : {
        fname : {
        describe: "this is first name", 
        demandOption: true,
        type: "string"
    },
        lname: {
            describe: "this is last name",
            demandOption: true,
            type: "string"
        }
        ,id :{
            describe: "this is item id",
            demandOption: true,
            type : "number"
        },
        age: {
            describe: "this is age command",
            demandOption: true,
            type: "number"

        },
        city: {
            describe: "this is city command",
            demandOption: true,
            type: "string"
        }
    },
   
    
    handler: (x) => {
        addData.addPerson(x.fname, x.lname, x.id, x.age, x.city)
       
        console.log("you have add items")
    }
})
///////////////////////////////////////////////
//list all Data
yargs.command({
     command: "list",
     describe: "show all persons.",
    handler:() => {
         addData.listAllData()
         console.log("test")
    }
})
//list specific Data  by id 
yargs.command({
     command: "listById",
     describe: "show person by id.",
     builder:{
        id:{
            describe : "this is item id",
            demandOption : true,
            type: "number"
        }
     },
    handler:(x) => {
         addData.listDataId(x.id)
    }
})
//show info Data by id (first,last,city)
yargs.command({
     command: "info",
     describe: "show person by id.",
     builder:{
        id:{
            describe : "this is item id",
            demandOption : true,
            type: "number"
        }
     },
    handler:(x) => {
         addData.showInfoData(x.id)
    }
})
///////////////////////////////////////////
//Delete all Data
yargs.command({
    command: "delete",
    describe : "this is delete all data",

    handler: (x) => {
        addData.deleteAllData(x.id, x.fname, x.lname, x.city, x.age)

    }
})
//Delete data by id
yargs.command({
    command: "deleteId",
    describe : "this is delete data by id",
    // builder:{
    //     id:{
    //         describe : "this item id",
    //         demandOption: true,
    //         type: "string"
    //     }
    // },
    handler: (x) => {
        addData.deleteById(x.id)

    }
})
console.log(process.argv)
yargs.argv