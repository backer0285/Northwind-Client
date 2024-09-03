document.addEventListener("DOMContentLoaded", function () {
    const elem = document.getElementById('dob');
    const datepicker = new Datepicker(elem, {
        // options
        autohide: true,
        format: 'MM-dd'
    });

    // uncheck all boxes by default (Firefox)
    document.querySelectorAll('.form-check-input').forEach(c => c.checked = false);

    // attention seeker
    const seekers = ["animate__bounce", "animate__flash", "animate__pulse", "animate__rubberBand", , "animate__shakeX", , "animate__shakeY",
        "animate__headShake", "animate__swing", "animate__tada", "animate__wobble", "animate__jello", "animate__heartBeat"
    ];
    let seeker = Math.floor(Math.random() * 3);
    document.getElementById('heading').classList.add(seekers[seeker]);

    // event listener for check/uncheck
    document.getElementById('checkbox-card').addEventListener('change', function (e) {
        if (e.target.classList.contains('form-check-input')) {
            const elem = document.getElementById(e.target.id + 'Img');
            elem.style.visibility = "visible";
            elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
            e.target.checked ?
                elem.classList.add("animate__animated", "animate__bounceInDown") :
                elem.classList.add("animate__animated", "animate__bounceOutUp");
        }
    });

    // toast
    document.getElementById('submit').addEventListener('click', function (e) {
        if (e.target.classList.contains('balloon-submit')) {
            if (!document.getElementById("red").checked && !document.getElementById("green").checked && !document.getElementById("blue").checked) {
                e.preventDefault();
                bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();
            }
        }
    });

    // mouse over color
    const redCheck = document.getElementById('red-box');
    redCheck.addEventListener('mouseover', function(e){
        document.getElementById('heading').classList.add('text-danger');
    })
    redCheck.addEventListener('mouseout', function(e){
        document.getElementById('heading').classList.remove('text-danger');
    })
    const greenCheck = document.getElementById('green-box');
    greenCheck.addEventListener('mouseover', function(e){
        document.getElementById('heading').classList.add('text-success');
    })
    greenCheck.addEventListener('mouseout', function(e){
        document.getElementById('heading').classList.remove('text-success');
    })
    const blueCheck = document.getElementById('blue-box');
    blueCheck.addEventListener('mouseover', function(e){
        document.getElementById('heading').classList.add('text-primary');
    })
    blueCheck.addEventListener('mouseout', function(e){
        document.getElementById('heading').classList.remove('text-primary');
    })
});

