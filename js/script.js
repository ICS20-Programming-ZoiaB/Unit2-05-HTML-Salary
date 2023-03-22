// Copyright (c) 2022 ZoiaB All rights reserved
//
// Created by: ZoiaB
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict"

// declare constants
const TAX_RATE = 0.2005

/**
 * Function for unser input
 */
function payClicked () {
  // user input
  let hours = parseFloat(document.getElementById("number-of-hours").value)
  let rate = parseFloat(document.getElementById("hourly-rate").value)

  // calculate the pay and the tax
  let total_pay = hours * rate
  let tax = TAX_RATE * total_pay
	let net_income = total_pay - tax

  // display the results
  document.getElementById("total-earned").innerHTML = "Your pay will be $" + net_income.toFixed(2)
  document.getElementById("tax").innerHTML = "The government will take $" + tax.toFixed(2)
}