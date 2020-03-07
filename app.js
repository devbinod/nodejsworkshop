

let express = require('express')

let hdb = require('express-handlebars')

let app = express()

app.engine('handlebars',hdb())

app.set('view engine','handlebars')

let studentList =[

{id: 1, firstname: "Ayush",lastname:"karki"},
{id: 2, firstname:"Kishor",lastname:"Majhi"},
{id: 3, firstname:"Pradepti",lastname:"Aryal"},
{id: 4, firstname:"Deena",lastname:"Sitikhu"},
{id: 5, firstname:"Ashray",lastname:"Baral"}



]




app.get("/add",(req,resp) => {
resp.render("addStudent",{
    title:"Add Student"
})

})

app.get("/update", (req,resp) => {

    console.log("student id ++++++", req.query.id)
    resp.redirect('/')

})



app.get("/delete", (req,resp) => {

    let studentid = req.query.id

   let totalStudent = studentList.filter(s => {
        if(s.id!=studentid){
            return s;
        }

    })

    studentList = totalStudent;
    resp.render('index',{

        title:"Student List",
        studentList:totalStudent
    })

})




app.get("/",(req,resp) => {
    resp.render('index',{

        title:"Student List",
        studentList:studentList
    })
})

app.get("/home",(req,resp) => {
    resp.render("home",{

        title:"Home page"
    })
})


app.get("/aboutus",(req,resp) => {
    resp.render("aboutus",
    {
        title:"About us"
    })
})

app.listen(3000,(res,resp) => {

    console.log('your application is running on 3000 port')
})