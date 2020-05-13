
class RandomString {

     generate_random_string(string_length){
        let random_string = '';
        let random_ascii;
        let ascii_low = 65;
        let ascii_high = 90
        for(let i = 0; i < string_length; i++) {
            random_ascii = Math.floor((Math.random() * (ascii_high - ascii_low)) + ascii_low);
            random_string += String.fromCharCode(random_ascii)
        }
        return random_string
    }

    getRandomUserEmail(domain = "mailinator.com"){
  
        return this.generate_random_string(10)+"@"+domain;
        
      }

       getRandomPeopel(){
        return {
        // email:getRandomEmail(),
         FirstName:this.generate_random_string(5),
         LastName:this.generate_random_string(5)
      
          
        }
     
    
}

export default RandomString;
