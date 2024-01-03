const userHeight = document.querySelector(".height"); //키
const userWeight = document.querySelector(".weight"); //몸무게
const goals = document.querySelector(".weight2"); //최종목표
let result = document.querySelector('#result'); //결과

result.addEventListener('click',function(){
    console.log(userHeight.value);
    console.log((userHeight.value - 100) * 0.9);
    let result = ((userHeight.value - 100) * 0.9);
    console.log(`적정체중은 ${result}kg이며 ${userWeight.value - result}kg 초과되셨습니다.`);
    goals.value = `적정체중은 ${result}kg이며 ${userWeight.value - result}kg 초과되셨습니다.`;
});