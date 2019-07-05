M.AutoInit();

/*
  START QUERY SELECTORS
*/
const startDateElt = document.querySelector("#startDate")
const endDateElt = document.querySelector("#endDate")
const nameElt = document.querySelector("#name")
const groupElt = document.querySelector("#group")
const announceElt = document.querySelector("#announcement")
const submitBtn = document.querySelector("#testSubmit")
const addIconElt = document.querySelector("#addIcon")
const categoryListElt = document.querySelector("#categoryUl")
const modalElt = document.querySelector("#modal1")
const footerModalM = M.Modal.getInstance(modalElt)
/*
  END QUERY SELECTORS
*/



/*
  DATEPICKER
*/

let startDateInst;
let endDateInst;

//Add in Materialize Date Object once DOM has loaded
document.addEventListener('DOMContentLoaded', function() {
  //Initialize the Start Date object
  let elems = document.querySelectorAll('#startDate');
  //Includes callback function to update endDate based on startDate
  //Includes setting the minimum date to today's date
  let options = {
    showClearBtn: true,
    format: 'ddd m/d/yyyy',
    onSelect: select,
    minDate: new Date()
  };
  //Officially initialize
  startDateInst = M.Datepicker.init(elems, options);
  
  //Initialize the End Date object
  elems = document.querySelectorAll('#endDate');
  options = {
    showClearBtn: true,
    format: 'ddd m/d/yyyy'
  };
  //Officially initialize
  endDateInst = M.Datepicker.init(elems, options);

});


//this function gets called when a date is selected in the startDate datepicker
const select = (date) => {
  //console.log(date);
  //sets the min end-date to be the same as the new start date that was just picked
  endDateInst[0].options['minDate'] = new Date(startDateInst[0].toString())
  //if there is no end date OR the end date is after the new start date
  if(endDateElt.value == "" || startDateInst[0].date > endDateInst[0].date) {
    //set the text box value
    endDateElt.value = startDateInst[0].toString();
    //set the date in the background of the end date
    endDateInst[0].setDate(new Date(date));    
  }
};

/*
  END MATERIALIZE CODE & DATEPICKER
*/