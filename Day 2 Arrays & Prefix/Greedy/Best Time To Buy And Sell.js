var maxProfit_v1 = function(prices) { // time o(n+n)
  let nextMax=[],curMax=0;
  // make array to know next max element if i in arr[i] then nextMax[i+1] is biggest number after i
  for(let i=prices.length-1;i!=-1;i--){// if we have prices like 7,1,5,3,6,4 Then nextMax = 7,6,6,6,6,4
    curMax=Math.max(prices[i],curMax);
    nextMax.unshift(curMax);
  }
  let maxPro=0;
  // we will iterate through array in each element suppose that is buy price and need best sell price for it to calculate its profit 
  for(let i=0;i<prices.length;i++){
    let curBuy = prices[i],curSell=0,curprofit=0;
    if(i!==prices.length-1)
      curSell= nextMax[i+1];
    curprofit=curSell-curBuy;
    maxPro = curprofit> maxPro?curprofit:maxPro;
  }
  return maxPro;
};

var maxProfit = function (prices){// time o(n) with two pointers technique
  let left = 0 , right = 1,maxPro=0; // left pointer represent index of smallest value untill now , right get next element ,
  for(;right<prices.length;right++){
    if(prices[right]-prices[left] > 0 ){// if we have profit then update max profit
      maxPro=Math.max(maxPro,prices[right]-prices[left]);
    }
    else
      left=right;// if we havn't profit this means that value in right index smaller than left one so update left 
  }
  return maxPro;
}
let prices = [7,1,5,3,6,4];
console.log(maxProfit(prices));//5