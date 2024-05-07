// create account

function register() {
    (acno = reg_acno.value), (uname = reg_name.value), (pswd = reg_pswd.value);
  
    console.log(acno, uname, pswd);
  
    accountDetails = {
      acno,
      uname,
      pswd,
      balance: 0,
    };
  
    if (acno in localStorage) {
      alert("User already registered");
    } else {
      localStorage.setItem(acno, JSON.stringify(accountDetails));
      alert("Registration successfull");
      window.location = "./login.html";
    }
  }
  
  function login() {
    acno = login_acno.value;
    pswd = login_pswd.value;
  
    if (acno in localStorage) {
      accountDetails = JSON.parse(localStorage.getItem(acno));
      if (pswd == accountDetails.pswd) {
        alert("Login Succesful");
        window.location = "./welcome.html";
      } else {
        alert("Incorrect password");
      }
    } else {
      alert("Invalid account number");
    }
  }
  
  let amnt = 0;
  let withdraw = 0;
  let balance = 0;
  
  function depositMoney() {
    acno = deposit_acno.value;
    amnt = deposit_amnt.value;
    amnt = Math.floor(amnt);
  
    if (acno in localStorage) {
      accountDetails = JSON.parse(localStorage.getItem(acno));
      if (acno == accountDetails.acno && amnt <= 0) {
        alert("The value should not be empty or negative");
      } else {
        accountDetails.balance += amnt;
        localStorage.setItem(acno, JSON.stringify(accountDetails));
  
        alert("Your amount is succesfully added");
  
        let result = document.getElementById("display");
        result.innerHTML = `<div style="color:red;font-weight:500;font-size:30px">Your current balance ${accountDetails.balance}</div>`;
      }
    } else {
      alert("Incorrect account number");
    }
  }
  
  function Withdraw() {
    acno = withdraw_acno.value;
    withdraw = withdraw_amnt.value;
  
    if (acno in localStorage) {
      accountDetails = JSON.parse(localStorage.getItem(acno));
      if (acno == accountDetails.acno && withdraw <= 0) {
        alert("Please enter amount");
      } else if (withdraw > accountDetails.balance) {
        alert("Insufficient balance");
      } else {
        alert(`Your current balance ${accountDetails.balance}`);
        alert(`Amount to be withdrawn ${withdraw}`);
  
        accountDetails.balance -= withdraw;
        alert("Amount succesfully withdrawn");
        localStorage.setItem(acno, JSON.stringify(accountDetails));
  
        let result1 = document.getElementById("Withdraw_amnt");
        result1.innerHTML = `<div style="color:dark;font-weight:500;font-size:30px"> Current account balance ${accountDetails.balance}</div>`;
      }
    } else {
      alert("Invalid account number");
    }
  }
  
  function logout() {
    localStorage.clear();
    window.location = "./index.html";
  }