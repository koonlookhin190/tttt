const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const app = express();

const databaseName = "gindaijaiduayDB";

const PORT = 8080;
const HOST = '0.0.0.0';

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.set('views', __dirname + '/views');

// const menuSchema = {
//     name: String,
//     prize: Number,
//     image: String,
// };

const menuSchema = {
    appit: Object,
    mainD: Object,
    bev: Object,
    des: Object,
}

const Menu = mongoose.model("Menu", menuSchema);

mongoose.connect(`mongodb://localhost:27017/${databaseName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});



const appi = [
    {
        name: "Crab Louie",
        prize: "100",
        image: "/image/frontend-Pic/appi/Crab Louie.jpg",
    },
    {
        name: "Dungeness crab cake",
        prize: "100",
        image: "/image/frontend-Pic/appi/Dungeness crab cake.jpg",
    },
    {
        name: "Lomi-lomi salmon",
        prize: "100",
        image: "/image/frontend-Pic/appi/Lomi-lomi salmon.jpg",
    },
    {
        name: "Pu pu platte",
        prize: "100",
        image: "/image/frontend-Pic/appi/Pu pu platte.jpg",
    },
    {
        name: "Rocky Mountain oysters",
        prize: "100",
        image: "/image/frontend-Pic/appi/Rocky Mountain oysters.jpg",
    },
    {
        name: "Shrimp cocktail",
        prize: "100",
        image: "/image/frontend-Pic/appi/Shrimp cocktail.jpg",
    }
]

const main = [
    {
        name: "Beef steak",
        prize: "100",
        image: "/image/frontend-Pic/main/Beef steak.jpg"
    },
    {
        name: "Beef stew",
        prize: "100",
        image: "/image/frontend-Pic/main/Beef stew.jpg"

    },
    {
        name: "Lobster Bisque",
        prize: "100",
        image: "/image/frontend-Pic/main/Lobster Bisque.jpg"

    },
    {
        name: "Macaroni and Cheese",
        prize: "100",
        image: "/image/frontend-Pic/main/Macaroni and Cheese.jpg"
    },
    {
        name: "Paella",
        prize: "100",
        image: "/image/frontend-Pic/main/Paella.jpg"
    },
    {
        name: "Spaghetti",
        prize: "100",
        image: "/image/frontend-Pic/main/Spaghetti.jpg"
    }
];

const dessert = [
    {
        name: "Chocolate Cake with Ganache",
        prize: "100",
        image: "/image/frontend-Pic/dessert/Chocolate Cake with Ganache.jpeg"
    },
    {
        name: "Chocolate Pudding",
        prize: "100",
        image: "/image/frontend-Pic/dessert/Chocolate Pudding.jpg"

    },
    {
        name: "Chocolate strawwberry crumble ball",
        prize: "100",
        image: "/image/frontend-Pic/dessert/Chocolate strawwberry crumble ball.jpg"

    },
    {
        name: "Coconut _ Mango Panna Cotta",
        prize: "100",
        image: "/image/frontend-Pic/dessert/Coconut _ Mango Panna Cotta.jpg"
    },
    {
        name: "Red Velvet and Vanilla Cream Pudding",
        prize: "100",
        image: "/image/frontend-Pic/dessert/Red Velvet and Vanilla Cream Pudding.jpeg"
    },
    {
        name: "Tiramisu",
        prize: "100",
        image: "/image/frontend-Pic/dessert/Tiramisu.jpg"
    }
] 

const beverege = [
    {
        name: "Appletini",
        prize: "100",
        image: "/image/frontend-Pic/Drink/Appletini.jpg"
    },
    {
        name: "Bahama Mama",
        prize: "100",
        image: "/image/frontend-Pic/Drink/Bahama Mama.jpg"

    },
    {
        name: "Bay Breeze",
        prize: "100",
        image: "/image/frontend-Pic/Drink/Bay Breeze.jpg"

    },
    {
        name: "Cape Codder",
        prize: "100",
        image: "/image/frontend-Pic/Drink/Cape Codder.jpg"
    },
    {
        name: "Dirty Shirley",
        prize: "100",
        image: "/image/frontend-Pic/Drink/Dirty Shirley.jpg"
    },
    {
        name: "Shirley Temple",
        prize: "100",
        image: "/image/frontend-Pic/Drink/Shirley Temple.jpg"
    }
]

const menu = new Menu({
    appit: appi,
    mainD: main,
    bev: beverege,
    des: dessert,
})

Menu.insertMany(menu);

app.get("/", function (req, res) {
    res.render('welcome');
})

app.get("/SelectTable", function (req, res) {
    res.render('SelectTable');
})

app.get("/index", function (req, res) {
   
        res.render('index', {
            mainListItems: menu.mainD,
            bevListItems: menu.bev,
            desListItems: menu.des,
            appListItems: menu.appit,
        });
   
}); 
app.post("/index", function(req,res){
    const search = (req.body.searchtext);
    console.log(search); 
    res.send('text : ' + search);
});
   
app.listen("3000", () => {
    console.log("Server is running on Port 3000.");
}); 