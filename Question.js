class Question
{
  constructor()
  {
    this.title = createElement('h1');
    this.input1 = createInput("Type your Name Here");
    this.input2 = createInput("Type correct option no. here")
    this.question= createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }

  display()
  {
    this.title.html("The Quiz");
    this.title.position(350, 0);
    this.input1.position(350, 100)
    this.input2.position(150, 300)

    this.question.html("Which month has 28 days?");
    this.question.position(150, 140);
    this.option1.html("1. February");
    this.option1.position(150, 160);
    this.option2.html("2. None of them");
    this.option2.position(150, 180);
    this.option3.html("3. All of them");
    this.option3.position(150, 200);
    this.option4.html("4. Can not be determined");
    this.option4.position(150, 220);

  }

}