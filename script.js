document.getElementById("previewButton").addEventListener("click", function () {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const skills = document.getElementById("skills").value.trim();
    const experience = document.getElementById("experience").value.trim();

    if (!name || !email || !skills || !experience) {
        alert("Please fill in all the fields!");
        return;
    }

    const previewContent = `
        <h3>${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Skills:</strong></p>
        <ul>${skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>
        <p><strong>Work Experience:</strong></p>
        <p>${experience}</p>
    `;
    document.getElementById("resumePreview").innerHTML = previewContent;
});

document.getElementById("downloadButton").addEventListener("click", function () {
    const previewContent = document.getElementById("resumePreview").innerHTML;
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.html(previewContent, {
        callback: function (doc) {
            doc.save("resume.pdf");
        }
    });
});
