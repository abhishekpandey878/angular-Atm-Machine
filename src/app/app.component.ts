import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  constructor() {

  }

   ngOnInit() {
     //this.atmCardNum();
  }

  //cardnum = (/^[0-9]{16}$/);
	correct_pass = (/^[0-9]{4}$/);
	passTry = 3;
  currentBalance = 35000;

    // Input a Card Number
atmCardNum() {
let	cardnum = prompt("Enter your Card No.");
	if (cardnum !== "" && cardnum !== null) {
		this.atmPassword();
	} else {
		this.atmCardNum();
	}
}

// Input a valid password
atmPassword() {
	let pswEntry = parseInt(prompt("Dear User, enter your 4 digit PIN"));
	this.checkPassword(pswEntry);
}
// Verify Password meets requirements
checkPassword(userInput) {
    if (this.correct_pass.test(userInput)){
        this.withdrawal();
    } else {
        while (!(this.correct_pass.test(userInput))) {
            if (this.passTry === 1) {
				alert("Incorrect PIN.");
            	alert("Maximum tries exceeded! Your account has been locked. Contact your bank for support."); 
                this.exit();
                break;
            } else {
				this.passTry -= 1;
				alert("Incorrect PIN. Please try again.");
				alert("You have " + this.passTry + " chance/s to try");
            	this.atmPassword();
			}
        }
    }
}

// Exit the ATM
exit() {
	alert("Thank you for patronising our ATM machine");
}

withdrawalAmount;
withdrawal() {
	this.withdrawalAmount = parseInt(prompt("How much do you want to withdraw? \n" + "The minimum amount you can withdraw is 1000"));
	if (this.withdrawalAmount !== "" && this.withdrawalAmount !== null && !isNaN(this.withdrawalAmount)) {
		if (this.withdrawalAmount >= 1000) {
			if (this.withdrawalAmount <= this.currentBalance) {
				this.currentBalance -= this.withdrawalAmount;
				alert("Transaction successful!");
				alert("Your remaining balance is $" + this.currentBalance);
				this.toContinue();
			} else {
				alert("You do not have sufficient funds!");
				this.withdrawal();
			}
		} else {
			alert("You must withdraw at least 1000");
			this.withdrawal();
		}
	} else {
		alert("Error: please enter a number!");
		this.withdrawal();
	}
}

yesOrNo;
// Does the user wish to continue using the ATM
toContinue(){
    let yesOrNo = parseInt(prompt("Do you want to perform another transaction? \n 1. Yes \n 2. No"));
	if (this.yesOrNo !== "" && yesOrNo !== null) {
    	if (yesOrNo === 2){
			this.exit();
    	}
		else {
			this.atmCardNum(); 
    	}
	} else {
		alert("Please make a valid selection");
		this.toContinue();
	}
}

}
