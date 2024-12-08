$(document).ready(function () {
    
    $('.navBtn').click(function () {
        const target = $(this).data('target');
        $('#formSection > div').addClass('hidden');
        $(`#${target}`).removeClass('hidden'); 
    });

    // Diabetes Prediction AJAX
    $('#predictDiabetesBtn').click(function () {
        const inputData = [
            $('#pregnancies').val(),
            $('#glucose').val(),
            $('#blood_pressure').val(),
            $('#skin_thickness').val(),
            $('#insulin').val(),
            $('#bmi').val(),
            $('#diabetes_pedigree').val(),
            $('#age').val()
        ];

        if (inputData.includes("")) {
            alert('Please fill out all fields for diabetes prediction.');
            return;
        }

        $.ajax({
            url: 'http://127.0.0.1:5000/predict/diabetes',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ data: [inputData.join(',')] }),
            success: function (response) {
                $('#diabetesResult').text(response.prediction);
            },
            error: function () {
                $('#diabetesResult').text('Error predicting diabetes.');
            }
        });
    });

$('#predictHeartBtn').click(function () {
    const inputData = [
        $('#age_heart').val(),
        $('#sex').val(),
        $('#cp').val(),
        $('#trestbps').val(),
        $('#chol').val(),
        $('#fbs').val(),
        $('#restecg').val(),
        $('#thalach').val(),
        $('#exang').val(),
        $('#oldpeak').val(),
        $('#slope').val(),
        $('#ca').val(),
        $('#thal').val()
    ];

    if (inputData.includes("")) {
        alert('Please fill out all fields for heart disease prediction.');
        return;
    }

    $.ajax({
        url: 'http://127.0.0.1:5000/predict/heart',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ data: [inputData.join(',')] }),
        success: function (response) {
            $('#heartResult').text(response.prediction);
        },
        error: function () {
            $('#heartResult').text('Error predicting heart disease.');
        }
    });
});


$('#predictParkinsonsBtn').click(function () {
    const inputData = [
        $('#mdvpFo').val(),
        $('#mdvpFhi').val(),
        $('#mdvpFlo').val(),
        $('#mdvpJitter').val(),
        $('#mdvpJitterAbs').val(),
        $('#mdvpRAP').val(),
        $('#mdvpPPQ').val(),
        $('#jitterDDP').val(),
        $('#mdvpShimmer').val(),
        $('#mdvpShimmerdB').val(),
        $('#shimmerAPQ3').val(),
        $('#shimmerAPQ5').val(),
        $('#mdvpAPQ').val(),
        $('#shimmerDDA').val(),
        $('#nhr').val(),
        $('#hnr').val(),
        $('#rpde').val(),
        $('#dfa').val(),
        $('#spread1').val(),
        $('#spread2').val(),
        $('#d2').val(),
        $('#ppe').val()
    ];

    if (inputData.includes("")) {
        alert('Please fill out all fields for Parkinson\'s prediction.');
        return;
    }

    $.ajax({
        url: 'http://127.0.0.1:5000/predict/parkinsons',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ data: [inputData.join(',')] }),
        success: function (response) {
            $('#parkinsonsResult').text(response.prediction);
        },
        error: function () {
            $('#parkinsonsResult').text('Error predicting Parkinson\'s disease.');
        }
    });
});

   
});
