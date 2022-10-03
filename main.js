// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//Returns objects that contains specimenNum and dna
const pAequorFactory = (specimenNum,dna) => {

  obj = {
    specimenNum,
    dna,

    //Mutates the dna strands so that it is different from existing strands
    mutate: function (){
      const randomDNA = Math.floor(Math.random() * this.dna.length);

      switch (this.dna[randomDNA]){

        case 'A':
          const dnaBasesA = ['T', 'C', 'G'];
          this.dna[randomDNA] = dnaBasesA[Math.floor(Math.random() * 3)];
          break;
      
        case 'T':
          const dnaBasesT = ['A', 'C', 'G'];
          this.dna[randomDNA] = dnaBasesT[Math.floor(Math.random() * 3)];
          break;

        case 'C':
          const dnaBasesC = ['A', 'T', 'G'];
          this.dna[randomDNA] = dnaBasesC[Math.floor(Math.random() * 3)];
          break;

        case 'G':
          const dnaBasesG = ['A', 'C', 'T'];
          this.dna[randomDNA] = dnaBasesG[Math.floor(Math.random() * 3)];
          break;

      }

      return this.dna;

    },
    //Compares dna and prints the percentage of commonality
    compareDNA: function(pAequor) {
      let common = [];
      let percentage = 0;
      const one = this.specimenNum;
      const two = pAequor.specimenNum;
      for(let i = 0; i<this.dna.length; i++){
        for (let j = 0; j<pAequor.dna.length; j++){
          if(i === j && this.dna[i] === pAequor.dna[j]){
            common.push(this.dna[i]);
          }
        }
      }

      percentage = Math.floor(common.length/this.dna.length * 100);

      console.log(`specimen #${one} and specimen #${two} have ${percentage}% DNA in common`);
        
    },
    //Returns true if 60% chance of survival; otherwise false
    willLikelySurvive: function(){

      let count = 0;
      for(let i = 0; i<this.dna.length; i++){

        if(this.dna[i] === 'G' || this.dna[i] === 'C'){
          count += 1
        }
      }

      if(count/this.dna.length >= 0.6){
        return true;
      }
      return false;
    }
  }

  return obj;
};


// Generates thirty specimans that have a chance to likey survive.
let willSurvive = [];

let counter = 1;

while(counter <= 30){
  let organism = pAequorFactory(counter, mockUpStrand());

  if (organism.willLikelySurvive()){
    counter ++;
    willSurvive.push(organism);
  }
};


console.log(willSurvive);






