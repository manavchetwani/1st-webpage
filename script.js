
function showForm() {
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('formScreen').style.display = 'block';
    document.getElementById('grievanceScreen').style.display = 'none';
    document.getElementById('thanksScreen').style.display = 'none';
}

function showGrievanceForm() {
    document.getElementById('formScreen').style.display = 'none';
    document.getElementById('grievanceScreen').style.display = 'block';
}

function showThanks() {
    document.getElementById('grievanceScreen').style.display = 'none';
    document.getElementById('thanksScreen').style.display = 'block';
}
