
const studentsData = [
    { name: "Harsh", status: "Absent" },
    { name: "John", status: "Absent" },
    { name: "Alice", status: "Absent" },
    { name:"Karan", status:"Absent"}
];

const studentsContainer = document.querySelector(".students");

displayStudentData()
function displayStudentData() {

    studentsContainer.innerHTML = "";

    for (let i = 0; i < studentsData.length; i++) {
        const student = studentsData[i];
        const studentDiv = document.createElement("div");

        const namesLabel = document.createElement("label");
        namesLabel.textContent = student.name;
        studentDiv.appendChild(namesLabel);

        for (let j = 0; j < 3; j++) {
            const radioLabel = document.createElement("label");
            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = "attendance" + i;

            switch (j) {
                case 0:
                    radioLabel.textContent = "Present";
                    radio.style.accentColor="green";
                    break;
                case 1:
                    radioLabel.textContent = "Absent";
                    radio.style.accentColor="red";
                    break;
                case 2:
                    radioLabel.textContent = "Late";
                    radio.style.accentColor="yellow";
                    break;
            }

            studentDiv.appendChild(radio);
            studentDiv.appendChild(radioLabel);
        }

        studentsContainer.appendChild(studentDiv);
    }
}


function addNewStudent() {
   
    const studentNameInput = document.createElement("input");
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Submit";

    submitButton.addEventListener('click', () => {
        const newStudentName = studentNameInput.value;
        studentsData.push({ name: newStudentName, status: "nodata" });
        displayStudentData();
        studentNameInput.value = '';
        submitButton.hidden = true;
        studentNameInput.hidden = true;
        enter.disabled = false;
    });

    newstudentCOntainer.append(studentNameInput, submitButton);
}

const radioSubmit = document.querySelector(".submitradio")

radioSubmit.addEventListener('click',()=>{
})

const enter = document.querySelector(".addnewstudent");
const newstudentCOntainer = document.querySelector(".newstudent");

enter.addEventListener('click', () => {
    enter.disabled = true;
    addNewStudent();
});

function getSelectedRadio() {
    for (let j = 0; j < studentsData.length; j++) {
        const radioInput = document.getElementsByName("attendance" + j);
        for (let k = 0; k < radioInput.length; k++) {
            if (radioInput[k].checked) {
                console.log("Radio group: " + (j + 1) + ", Content: " + radioInput[k].nextSibling.textContent);
                studentsData[j].status=radioInput[k].nextSibling.textContent
            }
        }
    }
    console.log(studentsData)
}
const deletestudent = document.querySelector('.deletestudent');

deletestudent.addEventListener('click', () => {
    deletestudents();
    deletestudent.disabled=true

});

const deleteContainer = document.querySelector(".deletebutton");


// function deletestudents() {
//     const deleteInput = document.createElement('input');
//     const deletbutton = document.createElement("button");
    
//     deletbutton.textContent="Submit"
//     deletbutton.type= "submit"

//     deletbutton.addEventListener('click',()=>{
//         const deletename = deleteInput.value
//         console.log(deletename)
       
//         for( students in studentsData){
//             if ( studentsData[students].name == deletename){
//                 studentsData.splice(students,1);
//             }
//         }
//         displayStudentData();
//         deleteInput.value = '';
//         deletbutton.hidden = true;
//         deleteInput.hidden = true;
//         deletestudent.disabled = false;
//         deletename.hidden = true
//         deleteInput.disabled = true

//         console.log(studentsData)
//     })

//     deleteContainer.append(deleteInput)
//     deleteContainer.append(deletbutton)

// }
function deletestudents() {
    const deleteInput = document.createElement('input');
    const deletbutton = document.createElement("button");

    deletbutton.textContent = "Submit"
    deletbutton.type = "submit"

    deletbutton.addEventListener('click', () => {
        const deletename = deleteInput.value;
        console.log(deletename)

        for (let i = 0; i < studentsData.length; i++) {
            if (studentsData[i].name === deletename) {
                studentsData.splice(i, 1);
            }
        }
        displayStudentData();
        deleteInput.value = '';
        deletbutton.style.display = 'none'; // Hide the button
        deleteInput.style.display = 'none'; // Hide the input
        deletestudent.disabled = false;
        console.log(studentsData);
    })

    deleteContainer.append(deleteInput);
    deleteContainer.append(deletbutton);
}
