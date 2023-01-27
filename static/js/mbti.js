//#1 main qna result를 연결함
const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");

//#7 질문 단계 숫자 최대
const endPoint = 10;

//#9 결과 페이지 설계
const select = [0,0,0,0];

//#4 a버튼 만들기
function addAnswer(answerText,qIdx,idx){
    var a = document.querySelector(".aBox");
    var answer = document.createElement('button'); /*버튼형식으로 만들기위해*/

    //a버튼 css&애니메이션 적용
    answer.classList.add('answerList');
    answer.classList.add('my-5'); //margin-y
    answer.classList.add('py-3'); //padding-y
    answer.classList.add('mx-auto'); //left&right margin-auto
    answer.classList.add('fadeIn'); //화면 넘어갈때마다 fadeIn
    a.appendChild(answer);

    answer.innerHTML = answerText; //html화면에 answerText연결

    //#5 aBox 클릭시 다음 질문으로 계속 넘어가는 코드
    answer.addEventListener("click", function(){
        var children = document.querySelectorAll('.answerList');
        for(let i=0; i<children.length; i++){
            children[i].disabled = true;

            children[i].style.WebktAnimation = "fadeOut 0.5s"
            children[i].style.animation = "fadeOut 0.5s"
        }
        //#12 timeout 함수 수정
        //1. goNext for문안에 qIdx,i로 변경 = i추가
        //2. addAnswer()에 idx 인자 추가
        //3. select for문 추가
        setTimeout(()=>{ //선택될 때마다 늘려주기
            //타겟 타입별 늘려주기
            var target = qnaList[qIdx].a[idx].type;

            //타겟에 들어있는 모든 타입 1씩 추가
            for(let i=0; i<target.length; i++){
                select[target[i]]+=1
            }

            for(let i=0; i<children.length; i++){
                children[i].style.display = 'none'; //버튼을 안보이게
            }
            goNext(++qIdx);
        },450)
    },false)
}

//#14 14번 다 작성하면 index.html result페이지 부분으로 이동 -> div 작성
function calResult(){ //결과 계산 -> 결과 페이지 그려주기
    var result = select.indexOf(Math.max(...select));
    return result;
}
function setResult(){ //개발자유형 결과 출력 함수
    let point = calResult();

    //#15
    const resultNameIntro = document.querySelector('.resultIntro');
    resultNameIntro.innerHTML = infoList[point].nameIntro; //data.js infoList에서 nameIntro를 가져옴

    const resultName = document.querySelector('.resultName');
    resultName.innerHTML = infoList[point].name;

    //#16 이미지 연결하기
    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector("#resultImg");
    var imgURL = 'img/image-' + point + '.png';

    resultImg.src = imgURL;
    resultImg.alt = point;
    resultImg.classList.add('img-fluid');
    imgDiv.appendChild(resultImg);

    //#17
    const resultDesc1 = document.querySelector('.resultDesc1');
    const resultDescTitle1 = document.querySelector('.resultDescTitle1');
    resultDescTitle1.innerHTML = infoList[point].descTitle1;
    resultDesc1.innerHTML = infoList[point].desc1;
  
    const resultDesc2 = document.querySelector('.resultDesc2');
    const resultDescTitle2 = document.querySelector('.resultDescTitle2');
    resultDescTitle2.innerHTML = infoList[point].descTitle2;
    resultDesc2.innerHTML = infoList[point].desc2;
}

//#11 결과페이지 만들기
function goResult(){ //goStart 함수 내용 복사 qna qna result result qna result로 수정
    qna.style.WebktAnimation = "fadeOut 1s";
    qna.style.animation = "fadeOut 1s";

    setTimeout(()=>{
        result.style.WebktAnimation = "fadeIn 1s";
        result.style.animation = "fadeIn 1s";
        setTimeout(()=>{
            qna.style.display = "none";
            result.style.display = "block";
        },450);
        let qIdx = 0; /*q index*/
        goNext(qIdx);
    },450)

    //#13 개발자유형 결과 페이지로 이동
    setResult();
}

//#3
function goNext(qIdx){
    //#10 endPoint에 도달할 경우 goResult=결과로 이동하는 함수
    if(qIdx == endPoint){
        goResult();
        return;
    }

    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIdx].q; /*시작하기 버튼->질문 나옴*/

    for(let i in qnaList[qIdx].a)
    {
        addAnswer(qnaList[qIdx].a[i].answer,qIdx,i); /*버튼에 질문 연결*/
    }
    
    //#6 질문 단계 숫자 보여주기
    var countStatusNum = document.querySelector('.countStatus');
    countStatusNum.innerHTML = (qIdx+1)+"/"+endPoint;

    //#8 질문 단계 바 만들기
    var status = document.querySelector('.statusBar');
    status.style.width = (100/endPoint)*(qIdx+1)+"%";
}

//#2 웹 화면 애니메이션 적용
function start(){
    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";

    setTimeout(()=>{
        qna.style.WebkitAnimation = "fadeIn 1s";
        qna.style.animation = "fadeIn 1s";
        setTimeout(()=>{
            main.style.display = "none";
            qna.style.display = "block";
        },450);
        let qIdx = 0; /*q index*/
        goNext(qIdx);
    },450);
}