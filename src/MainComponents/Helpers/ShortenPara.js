const shortenPara = (para) => {
    if(para) {
        let paraWeightage =  para.split(' ').join('').length;
        if(paraWeightage < 100) {
          return para
        } else if(paraWeightage < 130) {
          return para.split(' ').slice(0,15).join(' ').concat(' ...')
        } else {
          return para.split(' ').slice(0,25).join(' ').concat(' ...')
        }
      } else {
        return "Loading ..."
      }
    
}

export default shortenPara;