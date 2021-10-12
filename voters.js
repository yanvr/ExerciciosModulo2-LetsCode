const votes = [ {name:'Bob' , age: 30, voted: true}, {name:'Jake' , age: 32, voted: true}, {name:'Kate' , age: 25, voted: false}, {name:'Sam' , age: 20, voted: false}, {name:'Phil' , age: 21, voted: true}, {name:'Ed' , age:55, voted:true}, {name:'Tami' , age: 54, voted:true}, {name: 'Mary', age: 31, voted: false}, {name: 'Becky', age: 43, voted: false}, {name: 'Joey', age: 41, voted: true}, {name: 'Jeff', age: 30, voted: true}, {name: 'Zack', age: 19, voted: false} ]

const checkAge = (voter, startAge, endAge) => 
                      voter.age >= startAge && voter.age <= endAge;

const handler = ageRange => (result, voter) => ({
  ...result,
  [ageRange] : {
    peoplesVotes: 
      voter.voted ?
        result[ageRange].peoplesVotes + 1 :
        result[ageRange].peoplesVotes,
    peoples: result[ageRange].peoples + 1
  } 
})

const youngHandler = handler('young')
const midHandler = handler('mid')
const oldHandler = handler('old')

const YOUNG = {startAge: 18, type: 'young', endAge: 25, handler: youngHandler};
const MID = {startAge: 26, type: 'mid', endAge: 35, handler: midHandler};
const OLD =  {startAge: 36, type: 'old', endAge: 55, handler: oldHandler};

const objAges = {YOUNG, MID, OLD}

const getResults = votes.reduce((result, voter) => {
    for (const ageRange of Object.values(objAges)){
      if (checkAge(voter, ageRange.startAge, ageRange.endAge)){
        return ageRange.handler(result, voter)
      }
        
    }
}, 
    {
       'young' : {peoples: 0, peoplesVotes: 0},
       'mid' : {peoples: 0, peoplesVotes: 0},
       'old' : {peoples: 0, peoplesVotes: 0}
    }
)

console.log(getResults)