var buttonLength = document.querySelectorAll("button").length;
for (var i = 0; i < buttonLength; i++){
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML

    switch (buttonInnerHTML) {
  case "C":
      var c = new Audio("sounds/key01.mp3")
      c.play();
    break;

    case "C#":
        var cSharp = new Audio("sounds/key02.mp3")
        cSharp.play();
      break;

    case "D":
        var D = new Audio("sounds/key03.mp3")
        D.play();
      break;

    case "D#":
        var dSharp = new Audio("sounds/key04.mp3")
        dSharp.play();
      break;

    case "E":
        var E = new Audio("sounds/key05.mp3")
        E.play();
      break;

    case "F":
        var F = new Audio("sounds/key06.mp3")
        F.play();
      break;

    case "F#":
        var fSharp = new Audio("sounds/key07.mp3")
        fSharp.play();
      break;

    case "G":
          var G = new Audio("sounds/key08.mp3")
          G.play();
        break;

      case "G#":
            var gSharp = new Audio("sounds/key09.mp3")
            gSharp.play();
          break;

      case "A":
              var A = new Audio("sounds/key10.mp3")
              A.play();
            break;

      case "A#":
                var aSharp = new Audio("sounds/key11.mp3")
                aSharp.play();
              break;

      case "B":
                  var B = new Audio("sounds/key12.mp3")
                  B.play();
                break;

      case "C2":
                  var C2 = new Audio("sounds/key13.mp3")
                  C2.play();
                break;
      case "CS2":
                  var CS2= new Audio("sounds/key14.mp3")
                  CS2.play();
                break;
      case "D2":
                  var D2 = new Audio("sounds/key15.mp3")
                  D2.play();
                break;
      case "DS2":
                  var DS2 = new Audio("sounds/key16.mp3")
                  DS2.play();
                break;
      case "E2":
                  var E2 = new Audio("sounds/key17.mp3")
                  E2.play();
                break;
      case "FS2":
                  var FS2 = new Audio("sounds/key18.mp3")
                  FS2.play();
                break;
      case "F2":
                  var F2 = new Audio("sounds/key19.mp3")
                  F2.play();
                break;

      case "G2":
                  var G2 = new Audio("sounds/key20.mp3")
                  G2.play();
                break;
      case "GS2":
                  var GS2 = new Audio("sounds/key21.mp3")
                  GS2.play();
                break;
      case "A2":
                  var A2 = new Audio("sounds/key22.mp3")
                  A2.play();
                break;
      case "AS2":
                  var AS2 = new Audio("sounds/key23.mp3")
                  AS2.play();
                break;
      case "B2":
                  var B2 = new Audio("sounds/key24.mp3")
                  B2.play();
                break;


      default:console.log(buttonInnerHTML);

    }
  })
}
