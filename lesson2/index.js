const fs = require('fs')
const { clearScreenDown } = require('readline')

fs.exists( 'demo2', (err) =>{


    if(err){

        console.log(err)
    }else{

        console.log('Successfully')
    }
})