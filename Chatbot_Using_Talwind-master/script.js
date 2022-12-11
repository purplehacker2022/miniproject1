// left =  <div class="self-start">
//             <p class="pr-1 pl-2 m-1 mr-16 border inline-block  text-indigo-900 text-lg font-bold italic font-serif bg-purple-200 rounded-r-lg text-justify"
//               >Hi, I am Elite </p>
//           </div>
// right = <div class="self-end">
// <p class="pl-1 pr-2 m-1 ml-16 border inline-block text-indigo-900 text-lg font-bold italic font-serif bg-purple-200 rounded-l-lg text-justify"
//   >Hi</p>
// </div>

// option box = <div class="flex flex-col">
// <div class="self-end ">
//   <p class="px-3 cursor-puuuointer m-1 ml-16 border inline-block text-lg font-bold italic font-serif bg-black rounded-full text-justify "
//     onclick="get_element(event)">Hi</p>
// </div>
// <div class="self-end">
//   <p class="px-3 cursor-pointer m-1 ml-16 border inline-block text-lg font-bold italic font-serif bg-black rounded-full text-justify "
//     onclick="get_element(event)">How are you</p>
// </div>
// </div>
var bot_reply = { 
  'Hi': [["How may I help you "],["You want to study","fun","Other","Exit"]],
  'You want to study' : [["Choose your class in which you are"],['Class IXth','Class Xth','Class XIth','Class XIIth','higher education','Thanks','Exit']],
  'Fun' : [['quizzes'],['Thanks',"Exit"]], 







// Class-IX
  'Class IXth':[["Choose you are subject for which you want help"],['Maths-IX','Science-IX','SST-IX','Computer-IX',"Exit"]],
// subjects for 9thclass
  'Maths-IX': [["Choose the source of Study Material"],["Online Notes{Maths-IX}","Online Videos{Maths-IX}","10 Year Pratice Paper{Maths-IX}","Quizzes{Maths-IX}","Exit"]],
  'Science-IX':[["Choose the source of Study Material"],["Online Notes{Science-IX}","Online Videos{Science-IX}","10 Year Pratice Paper{Science-IX}","Quizzes{Science-IX}","Exit"]],
  'SST-IX':[["Choose the source of Study Material"],["Online Notes{SST-IX}","Online Videos{SST-IX}","10 Year Pratice Paper{SST-IX}","Quizzes{SST-IX}","Exit"]],
  'Computer-IX':[["Choose the source of Study Material"],["Online Notes{Computer-IX}","Online Videos{Computer-IX}","10 Year Pratice Paper{Computer-IX}","Quizzes{Computer-IX}","Exit"]],
// notes
  "Online Notes{Maths-IX}":[["here is the url link of the site- "],["Exit"]],
  "Online Notes{Science-IX}":[["here is the url link of the site- "],["Exit"]],
  "Online Notes{SST-IX}":[["here is the url link of the site- "],["Exit"]],
  "Online Notes{Computer-IX}":[["here is the url link of the site- "],["Exit"]],
// videos
  "Online Videos{Maths-IX}":[["here is the url link of the video- "],["https://tinyurl.com/CLASS-9-MATHS-VIDEOS","Exit"]],
  "Online Videos{Science-IX}":[["here is the url link of the video- "],["https://tinyurl.com/CLASS-9-SCIENCE-VIDEOS","Exit"]],
  "Online Videos{SST-IX}":[["here is the url link of the video- "],["https://tinyurl.com/CLASS-9-HISTORY","https://tinyurl.com/CLASS-9-GEOGRAPHY-VIDEOS","https://tinyurl.com/CLASS-9-CIVICS-VIDEOS","https://tinyurl.com/CLASS-9-ECONOMICS-VIDEOS","Exit"]],
  "Online Videos{Computer-IX}":[["here is the url link of the video- "],["https://tinyurl.com/CLASS-9-COMPUTER-VIDEOS","Exit"]],
// pratice paper
  "10 Year Pratice Paper{Maths-IX}":[["here is the url link of papers- "],["Exit"]],
  "10 Year Pratice Paper{Science-IX}":[["here is the url link of papers- "],["Exit"]],
  "10 Year Pratice Paper{SST-IX}":[["here is the url link of papers- "],["Exit"]],
  "10 Year Pratice Paper{Computer-IX}":[["here is the url link of papers- "],["Exit"]],

// quiz
  "Quizzes{Maths-IX}":[["here is the url link of quiz- "],["Exit"]],
  "Quizzes{Science-IX}":[["here is the url link of quiz- "],["Exit"]],
  "Quizzes{SST-IX}":[["here is the url link of quiz- "],["Exit"]],
  "Quizzes{Computer-IX}":[["here is the url link of quiz- "],["Exit"]],









// Class-X
  'Class Xth':[["Choose you are subject for which you want help"],['Maths-X','Science-X','S.S.T-X','Computer-X',"Exit"]],
// subjects for 10th class
  'Maths-X':[["Choose the source of Study Material"],["Online Notes{Maths-X}","Online Videos{Maths-X}","10 Year Pratice Paper{Maths-X}","Quizzes{Maths-X}","Exit"]],
  'Science-X':[["Choose the source of Study Material"],["Online Notes{Science-X}","Online Videos{Science-X}","10 Year Pratice Paper{Science-X}","Quizzes{Science-X}","Exit"]],
  'S.S.T-X':[["Choose the source of Study Material"],["Online Notes{SST-X}","Online Videos{SST-X}","10 Year Pratice Paper{SST-X}","Quizzes{SST-X}","Exit"]],
  'Computer-X':[["Choose the source of Study Material"],["Online Notes{Computer-X}","Online Videos{Computer-X}","10 Year Pratice Paper{Computer-X}","Quizzes{Computer-X}","Exit"]],

// notes
"Online Notes{Maths-X}":[["here is the url link of the site- "],["Exit"]],
"Online Notes{Science-X}":[["here is the url link of the site- "],["Exit"]],
"Online Notes{SST-X}":[["here is the url link of the site- "],["Exit"]],
"Online Notes{Computer-X}":[["here is the url link of the site- "],["Exit"]],
// videos
"Online Videos{Maths-X}":[["here is the url link of the video- "],["Exit"]],
"Online Videos{Science-X}":[["here is the url link of the video- "],["Exit"]],
"Online Videos{SST-X}":[["here is the url link of the video- "],["Exit"]],
"Online Videos{Computer-X}":[["here is the url link of the video- "],["Exit"]],
// pratice paper
"10 Year Pratice Paper{Maths-X}":[["here is the url link of papers- "],["Exit"]],
"10 Year Pratice Paper{Science-X}":[["here is the url link of papers- "],["Exit"]],
"10 Year Pratice Paper{SST-X}":[["here is the url link of papers- "],["Exit"]],
"10 Year Pratice Paper{Computer-X}":[["here is the url link of papers- "],["Exit"]],

// quiz
"Quizzes{Maths-X}":[["here is the url link of quiz- "],["Exit"]],
"Quizzes{Science-X}":[["here is the url link of quiz- "],["Exit"]],
"Quizzes{SST-X}":[["here is the url link of quiz- "],["Exit"]],
"Quizzes{Computer-X}":[["here is the url link of quiz- "],["Exit"]],










// Class XI
  'Class XIth':[["Choose you are stream"],['Science-XI','Commerece-XI','Humanitites-XI',"Exit"]],
// subjects for 11th class
  'Science-XI':[["Choose your subject to study"],["Physics-XI","Maths-XI","Biology-XI","Chemistry-XI","CS OR IT -XI","Exit"]],
  'Commerece-XI':[["Choose your subject to study"],["Business Studies-XI","Accounts-XI","Economics-XI","Maths-XI","Exit"]],
  'Humanitites-XI':[["Choose your subject to study"],["History-XI","Political Science-XI","Sociology-XI","Geography-XI","Economics-XI","Philosophy-XI","Exit"]],

  "Physics-XI":[["Choose the source of Study Material"],["Online Notes{Physics-XI}","Online Videos{Physics-XI}","10 Year Pratice Paper{Physics-XI}","Quizzes{Physics-XI}","Exit"]],
  "Maths-XI":[["Choose the source of Study Material"],["Online Notes{Maths-XI}","Online Videos{Maths-XI}","10 Year Pratice Paper{Maths-XI}","Quizzes{Maths-XI}","Exit"]],
  "Biology-XI":[["Choose the source of Study Material"],["Online Notes{Biology-XI}","Online Videos{Biology-XI}","10 Year Pratice Paper{Biology-XI}","Quizzes{Biology-XI}","Exit"]],
  "Chemistry-XI":[["Choose the source of Study Material"],["Online Notes{Chemistry-XI}","Online Videos{Chemistry-XI}","10 Year Pratice Paper{Chemistry-XI}","Quizzes{Chemistry-XI}","Exit"]],
  "CS OR IT-XI":[["Choose the source of Study Material"],["Online Notes{CS OR IT-XI}","Online Videos{CS OR IT-XI}","10 Year Pratice Paper{CS OR IT-XI}","Quizzes{CS OR IT-XI}","Exit"]],

  "Business Studies-XI":[["Choose the source of Study Material"],["Online Notes{Business Studies-XI}","Online Videos{Business Studies-XI}","10 Year Pratice Paper{Business Studies-XI}","Quizzes{Business Studies-XI}","Exit"]],
  "Accounts-XI":[["Choose the source of Study Material"],["Online Notes{Accounts-XI}","Online Videos{Accounts-XI}","10 Year Pratice Paper{Accounts-XI}","Quizzes{Accounts-XI}","Exit"]],
  "Economics-XI":[["Choose the source of Study Material"],["Online Notes{Economics-XI}","Online Videos{Economics-XI}","10 Year Pratice Paper{Economics-XI}","Quizzes{Economics-XI}","Exit"]],
  
  "Political Science-XI":[["Choose the source of Study Material"],["Online Notes{Political Science-XI}","Online Videos{Political Science-XI}","10 Year Pratice Paper{Political Science-XI}","Quizzes{Political Science-XI}","Exit"]],
  "Histroy-XI":[["Choose the source of Study Material"],["Online Notes{Histroy-XI}","Online Videos{Histroy-XI}","10 Year Pratice Paper{Histroy-XI}","Quizzes{Histroy-XI}","Exit"]],
  "Sociology-XI":[["Choose the source of Study Material"],["Online Notes{Sociology-XI}","Online Videos{Sociology-XI}","10 Year Pratice Paper{Sociology-XI}","Quizzes{Sociology-XI}","Exit"]],
  "Geography-XI":[["Choose the source of Study Material"],["Online Notes{Geography-XI}","Online Videos{Geography-XI}","10 Year Pratice Paper{Geography-XI}","Quizzes{Geography-XI}","Exit"]],


  //Science
// notes
"Online Notes{Maths-XI}":[["here is the url link of the site- "],["Exit"]],
"Online Notes{Physics-XI}":[["here is the url link of the site- "],["Exit"]],
"Online Notes{Chemistry-XI}":[["here is the url link of the site- "],["Exit"]],
"Online Notes{Biology-XI}":[["here is the url link of the site- "],["Exit"]],
"Online Notes{CS OR IT-XI}":[["here is the url link of the site- "],["Exit"]],
// videos
"Online Videos{Maths-XI}":[["here is the url link of the video- "],["Exit"]],
"Online Videos{Physics-XI}":[["here is the url link of the video- "],["Exit"]],
"Online Videos{Chemistry-XI}":[["here is the url link of the video- "],["Exit"]],
"Online Videos{Biology-XI}":[["here is the url link of the video- "],["Exit"]],
"Online Videos{CS OR IT-XI}":[["here is the url link of the video- "],["Exit"]],
// pratice paper
"10 Year Pratice Paper{Maths-XI}":[["here is the url link of papers- "],["Exit"]],
"10 Year Pratice Paper{Physics-XI}":[["here is the url link of papers- "],["Exit"]],
"10 Year Pratice Paper{Chemistry-XI}":[["here is the url link of papers- "],["Exit"]],
"10 Year Pratice Paper{Biology-XI}":[["here is the url link of papers- "],["Exit"]],
"10 Year Pratice Paper{CS OR IT-XI}":[["here is the url link of papers- "],["Exit"]],

// quiz
"Quizzes{Maths-XI}":[["here is the url link of quiz- "],["Exit"]],
"Quizzes{Physics-XI}":[["here is the url link of quiz- "],["Exit"]],
"Quizzes{Chemistry-XI}":[["here is the url link of quiz- "],["Exit"]],
"Quizzes{Biology-XI}":[["here is the url link of quiz- "],["Exit"]],
"Quizzes{CS OR IT-XI}":[["here is the url link of quiz- "],["Exit"]],









// ClassXII
  'Class XIIth': [["Choose you are stream"],['Science-XII','Commerece-XII','Humanitites-XII',"Exit"]],
// subject for 12th class

  'Science-XII':[["Choose your subject to study"],["Physics-XII","Maths-XII","Biology-XII","Chemistry-XII","CS OR IT -XII","Exit"]],
  'Commerece-XII':[["Choose your subject to study"],["Business Studies-XII","Accounts-XII","Economics-XII","Maths-XII","Exit"]],
  'Humanitites-XII':[["Choose your subject to study"],["History-XII","Political Science-XII","Sociology-XII","Geography-XII","Economics-XII","Philosophy-XII","Exit"]],

  "Physics-XII":[["Choose the source of Study Material"],["Online Notes{Physics-XII}","Online Videos{Physics-XII}","10 Year Pratice Paper{Physics-XII}","Quizzes{Physics-XII}","Exit"]],
  "Maths-XII":[["Choose the source of Study Material"],["Online Notes{Maths-XII}","Online Videos{Maths-XII}","10 Year Pratice Paper{Maths-XII}","Quizzes{Maths-XII}","Exit"]],
  "Biology-XII":[["Choose the source of Study Material"],["Online Notes{Biology-XII}","Online Videos{Biology-XII}","10 Year Pratice Paper{Biology-XII}","Quizzes{Biology-XII}","Exit"]],
  "Chemistry-XII":[["Choose the source of Study Material"],["Online Notes{Chemistry-XII}","Online Videos{Chemistry-XII}","10 Year Pratice Paper{Chemistry-XII}","Quizzes{Chemistry-XII}","Exit"]],
  "CS OR IT-XII":[["Choose the source of Study Material"],["Online Notes{CS OR IT-XII}","Online Videos{CS OR IT-XII}","10 Year Pratice Paper{CS OR IT-XII}","Quizzes{CS OR IT-XII}","Exit"]],

  "Business Studies-XII":[["Choose the source of Study Material"],["Online Notes{Business Studies-XII}","Online Videos{Business Studies-XII}","10 Year Pratice Paper{Business Studies-XII}","Quizzes{Business Studies-XII}","Exit"]],
  "Accounts-XII":[["Choose the source of Study Material"],["Online Notes{Accounts-XII}","Online Videos{Accounts-XII}","10 Year Pratice Paper{Accounts-XII}","Quizzes{Accounts-XII}","Exit"]],
  "Economics-XII":[["Choose the source of Study Material"],["Online Notes{Economics-XII}","Online Videos{Economics-XII}","10 Year Pratice Paper{Economics-XII}","Quizzes{Economics-XII}","Exit"]],
  
  "Political Science-XII":[["Choose the source of Study Material"],["Online Notes{Political Science-XII}","Online Videos{Political Science-XII}","10 Year Pratice Paper{Political Science-XII}","Quizzes{Political Science-XII}","Exit"]],
  "Histroy-XII":[["Choose the source of Study Material"],["Online Notes{Histroy-XII}","Online Videos{Histroy-XII}","10 Year Pratice Paper{Histroy-XII}","Quizzes{Histroy-XII}","Exit"]],
  "Sociology-XII":[["Choose the source of Study Material"],["Online Notes{Sociology-XII}","Online Videos{Sociology-XII}","10 Year Pratice Paper{Sociology-XII}","Quizzes{Sociology-XII}","Exit"]],
  "Geography-XII":[["Choose the source of Study Material"],["Online Notes{Geography-XII}","Online Videos{Geography-XII}","10 Year Pratice Paper{Geography-XII}","Quizzes{Geography-XII}","Exit"]],

//Science
// notes
"Online Notes{Maths-XII}":[["here is the url link of the site- "],["Exit"]],
"Online Notes{Physics-XII}":[["here is the url link of the site- "],["Exit"]],
"Online Notes{Chemistry-XII}":[["here is the url link of the site- "],["Exit"]],
"Online Notes{Biology-XII}":[["here is the url link of the site- "],["Exit"]],
"Online Notes{CS OR IT-XII}":[["here is the url link of the site- "],["Exit"]],
// videos
"Online Videos{Maths-XII}":[["here is the url link of the video- "],["Exit"]],
"Online Videos{Physics-XII}":[["here is the url link of the video- "],["Exit"]],
"Online Videos{Chemistry-XII}":[["here is the url link of the video- "],["Exit"]],
"Online Videos{Biology-XII}":[["here is the url link of the video- "],["Exit"]],
"Online Videos{CS OR IT-XII}":[["here is the url link of the video- "],["Exit"]],
// pratice paper
"10 Year Pratice Paper{Maths-XII}":[["here is the url link of papers- "],["Exit"]],
"10 Year Pratice Paper{Physics-XII}":[["here is the url link of papers- "],["Exit"]],
"10 Year Pratice Paper{Chemistry-XII}":[["here is the url link of papers- "],["Exit"]],
"10 Year Pratice Paper{Biology-XII}":[["here is the url link of papers- "],["Exit"]],
"10 Year Pratice Paper{CS OR IT-XII}":[["here is the url link of papers- "],["Exit"]],

// quiz
"Quizzes{Maths-XII}":[["here is the url link of quiz- "],["Exit"]],
"Quizzes{Physics-XII}":[["here is the url link of quiz- "],["Exit"]],
"Quizzes{Chemistry-XII}":[["here is the url link of quiz- "],["Exit"]],
"Quizzes{Biology-XII}":[["here is the url link of quiz- "],["Exit"]],
"Quizzes{CS OR IT-XII}":[["here is the url link of quiz- "],["Exit"]],














  'higher education':[["Choose your aim"],["JEE Mains","JEE Advance","NEET","Exit"]],
  "JEE Mains":[[]],
  "JEE Advance":[[]],
  "NEET":[[]],
  "Exit":[[]],
  'Thanks': [['Your welcome'],["Exit"]],
  'Other': [["Visit to Our Contact Us Page","contact our members"],['Thanks']] 
};

  var loder = `<div class="self-start ">
  <img class="w-20 my-1" src="./assets/output-onlinegiftools.gif" alt="text loding">
</div>`

function get_element(event) {
  var target = event.target || event.srcElement;
  var value = target.innerHTML;
  var children = document.getElementById('bot_chat_box').children;
  // console.log(children[0]);
  // console.log(children);
  var child_element_str = "";
  for (let i = 0; i < children.length - 1; i++) {
      child_element_str = child_element_str + children[i].outerHTML;
      // var temp = children[i].outerHTML;
      // console.log(temp);
  }
  // console.log(child_element_arr);

  child_element_str = child_element_str + `<div class="self-end">
  <p class="pl-1 pr-2 m-1 ml-16 border inline-block text-indigo-900 text-lg font-bold italic font-serif bg-purple-200 rounded-l-lg text-justify"
    >${value}</p>
  </div>`;
  // adding loder
  child_element_str = child_element_str+loder;
  document.getElementById('bot_chat_box').innerHTML = child_element_str;
  var div = document.getElementById('bot_chat_box');
  div.scrollTop = div.scrollHeight - div.clientHeight;
  
  // sleeping 

  children = document.getElementById('bot_chat_box').children;
  // console.log(children[0]);
  // console.log(children);
  child_element_str = "";
  for (let i = 0; i < children.length - 1; i++) {
      child_element_str = child_element_str + children[i].outerHTML;
      // var temp = children[i].outerHTML;
      // console.log(temp);
  }
  // console.log(child_element_arr);

  setTimeout(() => {
      var temp_reply_ques = bot_reply[value];
      child_element_str = child_element_str + `<div class="self-start">
      <p class="pr-1 pl-2 m-1 mr-16 border inline-block  text-indigo-900 text-lg font-bold italic font-serif bg-purple-200 rounded-r-lg text-justify"
        >${temp_reply_ques[0][0]}</p>
    </div>`;
  
    if(temp_reply_ques[0].length==2){
      child_element_str = child_element_str + `<div class="self-start">
      <p class="pr-1 pl-2 m-1 mr-16 border inline-block  text-indigo-900 text-lg font-bold italic font-serif bg-purple-200 rounded-r-lg text-justify"
        ><a href=${temp_reply_ques[0][1]}>${temp_reply_ques[0][1]}</a></p>
    </div>`;
    }
      var question = "";
      for (let i = 0; i < temp_reply_ques[1].length; i++) {
          question = question + `<div class="self-end ">
          <p class="px-3 cursor-pointer m-1 ml-16 border inline-block text-lg font-bold italic font-serif bg-black rounded-full text-justify "
            onclick="get_element(event)">${temp_reply_ques[1][i]}</p>
        </div>`;
      }
      child_element_str = child_element_str + `<div class="flex flex-col">
      ${question}
      </div>`;
  
      document.getElementById('bot_chat_box').innerHTML = child_element_str;
      var div = document.getElementById('bot_chat_box');
      div.scrollTop = div.scrollHeight - div.clientHeight;
      // console.log(child_element_arr)
  
}, 500);

  
}


function toggle_chatbot(){
      document.getElementById('chatbot_icon').classList.toggle("hidden");
      document.getElementById('chatbot_box').classList.toggle("hidden");

}