$(document).on('turbolinks:load', function(){
  // To hide buttons when not on home page to scroll to where needed.
  var className = $('.home_div').attr('class');
  var nameName = $('.comp_sec').attr('class');
  var blogName = $('.blog_show').attr('class');
  if(className) {
    $('.press').css("display","show");
    $('.press2').css("display","none");
    $('.press3').css("display","none");
    $('.press4').css("display","show");
    $('.press5').css("display","none");
  } else if(nameName) {
   $('.press').css("display","none");
    $('.press2').css("display","none");
    $('.press3').css("display","show");
    $('.press4').css("display","none");
    $('.press5').css("display","show");
  } else if(blogName) {
   $('.press').css("display","none");
    $('.press2').css("display","none");
    $('.press3').css("display","none");
    $('.press4').css("display","show");
    $('.press5').css("display","show");
  } else {
    $('.press').css("display","none");
    $('.press2').css("display","show");
    $('.press3').css("display","none");
    $('.press4').css("display","none");
  }
  // Scroll to the field needed
  $(".press").click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
  });
  var mess = $('.mess_bod').attr('class')
  if (mess) {
    window.scrollTo(0,document.body.scrollHeight, 'slow');
  }

  var id = $("#clientIdinput").val()
  Survey.defaultBootstrapMaterialCss.navigationButton = "btn btn-warning";
  Survey.defaultBootstrapMaterialCss.rating.item = "btn btn-default my-rating";
  Survey.Survey.cssType = "bootstrapmaterial";
  var surveyJSON = {"locale":"en","title":{"en":"Screening Assessment"},"completedHtml": "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>", "pages":[{"name":"page1","title":"Click on the Start button to take Assesment"},{"name":"page2","elements":[{"type":"radiogroup","name":"Question 1","isRequired": true,"title":{"en":"When communicating with seniors or seniors’s family, you SHOULD"},"correctAnswer":"item2","choices":[{"value":"item1","text":{"en":"Try to mediate the family's problems"}},{"value":"item2","text":{"en":"Listen to concern and offer support"}},{"value":"item3","text":{"en":"Offer advice about the clients medical treatment"}}]}],"description":{"en":"Communication and interpersonal skills"}},{"name":"page3","elements":[{"type":"radiogroup","name":"Question 2","isRequired": true,"title":{"en":"What are the main components for successful communication?"},"correctAnswer":"item1","choices":[{"value":"item1","text":{"en":"A sender, a message and a receiver"}},{"value":"item2","text":{"en":"Pronunciation, articulation and intelligence"}},{"value":"item3","text":{"en":"Stimulus, control center, place"}}]}],"description":{"en":"Communication and interpersonal skills"}},{"name":"page4","elements":[{"type":"radiogroup","name":"Question 3","isRequired": true,"title":{"en":"If a patient speaks a different language, how can you communicate?"},"correctAnswer":"item2","choices":[{"value":"item1","text":{"en":"Learn the language"}},{"value":"item2","text":{"en":"Use gestures and visual aids"}},{"value":"item3","text":{"en":"Wait till a family member can translate"}}]}],"description":{"en":"Communication and Interpersonal skills"}},{"name":"page5","elements":[{"type":"checkbox","name":"question2","isRequired": true,"title":{"en":"You get to a seniors house, the door is locked and the senior will not pick up your calls, what should you do ?"},"correctAnswer":["item1","item2"],"choices":[{"value":"item1","text":{"en":"Knock on the door and wait for response"}},{"value":"item2","text":{"en":"Call the senior again"}},{"value":"item3","text":{"en":"Go in without permission"}}]}],"description":{"en":"Communication and Interpersonal Skills"}},{"name":"page6","elements":[{"type":"radiogroup","name":"Question 5","isRequired": true,"title":{"en":"A senior complains of pain in the left chest, what should you do?"},"correctAnswer":"item2","choices":[{"value":"item1","text":{"en":"Call 911"}},{"value":"item2","text":{"en":"Tell the senior to call and report to his/her doctor immediately"}},{"value":"item3","text":{"en":"Administer a pain reliever"}}]}],"description":{"en":"Safety and precaution"}},{"name":"page7","elements":[{"type":"radiogroup","name":"Question 6","isRequired": true,"title":{"en":"Why should you wash your hands when you get to a seniors house and when you leaving the seniors house"},"correctAnswer":"item1","choices":[{"value":"item1","text":{"en":"To prevent spread of illeness"}},{"value":"item2","text":{"en":"To reinforce manners"}},{"value":"item3","text":{"en":"Remind the senior of childhood"}}]}],"description":{"en":"Safety and precaution"}},{"name":"page8","elements":[{"type":"radiogroup","name":"Question 7","isRequired": true,"title":{"en":"A senior needs to be transferred from his/her chair to the wheelchair. What action must you take?"},"correctAnswer":"item2","choices":[{"value":"item1","text":{"en":"Lock the wheel chair after the transfer"}},{"value":"item2","text":{"en":"Lock the wheel chair before the transfer"}},{"value":"item3","text":{"en":"Locking the wheel chair is not necessary"}}]}],"description":{"en":"Moving seniors around"}},{"name":"page9","elements":[{"type":"radiogroup","name":"Question 8","isRequired": true,"title":{"en":"Which of the following is true about speaking with a senior wearing a hearing aid?"},"correctAnswer":"item1","choices":[{"value":"item1","text":{"en":"Speak loud and slowly"}},{"value":"item2","text":{"en":"Ignore, because you think he/she is pretending"}},{"value":"item3","text":{"en":"Speak fast and rush your words"}}]}],"description":{"en":"Communicaation and interpersonal skills"}},{"name":"page10","elements":[{"type":"radiogroup","name":"Question 9","isRequired": true,"title":{"en":"If you notice a senior forgets things easily or a family member tells you that it occurs sometimes, what should you do to help reality orientation around the senior"},"correctAnswer":"item1","choices":[{"value":"item1","text":{"en":"Call the senior by name"}},{"value":"item2","text":{"en":"Tell them stories"}},{"value":"item3","text":{"en":"Talk to the senior about your interest"}}]}],"description":{"en":"Care plan and activity"}},{"name":"page11","elements":[{"type":"radiogroup","name":"Question 10","isRequired": true,"title":{"en":"Which is NOT an example of clarification?"},"correctAnswer":"item3","choices":[{"value":"item1","text":{"en":"Could you please say that again"}},{"value":"item2","text":{"en":"I am not sure I understand what you said"}},{"value":"item3","text":{"en":"Tell me more of your old memories"}}]}],"description":{"en":"Communication and interpersonal Skills"}},{"name":"page13","elements":[{"type":"radiogroup","name":"question3","isRequired": true,"title":{"en":"Which is not an example of a open ended question"},"correctAnswer":"item2","choices":[{"value":"item1","text":{"en":"Tell me about your grandchild"}},{"value":"item2","text":{"en":"Do you like the view from here?"}},{"value":"item3","text":{"en":"What will you do when you get home?"}}]}],"description":{"en":"Communication and Interpersonal skills"}},{"name":"page14","elements":[{"type":"radiogroup","name":"question4","isRequired": true,"title":{"en":"When asking questions, a good rule to remember is to"},"correctAnswer":"item1","choices":[{"value":"item1","text":{"en":"Ask one question at a time"}},{"value":"item2","text":{"en":"Start with a difficult one"}},{"value":"item3","text":{"en":"Make it easy with a yes or no"}}]}],"description":{"en":"Communicationa and Interpersonal Skills"}},{"name":"page15","elements":[{"type":"radiogroup","name":"question5","isRequired": true,"title":{"en":"Touching a seniors body without the seniors consent is what"},"correctAnswer":"item1","choices":[{"value":"item1","text":{"en":"Assault"}},{"value":"item2","text":{"en":"Battery"}},{"value":"item3","text":{"en":"Nothing"}}]}],"description":{"en":"Safety and Precautions"}},{"name":"page16","elements":[{"type":"radiogroup","name":"question6","isRequired": true,"title":{"en":"How can you show that you are listening to a senior"},"correctAnswer":"item3","choices":[{"value":"item1","text":{"en":"Change the conversation frequently"}},{"value":"item2","text":{"en":"Correct the seniors mistake"}},{"value":"item3","text":{"en":"Respond when listening"}}]}],"description":{"en":"Communication and Interpersonal Skills"}},{"name":"page17","elements":[{"type":"radiogroup","name":"question7","isRequired": true,"title":{"en":"What basic need is most essential?"},"correctAnswer":"item2","choices":[{"value":"item1","text":{"en":"Self esteem"}},{"value":"item2","text":{"en":"Security and safety"}},{"value":"item3","text":{"en":"Love and belonging"}}]}],"description":{"en":"Safety and Precaution"}}],"triggers":[{"type":"setvalue","operator":"equal","name":"question1"},{"type":"complete","operator":"equal","value":"finish","name":"question7"}],"sendResultOnPageNext":true,"questionsOrder":"random","showProgressBar":"bottom","startSurveyText":{"en":"Start Assessment"},"pagePrevText":{"en":"Previous Question"},"pageNextText":{"en":"Next Question"},"completeText":{"en":"Complete Assessment"},"questionStartIndex":"1","firstPageIsStarted":true,"showTimerPanel":"none","showTimerPanelMode":"survey","clientId": `${id}`}

  function sendDataToServer(survey) {
      survey.sendResult(`${surveyPostId}`)
  };

  var survey = new Survey.Model(surveyJSON);
  $("#surveyContainer").Survey({
      model: survey,
      onComplete: sendDataToServer
  });
  $('.slideshow').slick({
    infinite: true,
    autoplay: true,
    dots: true,
    arrows: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true,
    mobileFirst: true
  });
  $('.cal_but').tooltip()

  var _pfy = _pfy || [];(function(){function pfy_load(){var pfys=document.createElement('script');pfys.type='text/javascript';pfys.async=true;pfys.src='https://widget.prefinery.com/widget/v2/bjcljd0s.js';var pfy=document.getElementsByTagName('script')[0];pfy.parentNode.insertBefore(pfys,pfy);}if (window.attachEvent){window.attachEvent('onload',pfy_load);}else{window.addEventListener('load',pfy_load,false);}})();

});
