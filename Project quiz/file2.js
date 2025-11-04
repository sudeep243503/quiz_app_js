document.addEventListener("DOMContentLoaded",()=>{
    
    const startbtn=document.getElementById("Start");
    const nextbtn=document.getElementById("next");
    const restartbtn=document.getElementById("restart-quiz");
    const questioncontainer=document.getElementById("question-container");
    const questiontext=document.getElementById("question-text");
    const choicelist=document.getElementById("choice-list");
    const resultcontainer=document.getElementById("result-container");
    const scoredisplay=document.getElementById("scoreid");

    const questions=[
        {
            question:"Who scored fastest double hundred?",
            choices:["Rohit Sharma","Chris gayle","Ishan Kishan","Fakhar zaman"],
            answer:"Ishan Kishan",
        },
        {
            question:"First Indian to score century in IPL?",
            choices:["Rohit Sharma","Virender Sehwag","Manish Pandey","Yuvraj Singh"],
            answer:"Manish Pandey",
        },
        {
            question:"Who is the first player to score a century in IPL final?",
            choices:["Wrridhiman Saha","Virender Sehwag","Shane Watson","Rohit Sharma"],
            answer:"Wrridhiman Saha",
        },
        {
            question:"Which team is teased by term lollipop?",
            choices:["SRH","RCB","KKR","CSK"],
            answer:"RCB",
        }

    ]

    let currentquestionindex=0;
    let score=0;

    
    startbtn.addEventListener("click",startquiz)

    nextbtn.addEventListener("click", ()=>{
        currentquestionindex++;
        if(currentquestionindex<questions.length){
            showquestion();
        }else{
            showresult();
        }
    });

    restartbtn.addEventListener("click",restartquiz);

    function startquiz(){
        startbtn.classList.add("hidden");
        resultcontainer.classList.add('hidden');
        questioncontainer.classList.remove('hidden');
        showquestion();
    }

    function showquestion(){
        nextbtn.classList.add('hidden');
        questiontext.textContent=questions[currentquestionindex].question;
        choicelist.innerHTML="";
        questions[currentquestionindex].choices.forEach(ch=>{
            const li=document.createElement('li');
            li.textContent=ch;
            li.addEventListener("click",()=>selectanswer(ch));
            choicelist.appendChild(li);
        });
    }

    function selectanswer(choice){
        const correctanswer=questions[currentquestionindex].answer;
        if(choice==correctanswer){
            score+=5;
        }
        nextbtn.classList.remove("hidden");
    }

     function showresult(){
        questioncontainer.classList.add("hidden");
        resultcontainer.classList.remove("hidden");
        scoredisplay.textContent=`${score} out of 20`;
     }

     function restartquiz(){
        currentquestionindex=0;
        score=0;
        resultcontainer.classList.add("hidden");
        questioncontainer.classList.remove("hidden");
        showquestion(); 
     }





})

 