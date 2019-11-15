const github = new Github;

const ui = new UI;






document.querySelector('#searchUser').addEventListener('keyup', function (e) {
    const inputText = e.target.value;
    if (inputText !== '') {
        github.getUser(inputText)
            .then(data => {
                if (data.pro.message === "Not Found") {
                    // Show Alert From UI.js
                    ui.showAlert('沒有找到使用者', 'alert alert-danger')

                } else {
                    // show profile form UI.js
                    ui.displayProfile(data.pro)
                    ui.showRepos(data.userRepos);
                };
            })
    } else {
        // Clear Profile UI
        ui.clearProfile();
        ui.clearAlert();


    }
})