if (phase == "train") {
			$("#instructions").hide();
			$("#testingstage").hide();

  			experiment.targetword = experiment.words.pop();

  			experiment.targetshape = experiment.shapes.pop();
  			experiment.targetcolor = experiment.colors.pop();

			
  			if (experiment.observationtype == "grey") {
  				$("#object1").attr("src", "stim-images/object" + experiment.targetshape + "grey.jpg");
				$("#object2").attr("src", "stim-images/object" + experiment.targetshape + "grey.jpg");
				$("#object3").attr("src", "stim-images/object" + experiment.targetshape + "grey.jpg");
				$("#instructions").html("The " + experiment.targetword[0] + " tree makes " + experiment.targetword[1] + ", but these " + experiment.targetword[1] + " have lost their color. Look at the " + experiment.targetword[1] + ".");
  			} else if (experiment.observationtype == "33") {
  				var distractorcolor = experiment.colors.pop();
  				var colors = [experiment.targetcolor, distractorcolor, distractorcolor];
  				colors = shuffle(colors);
  				$("#object1").attr("src", "stim-images/object" + experiment.targetshape + colors[0] + ".jpg");
				$("#object2").attr("src", "stim-images/object" + experiment.targetshape + colors[1] + ".jpg");
				$("#object3").attr("src", "stim-images/object" + experiment.targetshape + colors[2] + ".jpg");
				$("#instructions").html("The " + experiment.targetword[0] + " tree makes " + experiment.targetword[1] + ". Look at the " + experiment.targetword[1] + ".");
  			} else if (experiment.observationtype == "66") {
  				var distractorcolor = experiment.colors.pop();
  				var colors = [experiment.targetcolor, experiment.targetcolor, distractorcolor];
  				colors = shuffle(colors);
  				$("#object1").attr("src", "stim-images/object" + experiment.targetshape + colors[0] + ".jpg");
				$("#object2").attr("src", "stim-images/object" + experiment.targetshape + colors[1] + ".jpg");
				$("#object3").attr("src", "stim-images/object" + experiment.targetshape + colors[2] + ".jpg");
				$("#instructions").html("The " + experiment.targetword[0] + " tree makes " + experiment.targetword[1] + ". Look at the " + experiment.targetword[1] + ".");
  			}


			$("#object1").show();
			$("#object2").show();
			$("#object3").show();

	    	$("#instructions").show();

		    $("#trainingstage").fadeIn();

		    experiment.starttime = Date.now();


		} else 





		  <div class="slide" id="trainingstage">
      <div id="instructions"> </div>
      <center>
      <div class="row">
        <div class="col-xs-4">
          <img id="object1" class="img-responsive" style="padding:30">
        </div>
        <div class="col-xs-4">
          <img id="object2" class="img-responsive" style="padding:30">
        </div>
        <div class="col-xs-4">
          <img id="object3" class="img-responsive" style="padding:30">
        </div>
        <div class="col-xs-4">
          <img id="object4" class="img-responsive" style="padding:30">
        </div>
      </div>
    </center>

      <center><button type="button" id="tosearchbutton">Next</button></center>
  </div>




  if (experiment.counter == 1) {
				$( "#sobject1" ).click(function() {
					experiment.numclicks++;
				});
				$( "#sobject2" ).click(function() {
					experiment.numclicks++;
				});
				$( "#sobject3" ).click(function() {
					experiment.numclicks++;
				});
				$(targetobject).click(function() {
					$(targetobject).css({"border-color": "#000000", 
         			"border-width":"2px", 
         			"border-style":"solid"});

					clickDisabled = false;
	  				$( "#totestbutton" ).attr('disabled', false);
				});
			}






			attnwords = [experiment.targetword[0], experiment.words.pop()[0], experiment.words.pop()[0], experiment.words.pop()[0]];
		attnwords = shuffle(attnwords);

        for(i=0;i<attnwords.length;i++){
            thisOne = attnwords[i];
            $("#attnCheckResponses").append("<input class='attnAnswer' type=radio name='foo' id=" +thisOne+ ">")
            $("#attnCheckResponses").append("<label for=" +thisOne+ "> " +thisOne+ " </label><br>")
        }

        showSlide("attnCheck")

        $("#attnCheckButton").click(function(){
            $('.attnAnswer').each(function(){
                if(this.checked){
                	experiment.attnselected = this.id;              
                }
            })
            experiment.processOneRow();
            experiment.end() 
        })