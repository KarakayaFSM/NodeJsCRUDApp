function deleteLead(leadId){
    $.ajax({
        url: "/lead/" + leadId + "/delete_json",
        contentType: "application/json; charset=utf8",
        dataType: "json",
        data: JSON.stringify({leadId}),
        type: "POST",
        success: ((res) => {
            //delete corresponding lead
            console.log('Result: ',res);
            //$("#"+leadId) : searching for an element
            //(that has the specified ID) in the DOM
            $("#"+leadId).remove();
        }),
        error:((error) => {
            console.log('Error: ',error);
        })
    });
}

//KALINAN YER : 1.13.48