import React, { Component } from 'react'

export default class Duplicates extends Component {

  componentWillMount = () => {
    const emails = this.props.emails
    this.getEmailList(emails)
  }

  getEmailList = (emails) => {
    const compareList = emails.map((email, i) => {
      const testAgainstArray = [...emails]
      testAgainstArray.splice(testAgainstArray.indexOf(name), 1)
      const testArray = testAgainstArray.map((item) => {
        item.split("")})

      const emailArray = email.split('')
      console.log(emailArray)
    
      const letterCheck = emailArray.map((emailLetter)=> {
        // console.log(emailLetter)
        // //array to array of arrays
        // const testEmail = singleEmailFromTestArray.split('')     
        // //string to array  
        // const originalEmail = email.split('')        
        
        // let counter = 0
        // const closeMatch = []

        // //for the length of the testEmail Array (which includes arrays of letters)
        // for (let j=0; j < testEmail.length; j++) {
        //   if(testEmail[i] !== originalEmail[j]) {
        //     counter ++
        //     // testEmail.splice()
        //   }
        // }

        // if (testEmail[i] !== originalEmail[i]){
        //     counter ++
        //     testEmail.splice(i, 1)
        //     counter ++
        //   }
        // if(counter > 0) {
        //   const test = testEmail.join('')
        //   const original = originalEmail.join('')
        //   closeMatch.push(test)
        //   closeMatch.push(original)
        // }
        // return closeMatch
      })

    return (letterCheck)
    })
  }

  render() {
    
    return (
      <div>
        <h4>Possible Duplicates</h4>

      </div>
    )
  }
}
