const express = require('express');
const app = express();



const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const expressHbs = require('express-handlebars');
app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');

const static = express.static;
app.use(static('public'));




//ROUTE TO HOMEPAGE
app.get('/', (req,res) => {
    res.render('homepage')
})


//ROUTE TO ALL THE DECKS
app.get('/deck', (req,res) => {
    res.render('decks-page')
    //get all the decks
});

//ROUTE TO ADD NEW DECK
app.get('/newdeck', (req, res) => {
    // res.send('new-deck-page')
    //Show a form for a new deck
    res.render('new-deck-page')
}) 

//ROUTE TO INDIVIDUAL DECK
app.get('/deck/:deckid', (req,res) => {
    res.render('deck-detail-page')
    //get all the cards for one deck
});

//ROUTE TO ADD A NEW CARD
app.get('/deck/:deckid/newcard', (req,res) => {
    // res.send("You want a new card!")
    //Show a form for a new card
    res.render('new-card-page')
})

app.post('/deck/:deckid/newcard', (req ,res) => {
    res.send('You submited the form')
    //add the 'question', 'answer', 'image' as a new card into the deck
    // res.redirect('/deck/:deckid');
})

//ROUTE TO TEST QUESTION
app.get('/deck/:deckid/test/:cardid', (req,res) => {
    //get one card from specific deck
    // res.send('You got to answer this')
    res.render('test-page')
})


app.listen( 3000, () => {
    console.log('You have a happy server!')
})






