require( 'dotenv' ).config( )
const express = require( 'express' )
const morgan = require( 'morgan' )
const cors = require( 'cors' )
const helmet = require( 'helmet' )
const movielist = require( './movielist.json' )
const app = express( )

app.use( morgan( 'dev' ) )
app.use( cors( ) )
app.use( helmet( ) )
app.use(function validateBearerToken( req, res, next ) {
  const apiToken = process.env.API_TOKEN
  const authToken = req.get( 'Authorization' )
  
  if ( !authToken || authToken.split( ' ' )[1] !== apiToken ) return res.status( 401 ).json( { error: 'Unauthorized request' } )

  next( )
} )

app.get( '/movie', function handleGetMovie( req, res ) {
    let r = movielist
    const rq = req.query

    if ( rq.genre ) r = r.filter( m => m.genre.toLowerCase( ).includes( rq.genre.toLowerCase( ) ) )

    if ( rq.country ) r = r.filter( m => m.country.toLowerCase( ).includes( rq.country.toLowerCase( ) ) )

    if ( rq.avg_vote ) r = r.filter( m => Number( m.avg_vote ) >= Number( rq.avg_vote ) )

    res.json( r )
} )

const PORT = 9999

app.listen( PORT, ( ) => {
  console.log( `LISTENING AT: http://localhost:${ PORT }` )
} )
